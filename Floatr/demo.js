/*
    This file <demo.js> is not required to initiate Floatr.
    The purpose of this file is to supply a dynamic demonstration of Floatr.
*/

var _DEMO = new Object();

window.addEventListener('DOMContentLoaded', () => {
    const input_Count = document.getElementById('demo_Count');
    const input_Gravity = document.getElementById('demo_Gravity');
    const input_Speed = document.getElementById('demo_Speed');
    const input_Size = document.getElementById('demo_Size');
    const input_Variance = document.getElementById('demo_Variance');

    var val_Count = document.getElementById('demo_CountVal');
    var val_Gravity = document.getElementById('demo_GravityVal');
    var val_Speed = document.getElementById('demo_SpeedVal');
    var val_Size = document.getElementById('demo_SizeVal');
    var val_Variance = document.getElementById('demo_VarianceVal');

    _DEMO.COUNT = Number(input_Count.value);
    _DEMO.GRAVITY = Number(input_Gravity.value / 1000);
    _DEMO.SPEED = Number(input_Speed.value / 1000);
    _DEMO.SIZE = Number(input_Size.value);
    _DEMO.VARIANCE = Number(input_Variance.value);

    input_Count.addEventListener('input', (e) => {
        _DEMO.COUNT = Number(input_Count.value);
        val_Count.innerText = _DEMO.COUNT;
        updateFloatrDemo();
    });

    input_Gravity.addEventListener('input', (e) => {
        _DEMO.GRAVITY = Number(input_Gravity.value / 1000);
        val_Gravity.innerText = _DEMO.GRAVITY;
        updateFloatrDemo();
    });

    input_Speed.addEventListener('input', (e) => {
        _DEMO.SPEED = Number(input_Speed.value / 1000);
        val_Speed.innerText = _DEMO.SPEED;
        updateFloatrDemo();
    });

    input_Size.addEventListener('input', (e) => {
        _DEMO.SIZE = Number(input_Size.value);
        val_Size.innerText = _DEMO.SIZE;
        updateFloatrDemo();
    });

    input_Variance.addEventListener('input', (e) => {
        _DEMO.VARIANCE = Number(input_Variance.value);
        val_Variance.innerText = _DEMO.VARIANCE;
        updateFloatrDemo();
    });

});

function updateFloatrDemo() {
    floatrSettings['count'] = _DEMO.COUNT;
    floatrSettings['gravity'] = _DEMO.GRAVITY;
    floatrSettings['speed'] = _DEMO.SPEED;
    floatrSettings['maxSize'] = _DEMO.SIZE;
    floatrSettings['variance'] = _DEMO.VARIANCE;
    particles.updateSettings(floatrSettings);
}