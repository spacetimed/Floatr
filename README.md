# Floatr
A lightweight **TypeScript/HTML5/JS** library to create animated, floating particles inside of an HTML element. 

This library utilizes **HTML5** canvas elements to make animations as efficient as possible. Different frame rates are accounted for by the library. 


----------
## Demo

![Demo Image](/images/demo.png)

**View a dynamic demo of Floatr through GitHub Pages:**
**https://ffffff-base16.github.io/Floatr/**

Note that as of yet, compatibility has only been tested in **Google Chrome**. Animations may behave differently in other web browsers.



----------
## Install
Installing the Floatr library onto a website is made quite simple. Although TypeScript is used for the source of this library, only the vanilla *JavaScript* file `(lib.js)` is required to run this library on a website, along with, of course, an *HTML* file.

\
**1. Include the lib.js library in your HTML code:**
```html
<script type="text/javascript" src="Floatr/lib.js"></script>
```

\
**2. Add a div element to contain your particles:**
```html
<div id="demo-particleSpace" style="width:500px; height:500px; "></div>
```

\
**3. Initiate the element as a Floatr container with the following JavaScript code:**
```js
const floatrSettings = { 
    'width' : 'inherit',
    'height' : 'inherit',
    'count' : 60,
    'gravity' : 0.050,
    'speed' : 0.08,
    'maxSize' : 1,
    'variance' : 50
}

//Floatr is passed the ID of the div, in this case 'demo-particleSpace'.
const particles = new Floatr('demo-particleSpace', floatrSettings);
particles.Render();
```

\
And that's it! A full list of all the settings Floatr offers can be found below.

----------
## Settings

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

----------
## Browser Compatibility

As of **August 2021**, Floatr has only been tested in _**Google Chrome,  Version 92.0.4515.159**_. 

Multi-browser compatibility is not a priority at the moment, as the library is still under initial development.

Library code may need to be modified in order to suit other browsers.