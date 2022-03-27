function randomImg() {
    var index = Math.random()*9;
    index = Math.floor(index);
    var image = document.getElementById("image");
    var imageArr = new Array();
    imageArr[0] = "images/0.jpg";
    imageArr[1] = "images/1.jpg";
    imageArr[2] = "images/2.png";
    imageArr[3] = "images/3.jpg";
    imageArr[4] = "images/4.png";
    imageArr[5] = "images/5.jpg";
    imageArr[6] = "images/6.jpg";
    imageArr[7] = "images/7.jpg";
    imageArr[8] = "images/8.jpg";
    image.src = imageArr[index];
}