
function descargar() {

    const element = document.body;
 
    html2pdf().from(element).save("CV-Facundo-Vidili.pdf");
}

