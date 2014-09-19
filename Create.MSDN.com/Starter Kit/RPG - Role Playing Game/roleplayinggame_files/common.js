//switch the calss for the button hover effect(main use)
function switchClass(elm, newClass) {
    //change button span class
    if (elm != null) {
        if (elm.parentElement != null) //IE
            elm.parentElement.className = newClass;
        else if (elm.parentNode != null) //Firefox
            elm.parentNode.className = newClass;
    }
}

function ConfirmFormCancel(msgText) {
    return (confirm(msgText) && theForm.reset());
}

function ResetForm() {
    return theForm.reset();
}

// used by the help system throughout the site
function openHelp(helpUrl) {
    var helpWnd = window.open(helpUrl, 'helpUrl', 'status=0,toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,Width=323,Height=500,Left=' + (screen.width - 423) + ',Top=100');
    helpWnd.focus();
}

// add trim functions to String class
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function() {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function() {
    return this.replace(/\s+$/, "");
}

function TextBoxValidator_Validate(source, args) {
    var control = document.getElementById(source.controltovalidate);
    if (control) {
        args.IsValid = (control.value.length >= source.getAttribute('MinLength') && control.value.length <= source.getAttribute('MaxLength'));
    }
}

// taken from http://www.w3schools.com/JS/js_cookies.asp
function setCookie(c_name, value, expiredays) {
    var exdate = new Date(); exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(c_name, def_value) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return def_value;
}