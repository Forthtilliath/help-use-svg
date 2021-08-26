"use strict";
const listPages = document.querySelectorAll('object');
const settingsPage = {
    height: '50vh',
    width: '50vw',
};
listPages.forEach(page => Object.assign(page.style, settingsPage));
