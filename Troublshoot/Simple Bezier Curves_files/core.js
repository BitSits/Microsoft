/// <reference path="jquery-1.2.6.js" />

//********************************************************************************
//* Forums Namespace
//********************************************************************************
var Forums = {};

//********************************************************************************
//* Forums Constants
//********************************************************************************
Forums.Constants =
{
    ExpandCollapseImage: "<img src=\"" + ForumsRes.url_transGif + "\" class=\"expcol\"/>",
    ExpandCollapseLink: "<a class=\"expcol\" href=\"javascript:void(0);\"/>"
};

//********************************************************************************
//* Forums.Rte
//********************************************************************************
Forums.Rte =
{
    IsOpen: false,

    IsReady: false,

    canShow: function(showAlert) {
        if (Forums.Rte.IsOpen === false) {
            return true;
        }

        if (showAlert === true) {
            alert(ForumsRes.rte_alreadyOpen);
        }

        return false;
    },

    show: function(editorName) {
        if (Forums.Rte.IsOpen === true) {
            return false;
        }

        tinyMCE.execCommand("mceAddControl", true, editorName);

        setTimeout(function() { Forums.Rte.IsReady = true; }, ForumsRes.rte_readyDelay);

        Forums.Rte.IsOpen = true;

        return true;
    },

    hide: function(editorName) {
        tinyMCE.execCommand("mceRemoveControl", false, editorName);
        Forums.Rte.IsOpen = false;
        Forums.Rte.IsReady = false;
    },

    get_text: function(editorName) {
        return tinyMCE.get(editorName).getContent();
    },

    set_text: function(editorName, content) {
        if (Forums.Rte.IsReady)
            tinyMCE.get(editorName).setContent(content);
        else
            setTimeout(function() { tinyMCE.get(editorName).setContent(content); }, 100);
    },

    show_busy: function(editorName, isBusy) {
        tinyMCE.get(editorName).setProgressState(isBusy);
    },

    customInitInstance: function(ed) {
        //Default Behavior - Place cursor at end
        ed.focus();
        ed.execCommand("selectall", false);
        ed.selection.collapse(false);
    }
};

Forums.Filters =
{
    decorateFilters: function()
    {
        var filterBar = $(this);
        $("h6", this).prepend(Forums.Constants.ExpandCollapseLink);
        $("h6", this).click(function(evt)
        {
            $(filterBar).children("div.content").children("div.advanced").slideToggle("fast");
            $(filterBar).toggleClass("expanded");
        });

        $("h6", this).mouseover(function()
        {
            $(filterBar).addClass("hover");
        });

        $("h6", this).mouseout(function()
        {
            $(filterBar).removeClass("hover");
        });

        if ($("div.advanced li a", this).hasClass("selected"))
            $("h6", this).click();
    }
};

//********************************************************************************
//* Forums.Message
//********************************************************************************
Forums.Message =
{
    autoSubscribeValue: function(message) {
        var autoSubscribe = false;
        try {
            autoSubscribe = pageData.autoSubscribe;
            if (!autoSubscribe) {
                var thread = $(message).parents("li.thread");
                if (thread != null && thread.length > 0) {
                    //Are we in thread list
                    if ($("h3 > img", thread).hasClass("alert")) {
                        autoSubscribe = true;
                    }
                }
                else {
                    //Then we're in a thread
                    var link = $("ul.thread.menu > li > a[name='unsubscribe']");
                    if (link != null && link.length > 0) {
                        autoSubscribe = true;
                    }
                }
            }
        }
        catch (ex) { }

        if (autoSubscribe)
            return "checked='checked'";
        else
            return "";
    },

    edit: function() {

        var msg = $(this).parents("li.message");

        //Setup Reply
        $(this).click(function() {
            if (!Forums.Rte.canShow(true)) {
                return false;
            }

            var editorName = $(msg).attr("id") + "_editor";
            var body = $("div.body", msg);
            $(body).hide();
            $("div.helpful, ul.history, div.abusive, div.menu, div.votingouterbox, div.voting,span.votinglabel", msg).hide();
            var container = "<div class='editor'><form><textarea class='rte' id='" + editorName + "'></textarea></form><div class='commands'><button name='submit'>" + ForumsRes.rte_submitText + "</button><button name='cancel'>" + ForumsRes.rte_cancelText + "</button>&nbsp;<label>" + ForumsRes.rte_reasonLabel + "</label><input type='text' name='reason'/></div></div>";
            $(body).after(container);

            Forums.Rte.show(editorName);

            $("button[name='submit']", msg).click(Forums.Message.submitEdit(msg, $(this).attr("href")));

            $("button[name='cancel']", msg).click(function() {
                Forums.Rte.hide(editorName);
                $("div.editor", msg).remove();
                $(body).show();
                $("div.helpful, ul.history, div.abusive, div.menu,div.votingouterbox, div.voting,span.votinglabel", msg).show();
            });

            $("button[name='submit']", msg).get(0).scrollIntoView(false);

            Forums.Message.loadMessage(editorName, $(this).attr("href"));

            return false;
        });
    },

    reply: function() {
        var msg = $(this).parents("li.message");
        //Setup Reply
        $(this).click(function() {
            if (!Forums.Rte.canShow(true)) {
                return false;
            }
            var editorName = $(msg).attr("id") + "_editor";
            var container = "<div class='editor'><form><textarea class='rte' id='" + editorName + "'></textarea></form><div class='commands'><button name='submit'>" + ForumsRes.rte_submitText + "</button><button name='cancel'>" + ForumsRes.rte_cancelText + "</button>&nbsp;<input type='checkbox' name='subscribe' " + Forums.Message.autoSubscribeValue(msg) + "/><label>" + ForumsRes.rte_subscribeText + "</label></div></div>";
            $(msg).append(container);
            Forums.Rte.show(editorName);

            $("button[name='submit']", msg).click(Forums.Message.submitReply(msg, $(this).attr("href")));

            $("button[name='cancel']", msg).click(function() {
                Forums.Rte.hide(editorName);
                $("div.editor", msg).remove();
            });

            $("button[name='submit']", msg).get(0).scrollIntoView(false);

            return false;
        });
    },

    quote: function() {
        var msg = $(this).parents("li.message");
        //Setup Reply
        $(this).click(function() {
            if (!Forums.Rte.canShow(true)) {
                return false;
            }
            var editorName = $(msg).attr("id") + "_editor";
            var body = $("div.body", msg);
            var helpful = $("div.helpful", msg);
            var container = "<div class='editor'><form><textarea class='rte' id='" + editorName + "'></textarea></form><div class='commands'><button name='submit'>" + ForumsRes.rte_submitText + "</button><button name='cancel'>" + ForumsRes.rte_cancelText + "</button>&nbsp;<input type='checkbox' name='subscribe' " + Forums.Message.autoSubscribeValue(msg) + "/><label>" + ForumsRes.rte_subscribeText + "</label></div></div>";
            $(msg).append(container);
            var html = "<blockquote>" + $(body).html() + "</blockquote><br/>";
            $("#" + editorName, msg).text(html);
            Forums.Rte.show(editorName);

            $("button[name='submit']", msg).click(Forums.Message.submitReply(msg, $(this).attr("href")));

            $("button[name='cancel']", msg).click(function() {
                Forums.Rte.hide(editorName);
                $("div.editor", msg).remove();
            });

            $("button[name='submit']", msg).get(0).scrollIntoView(false);

            return false;
        });
    },

    loadMessage: function(editorName, url) {
        Forums.Rte.show_busy(editorName, true);
        $.ajax(
            {
                type: "GET",
                url: url,
                success: function(results) {
                    Forums.Rte.set_text(editorName, results);
                    Forums.Rte.show_busy(editorName, false);
                },
                error: function(results) {
                    Forums.Rte.show_busy(editorName, false);
                    alert(results.responseText);
                }
            });
    },

    submitEdit: function(msg, url) {
        return function() {
            $("div.editor button", msg).attr("disabled", "disabled");
            var editorName = $(msg).attr("id") + "_editor";
            var text = Forums.Rte.get_text(editorName);
            var reason = $("div.editor > div.commands > input[name='reason']", msg).val();
            Forums.Rte.show_busy(editorName, true);
            $.ajax(
            {
                type: "POST",
                url: url,
                data: { body: text, reason: reason },
                success: function(results) {
                    Forums.Rte.hide(editorName);
                    $("div.editor", msg).remove();
                    $(msg).fadeOut("fast").replaceWith(results).fadeIn("fast").each(Forums.Message.decorateMessage);
                },
                error: function(results) {
                    Forums.Rte.show_busy(editorName, false);
                    $("div.editor button", msg).attr("disabled", "");
                    alert(results.responseText);
                }
            });
        }
    },

    submitReply: function(msg, url) {
        return function() {
            var editorName = $(msg).attr("id") + "_editor";
            $("div.editor button", msg).attr("disabled", "disabled");
            var text = Forums.Rte.get_text(editorName);
            Forums.Rte.show_busy(editorName, true);
            var subscribe = $("div.editor > div.commands > input[name='subscribe']", msg).attr("checked");
            $.ajax(
            {
                type: "POST",
                url: url,
                data: { body: text, subscribe: subscribe },
                success: function(results) {
                    Forums.Rte.hide(editorName);
                    $("div.editor", msg).remove();
                    $(msg).after(results).next().hide().fadeIn("fast").addClass("new").each(Forums.Message.decorateMessage);
                },
                error: function(results) {
                    Forums.Rte.show_busy(editorName, false);
                    $("div.editor button", msg).attr("disabled", "");
                    alert(results.responseText);
                }
            });
        }
    },

    messageAction: function(link, data) {
        return function() {
            var msg = $(link).parents("li.message");
            var id = $(msg).attr("id");
            $(msg).append("<div class=\"submitting\"></div>");
            $(msg).addClass("submitting");
            $.ajax(
            {
                type: "POST",
                url: $(link).attr("href"),
                data: data,
                success: function(results) {
                    $(msg).replaceWith(results);
                    $("li.message[id='" + id + "']").each(Forums.Message.decorateMessage);
                },
                error: function(results) {
                    $("div.submitting", msg).remove();
                    alert(results.responseText);
                }
            });

            return false;
        }
    },

    promptAction: function(link, label, data) {
        return function() {
            var reason = prompt(label, "");
            if (reason !== null) {
                data.reason = reason;
                Forums.Message.messageAction(link, data)();
            }

            return false;
        }
    },

    answer: function() {
        $(this).click(Forums.Message.messageAction($(this), { isAnswer: true }));
    },

    unanswer: function() {
        $(this).click(Forums.Message.messageAction($(this), { isAnswer: false }));
    },

    proposeAnswer: function() {
        $(this).click(Forums.Message.messageAction($(this), { isProposed: true }));
    },

    unproposeAnswer: function() {
        $(this).click(Forums.Message.messageAction($(this), { isProposed: false }));
    },

    clearAbuse: function() {
        $(this).click(Forums.Message.promptAction(this, ForumsRes.prompt_clearAbuseReason, { isAbuse: false }));
    },

    reportAbuse: function() {
        $(this).click(Forums.Message.promptAction(this, ForumsRes.prompt_reportAbuseReason, { isAbuse: true }));
    },

    deleteMessage: function() {
        $(this).click(Forums.Message.promptAction(this, ForumsRes.prompt_deleteReason, { isDeleted: true }));
    },

    undeleteMessage: function() {
        $(this).click(Forums.Message.promptAction(this, ForumsRes.prompt_undeleteReason, { isDeleted: false }));
    },

    voteHelpful: function() {
        var link = $(this);
        $(this).click(function() {
            $(link).fadeOut("fast");
            var msg = $(link).parents("li.message");
            $("div.helpful > span > img", msg).addClass("submitting");
            $.ajax(
            {
                type: "POST",
                url: $(link).attr("href"),
                data: { isHelpful: true },
                dataType: "json",
                success: function(results) {
                    $("div.helpful > span > span", msg).text(results.Votes);
                    $("div.helpful > span > img", msg).removeClass("submitting");
                },
                error: function(results) {
                    $("div.helpful > span > img", msg).removeClass("submitting");
                    alert(results.responseText);
                }
            });

            return false;
        });
    },

    voteUp: function() {
        $(this).click(Forums.Message.messageAction($(this), { isHelpful: true }));
    },

    voteDown: function() {
        $(this).click(Forums.Message.messageAction($(this), { isHelpful: false }));
    },

    decorateMessage: function() {
        if (typeof (pageData) == "undefined" || pageData == null || pageData.validUser == false) {
            return;
        }

        $("a[name='reportAbuse']", this).each(Forums.Message.reportAbuse);
        $("a[name='clearAbuse']", this).each(Forums.Message.clearAbuse);
        $("div.helpful a.vote", this).each(Forums.Message.voteHelpful);

        $("a[name='voteup']", this).each(Forums.Message.voteUp);
        $("a[name='votedown']", this).each(Forums.Message.voteDown);

        var menu = $("div.menu.message", this);
        $("a[name='setAnswer']", menu).each(Forums.Message.answer);
        $("a[name='unsetAnswer']", menu).each(Forums.Message.unanswer);
        $("a[name='proposeAnswer']", menu).each(Forums.Message.proposeAnswer);
        $("a[name='unproposeAnswer']", menu).each(Forums.Message.unproposeAnswer);
        $("a[name='reply']", menu).each(Forums.Message.reply);
        $("a[name='quote']", menu).each(Forums.Message.quote);
        $("a[name='edit']", menu).each(Forums.Message.edit);
        $("a[name='delete']", menu).each(Forums.Message.deleteMessage);
        $("a[name='undelete']", menu).each(Forums.Message.undeleteMessage);
    }
}

//********************************************************************************
//* Forums.Thread
//********************************************************************************
Forums.Thread =
{
    threadAction: function(link, data) {
        return function() {
            $("img.icon", link).addClass("submitting");
            $.ajax(
            {
                type: "POST",
                url: $(link).attr("href"),
                data: data,
                dataType: "json",
                success: function(results) {
                    window.location = results.url;
                },
                error: function(results) {
                    $("img.icon", link).removeClass("submitting");
                    alert(results.responseText);
                }
            });
            return false;
        }
    },

    promptAction: function(link, label, data) {
        return function() {
            var reason = prompt(label, "");
            if (reason !== null) {
                data.reason = reason;
                Forums.Thread.threadAction(link, data)();
            }

            return false;
        }
    },

    loadMetaQuestions: function() {
        if ($("#getMetaQuestionUrl").val()) {
            $.get($("#getMetaQuestionUrl").val().replace("xxx", $("#forumName").val()), {}, function(results) {
                $("#metaquestions").html(results);
                $(".metaanswer").each(function() {
                    var qid = $(this).attr("qid");
                    var vid = $(this).attr("vid");
                    if ($("#" + qid)) {
                        $("#" + qid).val(vid);
                    }
                });
            });
        }
        return;
    },

    editThread: function() {
        var msg = $(this).parents("li.message");
        //Setup Reply
        $(this).click(function() {
            if (!Forums.Rte.canShow(true)) {
                return false;
            }
            var editorName = $(msg).attr("id") + "_editor";
            var subject = $("#content > h1 > span[name='subject']").text();
            var body = $("div.body", msg);
            $(body).hide();
            $("div.helpful, ul.history, div.abusive, div.menu,div.votingouterbox, div.voting,span.votinglabel,span.metaanswer", msg).hide();
            var container = "<div class='editor'><div style='width:100%;'><label style='width:50px;margin-left:5px;margin-right:10px;'>" + ForumsRes.rte_subjectLabel + "</label> <input type='text' name='subject' size='60'/></div><form><textarea class='rte' id='" + editorName + "'></textarea><div id='metaquestions'></div><br/></form><div class='commands'><button name='submit'>" + ForumsRes.rte_submitText + "</button><button name='cancel'>" + ForumsRes.rte_cancelText + "</button>&nbsp;<label>" + ForumsRes.rte_reasonLabel + "</label><input type='text' name='reason'/></div></div>";
            $(body).after(container);
            $("input[name='subject']", msg).val(subject);
            $("#" + editorName, msg).text($(body).html());
            Forums.Rte.show(editorName);
            
             Forums.Thread.loadMetaQuestions();
            


            $("button[name='submit']", msg).click(Forums.Thread.submitEdit(msg, $(this).attr("href")));

            $("button[name='cancel']", msg).click(function() {
                Forums.Rte.hide(editorName);
                $("div.editor", msg).remove();
                $(body).show();
                $("div.helpful, ul.history, div.abusive, div.menu,div.votingouterbox, div.voting,span.votinglabel,span.metaanswer", msg).show();
            });

            $("button[name='submit']", msg).get(0).scrollIntoView(false);


            return false;
        });
    },

    submitEdit: function(msg, url) {
        return function() {
            $("div.editor button", msg).attr("disabled", "disabled");
            var editorName = $(msg).attr("id") + "_editor";
            var text = Forums.Rte.get_text(editorName);
            var reason = $("div.editor > div.commands > input[name='reason']", msg).val();
            var subject = $("div.editor > div > input[name='subject']", msg).val();
            var metaanswers = new Array();
            var i = 0;
            $(".metaq").each(function() {
                metaanswers[i] = $(this).val();
                i = i + 1;
            });

            Forums.Rte.show_busy(editorName, true);
            $.ajax(
            {
                type: "POST",
                url: url,
                data: { subject: subject, body: text, reason: reason, metaanswer: metaanswers },
                dataType: "json",
                success: function(results) {
                    Forums.Rte.hide(editorName);
                    $("div.editor", msg).remove();
                    window.location = results.url;
                },
                error: function(results) {
                    Forums.Rte.show_busy(editorName, false);
                    $("div.editor button", msg).attr("disabled", "");
                    alert(results.responseText);
                }
            });
        }
    },

    clearSticky: function() {
        $(this).click(Forums.Thread.threadAction(this, { stickyDate: "" }));
    },

    deleteThread: function() {
        $(this).click(Forums.Thread.promptAction(this, ForumsRes.prompt_deleteReason, { isDeleted: true }));
    },

    deescalateThread: function() {
        $(this).click(Forums.Thread.promptAction(this, ForumsRes.prompt_deEscalateReason, { isEscalated: false }));
    },

    escalateThread: function() {
        $(this).click(Forums.Thread.promptAction(this, ForumsRes.prompt_escalateReason, { isEscalated: true }));
    },

    lock: function() {
        $(this).click(Forums.Thread.threadAction(this, { isLocked: true }));
    },

    makeSticky: function() {
        var link = $(this);
        $(this).click(function() {
            var stickyDate = prompt(ForumsRes.prompt_stickyUntil, "");
            if (stickyDate !== null) {
                Forums.Thread.threadAction(link, { stickyDate: stickyDate })();
            }

            return false;
        });
    },

    subscribe: function() {
        $(this).click(Forums.Thread.threadAction(this, { isSubscribed: true }));
    },

    undeleteThread: function() {
        $(this).click(Forums.Thread.promptAction(this, ForumsRes.prompt_undeleteReason, { isDeleted: false }));
    },

    unlock: function() {
        $(this).click(Forums.Thread.threadAction(this, { isLocked: false }));
    },

    unsubscribe: function() {
        $(this).click(Forums.Thread.threadAction(this, { isSubscribed: false }));
    },

    join: function() {
        $(this).click(Forums.Thread.threadAction($(this), { isJoined: true }));
    },

    unjoin: function() {
        $(this).click(Forums.Thread.threadAction($(this), { isJoined: false }));
    },

    decorateThreadMenu: function() {
        $("a[name='delete']", this).each(Forums.Thread.deleteThread);
        $("a[name='undelete']", this).each(Forums.Thread.undeleteThread);
        $("a[name='editThread']", this).each(Forums.Thread.editThread);
        $("a[name='lock']", this).each(Forums.Thread.lock);
        $("a[name='unlock']", this).each(Forums.Thread.unlock);
        $("a[name='sticky']", this).each(Forums.Thread.makeSticky);
        $("a[name='clearSticky']", this).each(Forums.Thread.clearSticky);
        $("a[name='subscribe']", this).each(Forums.Thread.subscribe);
        $("a[name='unsubscribe']", this).each(Forums.Thread.unsubscribe);
        $("a[name='escalate']", this).each(Forums.Thread.escalateThread);
        $("a[name='deEscalate']", this).each(Forums.Thread.deescalateThread);

        $("a[name='joinQuestion']").each(Forums.Thread.join);
        $("a[name='unJoinQuestion']").each(Forums.Thread.unjoin);
    },

    messagesLoaded: function(thread) {
        $(thread).removeClass("loading");
        $(thread).removeClass("hasUnread");
        $(thread).removeClass("new");
        $(thread).addClass("loaded");
        $(thread).addClass("viewed");
        $("div.preview", thread).append("<div class=\"links\"></div>");

        var links = $("div.links", thread);
        $(links).append("<a name=\"view\"></a>");

        var viewLink = $("a[name='view']", links);
        var viewHref = $("h3 a:eq(1)", thread).attr("href");
        $(viewLink).text(ForumsRes.thread_viewThreadText).attr("href", viewHref).attr("title", ForumsRes.thread_viewThreadText);

        $(links).append("<a name=\"close\"></a>");

        var closeLink = $("a[name='close']", links);
        $(closeLink).text(ForumsRes.thread_closePreviewText).attr("href", "javascript:void(0)").attr("title", ForumsRes.thread_closePreviewText);
        $(closeLink).click(function() { $("h3", thread).click(); });


        $("div.preview", thread).slideToggle("fast");
        $("li.message", thread).each(Forums.Message.decorateMessage);
    },

    decorateThread: function() {
        var thread = $(this);
        $("h3 > a", this).before(Forums.Constants.ExpandCollapseLink);
        $(this).append("<div class=\"preview\"></div>");
        $("h3", this).click(function(evt) {
            if (evt.target.nodeName.toLowerCase() === "a") {
                if (evt.target.className !== "expcol") {
                    return;
                }
            }

            $(thread).toggleClass("expanded");

            if ($(thread).hasClass("loading"))
                return;

            if ($(thread).hasClass("loaded")) {
                $("div.editor button[name='cancel']", thread).click();
                $("div.preview", thread).slideToggle("fast");
                return;
            }

            $(thread).addClass("loading");
            var url = $("h3:first > a:eq(1)", thread).attr("href") + "/messages";
            url = url.substring(7);
            url = url.substring(url.indexOf('/'));
            $("div.preview", thread).load(url, null, function() { Forums.Thread.messagesLoaded(thread); });
        });

        $("h3", this).mouseover(function() {
            $(thread).addClass("hover");
        });

        $("h3", this).mouseout(function() {
            $(thread).removeClass("hover");
        });
    }
}

//********************************************************************************
//* Forums.Threads
//********************************************************************************
Forums.Threads =
{
    initUpdater: function() {
        if (typeof (pageData) == "undefined" || pageData == null || pageData.enabled == false || pageData.interval < 1) {
            return;
        }

        $("body").append("<div id='updateHolder' style='display: none;'></div>");
        setTimeout(Forums.Threads.requestUpdates, pageData.interval);
    },

    processUpdates: function() {
        if ($("#content > ul.threads > li").hasClass("expanded")) {
            setTimeout(Forums.Threads.processUpdates, 1000);
        }
        else {
            while (true) {
                var last = $("#updateHolder > ul > li:last");
                if (last == null || last.length == 0) {
                    break;
                }

                var selector = "#content > ul.threads > li[id='" + $(last).attr("id") + "']";
                var item = $(selector);
                if (item !== null && item.length > 0) {
                    //Currently exists on page
                    $(selector).remove();
                }

                $("#content > ul.threads").prepend($(last));
                $(selector).each(Forums.Thread.decorateThread);
                $(selector).addClass("new");
            }

            pageData.date = $("#updateHolder > input[name='timestamp']").val()
            $("#updateHolder").empty();
            setTimeout(Forums.Threads.requestUpdates, pageData.interval);
        }
    },

    receiveUpdates: function(results) {
        $("#updateHolder").html(results);
        Forums.Threads.processUpdates();
    },

    requestUpdates: function() {
        $.get(pageData.url, { "since": pageData.date }, Forums.Threads.receiveUpdates);
    }
}

//********************************************************************************
//* 
//********************************************************************************
Forums.Leaderboards =
{
    total: 0,
    current: 0,

    init: function() {
        Forums.Leaderboards.total = $(".box", this).length;
        if (Forums.Leaderboards.total > 0) {
            var sel = ".box:eq(" + Forums.Leaderboards.current + ")";
            $(sel, this).show();
            setTimeout(Forums.Leaderboards.next, 15000);
        }
    },

    next: function() {
        var container = $("#rail div.leaderboards");
        var sel = ".box:eq(" + Forums.Leaderboards.current + ")";
        $(sel, container).hide();
        Forums.Leaderboards.current += 1;
        if (Forums.Leaderboards.current >= Forums.Leaderboards.total) {
            Forums.Leaderboards.current = 0;
        }

        sel = ".box:eq(" + Forums.Leaderboards.current + ")";
        $(sel, container).show();
        setTimeout(Forums.Leaderboards.next, 15000);
    }
}

//********************************************************************************
//* 
//********************************************************************************
Forums.Users =
{
    usersAction: function(link, data, operation) {

        return function() {

            $("img.icon", link).addClass("submitting");
            $.post($(link).attr("href"), data, function(results) {
                $(link).remove();
            }, "json");
            return false;
        }
    },

    blockAvatar: function() {
        var link = $(this);
        $(this).click(Forums.Users.usersAction(link, { blockAvatar: true }));
    },

    unblockAvatar: function() {
        var link = $(this);
        $(this).click(Forums.Users.usersAction(link, { blockAvatar: false }));
    },

    decorateUsers: function() {

        $("a[name='blockUnblockAvatar']", this).each(Forums.Users.blockAvatar);
        //        $("a[name='unblockavatar']", this).each(Forums.Users.unblockAvatar);
    }
}

//********************************************************************************
//* 
//********************************************************************************
$.addToRail = function(urls, callback) {
    for (var i = 0; i < urls.length; i++) {
        var container = document.createElement("div");
        $("#rail").append(container);
        $(container).load(urls[i], null, callback);
    }
}

//********************************************************************************
//* 
//********************************************************************************
$.fn.popup = function() {
    $(this).each(function() {
        var name = "a[name='" + $(this).attr("name") + "']";
        var pname = "ul[name='" + $(this).attr("name") + "Popup']";
        var pWidth = $(pname).width();
        $(this).append(Forums.Constants.ExpandCollapseImage);

        var hide = function hidePopup() {
            $("ul.popup").hide();
            $("body").unbind("click.popup");
        };

        $(this).click(function(evt) {
            $("ul.popup").hide();
            var position = $(name).position();
            if ($(pname).attr("popupAlign") == "right") {
                $(pname).css("left", position.left + ($(evt.target).width() / 2) - pWidth);
            }
            else {
                $(pname).css("left", position.left);
            }
            $(pname).css("top", position.top + ($(evt.target).height() * 1.5));
            $(pname).show();
            evt.stopPropagation();
            $("body").bind("click.popup", hide);
        });
    });
};

//********************************************************************************
//*
//********************************************************************************
$.fn.removeWatermark = function() {
    $(this).each(function() {
        if ($(this).hasClass("watermark")) {
            $(this).val("");
            $(this).removeClass("watermark");
        }
    });
};

$.removeAllWatermarks = function() {
    $(".watermark").each(function() {
        $(this).removeWatermark();
    });
}

$.fn.watermark = function(watermarkText) {
    $(this).each(function() {
        $(this).removeWatermark();

        $(this).bind("click", function(evt) {
            if ($(this).hasClass("watermark")) {
                $(this).val("");
                $(this).removeClass("watermark");
            }
        });

        $(this).bind("blur", function(evt) {
            if ($(this).val() == "" || $(this).val() == watermarkText) {
                $(this).addClass("watermark");
                $(this).val(watermarkText);
            }
        });

        $(this).blur();
    });
};

$.fn.watermarkVal = function() {
    if ($(this).hasClass("watermark")) {
        return "";
    }
    else {
        return $(this).val();
    }
}
