// JS functions to compute volume
var height
var width
var depth
var sweep

function doInputOutput() {
    height = parseInt(document.getElementById("heightInput").value)
    width = parseInt(document.getElementById("widthInput").value)
    depth = parseInt(document.getElementById("depthInput").value)
    sweep = parseInt(document.getElementById("sweepInput").value)
    let housevol = houseVolume()
    document.getElementById("outputDiv").innerHTML = housevol
}
function houseVolume() {
    return livingVolume() + roofVolume()
}
function livingVolume() {
    return width * depth * height
}
function roofVolume() {
    return triangleArea() * width
}
function triangleArea() {
    return (height + width + sweep) / 2
}