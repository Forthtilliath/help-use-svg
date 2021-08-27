"use strict";
const $id = document.querySelector('#home');
fetch('./components/form.html')
    .then(data => data.text())
    .then(data => $id.innerHTML = data)
    .catch(err => console.log(err));
