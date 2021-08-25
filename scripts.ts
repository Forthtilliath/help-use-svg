const listPages = document.querySelectorAll('object') as NodeListOf<HTMLObjectElement>;

const settingsPage = {
    height: '50vh',
    // height: '100vh',
    // width: 'calc(100vw - 20px)',
    width: '50vw'
}

listPages.forEach(page => Object.assign(page.style, settingsPage));