document.addEventListener('DOMContentLoaded',() => {
    let topbar = document.body.appendChild(document.createElement('div'));
    topbar.id='topbar';

    document.body.style.transition = 'all 1.5s ease-in-out';

    setTimeout( () => {
        document.body.style.opacity = 1;
    }, 250 )

    let firstScript = document.createElement('script');
    firstScript.async = true;
    firstScript.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

    let secScript = document.createElement('script');
    secScript.src="https://cdn.jsdelivr.net/npm/texme@1.2.2";

    document.head.appendChild(firstScript);
    document.head.appendChild(secScript);
})
