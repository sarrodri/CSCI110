// JS functions to compute volume

function doInputOutput(){    
    
    let height=document.getElementById("heightInput").value;
    let width=document.getElementById("widthInput").value;
    let depth=document.getElementById("depthInput").value;
    let sweep=document.getElementById("sweepInput").value;
    let housevol = houseVolume(width, depth, height, sweep)

    document.getElementById("outputDiv").innerHTML = housevol;
}

    function houseVolume(width, depth, height, sweep) {
        let space = livingVolume(width, depth, height);
        let roof = roofVolume(width,depth,sweep);
        return space + roof;
    }
    function livingVolume(width, depth, height) {
        livingSpace = width * depth * height;
        return livingSpace;
    }
    function roofVolume(width, depth, sweep) {
        triArea = triangleArea(sweep, sweep, depth);
        return triArea * width;
    }
    function triangleArea(sweep, sweep, depth) {
        let s = (sweep + sweep + depth) / 2;
        let area = Math.sqrt(s*(s-sweep)*(s-sweep)*(s-depth));
        return area;
    } 
