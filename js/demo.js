    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var bg1 = loadImage('/images/frame1.jpg');
    var bg2 = loadImage('/images/frame2.jpg')

    function main(var1, var2) {
        // composite now
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(var2, 0, 0);
        ctx.drawImage(var1, 0, 0);
        return canvas.toDataURL();
    }

    function loadImage(src) {
        var img = new Image();
        img.onload;
        img.src = src;

        return img;
    }