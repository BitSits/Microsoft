function ValidateSearchKeyword(formElement) {

    // because what if there is no javascript
    if (!document.getElementById)
        return true;
        
    var keywordObj;
    
    // if there is a form element, we can check
    // based on the elements for a valid value
    if (formElement != null) {
        keywordObj = formElement.elements['keyword'];
    }
    else {
        // we are in the nav bar
        keywordObj = document.getElementById('keyword');

    }
    
    // do our validation
    return (keywordObj != null && keywordObj.value.trim().length != 0);
    
    
}
