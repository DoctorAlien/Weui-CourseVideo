function getQueryString(name) {
    var regular = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var content = window.location.search.substr(1).match(regular);
    if (content != null) return unescape(content[2]); return null;
};
