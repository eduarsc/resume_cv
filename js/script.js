document.getElementById('downloadPdf').addEventListener('click', function () {
    const bodyClone = document.body.cloneNode(true);
    const downloadBtn = bodyClone.querySelector('#downloadPdf');
    downloadBtn.parentNode.removeChild(downloadBtn);
    html2pdf()
        .set({
            margin: 1,
            filename: 'calvete_eduars_cv.pdf',
            image: { 
              type: 'jpeg', 
              quality: 0.99 
            },
            html2canvas: { 
              scale: 1, 
              letterRendering: true 
            },
            jsPDF: { 
                format: 'a4', 
                orientation: 'portrait',
                output: 'grayscale'
            }
        })
        .from(bodyClone)
        .save();
});