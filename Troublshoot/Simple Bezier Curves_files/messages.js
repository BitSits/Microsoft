/// <reference path="jquery-1.2.6.js" />
/// <reference path="core.js" />

Forums.Tag =
{
    removeTag: function()
    {
        var link = $(this);
        $(this).click(function()
        {
            $.post($(link).attr("href"), {}, function()
            {
                $(link).parent().fadeOut("fast");
            });
            return false;
        });
    },

    submitTags: function()
    {
        var form = $("#tagit");
        var url = $(form).attr("action");
        var tags = $("input[name='tags']", form).val();
        $("input[name='submitTags']", form).attr("disabled", "disabled");
        
        $.post(url, { tags: tags }, function(results)
        {
            $(form).replaceWith(results);
            $("#tagit").each(Forums.Tag.decorateTagControl);
        });

        return false;
    },

    decorateTagControl: function()
    {
        $(this).submit(Forums.Tag.submitTags);
        $("div.tags span a", this).each(Forums.Tag.removeTag)
    }
}

Forums.MessagesPage =
{
    loaded: function()
    {
        $("#tagit", this).each(Forums.Tag.decorateTagControl);
    }
};

$(function()
{
    $.addToRail(railItems, Forums.MessagesPage.loaded)
    $("li.message").each(Forums.Message.decorateMessage);
    $("ul.menu.thread").each(Forums.Thread.decorateThreadMenu);
    $("a.popup").popup();
});
