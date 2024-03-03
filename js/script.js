
document.getElementById('downloadPdf').addEventListener('click', function () {
    const element = document.querySelector('.container'); // Selecciona el div con clase 'container'

    html2pdf()
      .set({
        margin: 1,
        filename: 'resume.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98
        },
        html2canvas: {
          scale: 3, // Ajusta la escala si es necesario para mejorar la calidad de la imagen
          letterRendering: true,
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait'
        }
      })
      .from(element)
      .save();
});
