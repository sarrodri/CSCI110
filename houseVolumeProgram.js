function doInputOutput()
    function houseVolume(width, depth, height, sweep) {
        livingVolume + roofVolume
    }
    function livingVolume(width, depth, height) {
        width * depth * height
    }
    function roofVolume(width, depth, sweep) {
        triangleArea * width
    }
    function triangleArea(a, b, c) {
        let s = a + b + c / 2
        Math.sqrt(s(s-a)(s-b)(s-c))
    }
    document.getElementById("outputDiv").innerHTML