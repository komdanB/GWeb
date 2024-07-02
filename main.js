var canvas = document.querySelector("canvas")
var plant = document.querySelector("#tileset-source_plant")
var tree = document.querySelector("#tileset-source_tree")
var bush = document.querySelector("#tileset-source_bush")
var river = document.querySelector("#tileset-source_river")

var imageIds = ["tileset-source_plant", "tileset-source_tree", "tileset-source_bush", "tileset-source_river"];


function clearBorders() {
    imageIds.forEach(function (imageId) {
        var element = document.getElementById(imageId);
        if (element) {
            element.classList.remove('selected');
        }
    });
}

function mark(imageId) {
    clearBorders();

    var element = document.getElementById(imageId);
    if (element) {
        element.classList.add('selected');
    } else {
        console.error('Element with ID "' + imageId + '" not found.');
    }
}

function assignClickHandler(imageId) {
    var element = document.getElementById(imageId);
    if (element) {
        element.onclick = function () {
            mark(imageId);
        };
    } else {
        console.error('Element with ID "' + imageId + '" not found.');
    }
}

imageIds.forEach(assignClickHandler);