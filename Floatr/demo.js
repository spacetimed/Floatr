/*
    This file <demo.js> is not required to initiate Floatr.
    The purpose of this file is to supply a dynamic demonstration of Floatr.
*/

window.addEventListener('DOMContentLoaded', () => {
    const input_Count = document.getElementById('demo_Count');
    const input_Gravity = document.getElementById('demo_Gravity');
    const input_Speed = document.getElementById('demo_Speed');

    var val_Count = document.getElementById('demo_CountVal');
    var val_Gravity = document.getElementById('demo_GravityVal');
    var val_Speed = document.getElementById('demo_SpeedVal');

    __GLOBAL.COUNT = Number(input_Count.value);
    __GLOBAL.GRAVITY = Number(input_Gravity.value / 1000);
    __GLOBAL.SPEED = Number(input_Speed.value / 1000);

    input_Count.addEventListener('input', (e) => {
        __GLOBAL.COUNT = Number(input_Count.value);
        val_Count.innerText = __GLOBAL.COUNT;
        updateFloatrDemo();
    });

    input_Gravity.addEventListener('input', (e) => {
        __GLOBAL.GRAVITY = Number(input_Gravity.value / 1000);
        val_Gravity.innerText = __GLOBAL.GRAVITY;
        updateFloatrDemo();
    });

    input_Speed.addEventListener('input', (e) => {
        __GLOBAL.SPEED = Number(input_Speed.value / 1000);
        val_Speed.innerText = __GLOBAL.SPEED;
        updateFloatrDemo();
    });

});

var __GLOBAL = new Object();

function updateFloatrDemo() {
    floatrSettings['count'] = __GLOBAL.COUNT;
    floatrSettings['gravity'] = __GLOBAL.GRAVITY;
    floatrSettings['speed'] = __GLOBAL.SPEED;
    
    particles.updateSettings(floatrSettings);
}