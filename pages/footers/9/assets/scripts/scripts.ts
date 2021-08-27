const $id = document.querySelector('#home') as HTMLDivElement;

// Charge le contenu de la page
fetch('./components/form.html')
    .then(data => data.text())
    .then(data => $id.innerHTML = data)
    .catch(err => console.log(err));