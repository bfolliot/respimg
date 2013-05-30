function respimg() {
    var resize = document.getElementsByClassName("respimg");
    for (var i = 0; i < resize.length; i++)
    {
        var src = resize[i].getAttribute('data-respimg-src');
        var alt = resize[i].getAttribute('data-respimg-alt');
        if (alt === null) {
            alt = "";
        }
        var width = optimalWidth(resize[i]);
        src = src.replace("@width", width);
        var newHtml = "<img src =\"" + src + "\" alt=\"" + alt + "\" />";
        if (resize[i].innerHTML != newHtml) {
            resize[i].innerHTML = "<img src =\"" + src + "\" alt=\"" + alt + "\" />";
        }
    }
    document.body.onresize = function(e) {
        respimg();
    }
    function optimalWidth(element) {
        var width = element.clientWidth;
        if (window.devicePixelRatio > 1) {
            width = width * 2;
        }
        var data = element.getAttribute("data-respimg-width").split(' ');


        var sortedData = data.sort(function(a, b) {
            if (parseInt(a) > parseInt(b)) {
                return -1;
            } else if (parseInt(a) < parseInt(b)) {
                return 1;
            } else {
                return 0;
            }
        });
        var size = sortedData[0];
        for (var i = 0; i < sortedData.length; i++)
        {
            if (parseInt(sortedData[i]) > parseInt(width)) {
                size = sortedData[i];
            }
        }
        return size;
    }
}
