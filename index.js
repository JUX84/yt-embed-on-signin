const embed = () => { // replace title with link to embedded video
    const title = document.querySelector('div#info > div#info-contents div#container > h1.title');
    if (title) {
        const a = document.createElement('a');
        const { protocol, hostname, searchParams } = new URL(window.location.href);

        a.setAttribute('href', `${protocol}//${hostname}/embed/${searchParams.get('v')}`);

        title.parentElement.replaceChild(a, title);
        a.appendChild(title);
    }
};

const check = setInterval(() => { // wait for youtube to load
    if (document.querySelector('div#player video')) { // video loaded correctly
        clearInterval(check);
    } else if (document.querySelector('div#player div#info')) { // something happened, try to embed
        embed();
        clearInterval(check);
    }
}, 100); // check every 100ms while page loads
