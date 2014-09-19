/// <reference path="jquery-1.3.2.js" />

//********************************************************************************
//* LocaleSelector
//********************************************************************************

$(function() {
    var targetPanel = $("div#TargetPanel");
    var popupPanel = $("div#PopupPanel");
    var speed = 0;

    positionPopup = function() {
        var outerPanel = $("div#LocaleFlyout");

        if (outerPanel.length == "0") {
            outerPanel = $("div#LocaleSelector");
        }
        popupPanel.css("left", outerPanel.position().left - (popupPanel.outerWidth() - outerPanel.outerWidth()));
        popupPanel.css("top", outerPanel.position().top + outerPanel.outerHeight());
    }

    showPanel = function() {
        positionPopup();
        popupPanel.show(speed);
    }

    hidePanel = function(event) {
        if (event != undefined) {
            popupPanel.hide(speed);
        }
    }

    hidePopUpIfVisible = function() {
        if (popupPanel.css("display") == "block") {
            targetPanel.click();
        }
    }

    var doc = $(document);
    doc.click(hidePopUpIfVisible);
    $(window).resize(hidePanel);

    // setup
    popupPanel.hide(speed);
    targetPanel.toggle(showPanel, hidePanel);

});
