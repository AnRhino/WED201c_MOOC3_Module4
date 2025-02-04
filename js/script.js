var centerBox = document.getElementById('image');
var options = document.querySelectorAll('.option');
var imageNames = [
    'Brazil.png',
    'Canada.png',
    'Japan.png',
    'SouthAfrica.png',
    'Thailand.png',
    'Vietnam.png'
];

var imageAltTexts = [
    'Brazil',
    'Canada',
    'Japan',
    'South Africa',
    'Thailand',
    'Vietnam'
];

function randomImage() {
    for (var i = 0; i < options.length; i++) {
        var index = Math.floor(Math.random() * imageNames.length);
        options[i].src = '../images/' + imageNames.splice(index, 1)[0];
        options[i].alt = imageAltTexts.splice(index, 1)[0];
        
    }
}

function upDate(option) {
    centerBox.style.backgroundImage = "url('" + option.src + "')";
    centerBox.innerHTML = option.alt;

}

function unDo() {
    centerBox.style.backgroundImage = "url('')";
    centerBox.innerHTML = "Hover over an Image below Display the Alt Text";
}