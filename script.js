var rngH = document.getElementById('rng-h');
var rngS = document.getElementById('rng-s');
var rngL = document.getElementById('rng-l');

var numH = document.getElementById('num-h');
var numS = document.getElementById('num-s');
var numL = document.getElementById('num-l');


rngH.onchange = rngH.oninput = function () {
    document.documentElement.style.setProperty('--hue', this.value);
    document.documentElement.style.setProperty('--hue-secondary', this.value - 3);
    numH.innerHTML = rngH.value;
}
rngS.onchange = rngH.oninput = function () {
    document.documentElement.style.setProperty('--s', this.value + "%");
    document.documentElement.style.setProperty('--s-secondary', (this.value - 27) + "%");
    numS.innerHTML = rngS.value;
}
rngL.onchange = rngH.oninput = function () {
    document.documentElement.style.setProperty('--l', this.value + "%");
    document.documentElement.style.setProperty('--l-secondary', (this.value - 46) + "%");
    numL.innerHTML = rngL.value;

    if (this.value < 50) {
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--text-color', '#000000');
    }
}
