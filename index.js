const embed = () => { // replace title with link to embedded video
    const title = document.querySelector('div#info > div#info-contents div#container > h1.title');
    if (title) {
        const link = document.createElement('a');
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const v = params.get('v');

        link.setAttribute('href', `${url.protocol}//${url.hostname}/embed/${v}`);

        title.parentElement.replaceChild(link, title);
        link.appendChild(title);
    }
};

const check = setInterval(() => { // wait for youtube to load
    const video = document.querySelector('div#player video');
    const btn = document.querySelector('div#player div#info');
    if (video) { // video loaded correctly
        clearInterval(check);
    } else if (btn) { // something happened, try to embed
        embed();
        clearInterval(check);
    }
}, 100); // check every 100ms while page loads
