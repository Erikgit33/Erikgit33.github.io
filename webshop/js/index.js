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
    const urlParameters = new URLSearchParams(window.location.search);
    console.log("Transferring parameters to " + nextPage);
    const queryString = urlParameters.toString();
    if (queryString != null && queryString != "") {
        window.location.href = nextPage + "?" + queryString;
    }
    else {
        window.location.href = nextPage;
    }
}