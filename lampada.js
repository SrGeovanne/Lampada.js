const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById("lamp");


function isLampBroken() {
    return lamp.src.indexOf ('quebrada') >-1
}
function lampOn() {
    if (!isLampBroken()) { lamp.src = './img/ligada.JPG' }
}

function lampOff() {
    if (!isLampBroken()) { lamp.src = './img/desligada.JPG' }
}
function lampBreak() {
    lamp.src = './img/quebrada.JPG'

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreak,)
