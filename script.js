function execute(val) {
    console.log("clicked")
    document.getElementById('result').innerHTML += val;
}
function solve() {
    let x = document.getElementById('result').innerHTML;
    let y = Number(eval(x).toPrecision(10))
    
    // if (y.toString().length > 1) {
    //     y = y.toFixed(7)
    // }

    console.log("calculated")
    document.getElementById('result').innerHTML = y;
}

function ac() {
    document.getElementById('result').innerHTML = ""
}