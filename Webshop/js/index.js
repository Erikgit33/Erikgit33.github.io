function getParameterByKey(key) {
    const urlParameters = new URLSearchParams(window.location.search);
    if (urlParameters.get(key) == null || urlParameters.get(key) == "") {
        return null;
    }
    else {
        return urlParameters.get(key);
    }
};

function transferParameters(nextPage) {
    const URLParameters = new URLSearchParams(window.location.search);
    const queryString = urlParameters.toString();
    if (queryString != "" && queryString != null) {
        window.location.href = nextPage + "?" + queryString;
    }
    else {
        window.location.href = nextPage;
    }
}