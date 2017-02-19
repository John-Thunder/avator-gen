
window.onload = function() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
}
var bg1 = loadImage('./images/校講1.png');
var bg2 = loadImage('./images/校講2.png');
var bg3 = loadImage('./images/就博1.png');
var bg4 = loadImage('./images/就博2.png');
var bg5 = loadImage('./images/實習1.png');
var bg6 = loadImage('./images/實習2.png');

function main(var1, var2) {
    // composite now
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(var1, 0, 0, var1.width, var1.height, 68, 68, canvas.width - 100, canvas.height - 100);
    ctx.drawImage(var2, 0, 0, var2.width, var2.height, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
}

function loadImage(src) {
    var img = new Image();
    img.onload;
    img.src = src;

    return img;
}
document.getElementById("files").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        showLoading();
        document.getElementById("image").src = e.target.result;
        img2 = loadImage(document.getElementById("image").src);
        //main(bg1,img2);
        gifshot.createGIF({
            'gifWidth': 1060,
            'gifHeight': 1060,
            images: [
                main(img2, bg1),
                main(img2, bg2),
                main(img2, bg3),
                main(img2, bg4),
                main(img2, bg5),
                main(img2, bg6)
            ]
        }, function (obj) {
            if (!obj.error) {
                var image = obj.image,
                    animatedImage = document.createElement('img');
                animatedImage.src = image;
                animatedImage.width = "1060";
                animatedImage.height = "1060";
                document.body.appendChild(animatedImage);
                disLoading()
            }
        });

    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};

function showLoading() {
    document.getElementById("over").style.display = "block";
    document.getElementById("layout").style.display = "block";
}

function disLoading() {
    document.getElementById("over").style.display = "none";
    document.getElementById("layout").style.display = "none";
}