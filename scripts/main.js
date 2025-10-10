document.addEventListener('DOMContentLoaded',() => {
    let topbar = document.body.appendChild(document.createElement('div'));
    topbar.id='topbar';

    let firstScript = document.createElement('script');
    firstScript.async = true;
    firstScript.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

    let secScript = document.createElement('script');
    secScript.src="https://cdn.jsdelivr.net/npm/texme@1.2.2";

    document.head.appendChild(firstScript);
    document.head.appendChild(secScript);



    let pdfScript = document.createElement('script');
    pdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    document.head.appendChild(pdfScript);




    let loading = document.body.appendChild(document.createElement('div'));
    loading.id="loading";

    let downloadBtn = document.createElement('button');
    downloadBtn.textContent = '📄 Descargar PDF';
    downloadBtn.onclick = () => {
        let content = document.querySelector('main') || document.body; // o ajusta según tu estructura
        html2pdf().from(content).save('blog.pdf');
    };
    topbar.appendChild(downloadBtn);




    firstScript.onload = () => {
        setTimeout( () => {
            loading.remove();
            document.body.id='loaded';
        }, 1500 )
    }
})
