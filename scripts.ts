const listPages = document.querySelectorAll('object') as NodeListOf<HTMLObjectElement>;

const settingsPage = {
    height: '50vh',
    width: '50vw',
    // height: '100vh',  
    // width: 'calc(100vw - 20px)', 
}

listPages.forEach(page => Object.assign(page.style, settingsPage));