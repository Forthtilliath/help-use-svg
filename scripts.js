"use strict";
const objects = document.querySelectorAll('object');
const settingsPage = {
    height: '100vh',
    width: 'calc(100vw - 20px)'
};
objects.forEach(page => page.style.height = '100vh');
objects.forEach(page => {
    console.log(page);
    Object.assign(page.style, settingsPage);
});
