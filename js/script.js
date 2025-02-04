var div = document.getElementById('image');

function upDate(previewPic) {
    div.style.backgroundImage = "url('"+previewPic.src+"')";
    div.innerHTML = previewPic.alt;
}

function unDo() {
   div.style.backgroundImage = "url('')";
   div.innerHTML = "Hover over an image below to display here.";
}