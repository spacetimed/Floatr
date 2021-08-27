# Floatr
A lightweight **TypeScript/HTML5/JS** library to create animated, floating particles. 

This library utilizes **HTML 5** canvas elements to make animations as efficient as possible. Different frame rates are accounted for by the library.


<br>

----------

<br>

## Demo

![Demo Image](/images/demo.png)

**View a dynamic demo of Floatr through GitHub Pages:**

https://ffffff-base16.github.io/Floatr/


<br>

----------

<br>

## Install
Installing the Floatr library onto a website is made quite simple. Although TypeScript is used for the development of this library, it is not necessary for using this library. Instead, only vanilla JavaScript is required, along with HTML.


\
**1. Include the lib.js library in your HTML code:**

```html
<script type="text/javascript" src="Floatr/lib.js"></script>
```

\
**2. Add a div element to contain your particles:**

```html
<div id="demo-particleSpace" height="500" width="500"></div>
```

\
**3. Initiate the element as a Floatr container with the following JavaScript code:**
```js
var floatrSettings = { 
    'width' : 'inherit',
    'height' : 'inherit',
    'count' : 60,
    'gravity' : 0.050,
    'speed' : 0.08,
    'maxSize' : 1,
    'variance' : 50,
}

const particles = new Floatr('demo-particleSpace', floatrSettings);

particles.Render();
```

\
And that's it! A full list of all the settings Floatr offers can be found below.

<br>

----------

<br>

## Settings

<br>

name | values | description
-----|-----------------|------------
`width` | number / 'inherit' | The width of the particle container. <br> A value of `'inherit'` will use the width value of the supplied element. 
`height` | number / 'inherit' | The width of the particle container. <br> A value of `'inherit'` will use the width value of the supplied element. 
`count` | number (0 - 100) | The amount of particles created.<br>**Recommended Value: `50`**
`gravity` | number (0.000 - 1.000) | The universal gravity acted upon the particles.<br>**Recommended Value: `0.050`**
`speed` | number(0.00 - 1.00) | The speed of each particle animation loop. A faster value will cycle particles faster.<br>**Recommended Value: `0.08`**
`maxSize` | number(1 - 10) | The maximum size a particle can be.<br>**Recommended Value: `1`**
`variance` | number(1-100) | The variance (in other words, randomness) of each particle. The lower the value, the more synchronous each particle moves.<br>**Recommended Value: `50`**

A full demonstration of all possible settings can be tested by visiting the demo, linked above.