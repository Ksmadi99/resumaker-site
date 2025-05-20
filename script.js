function generateResume() {
  document.getElementById("previewName").innerText = document.getElementById("name").value;
  document.getElementById("previewTitle").innerText = document.getElementById("title").value;
  document.getElementById("previewSummary").innerText = document.getElementById("summary").value;
}

function downloadPDF() {
  const element = document.getElementById("resumePreview");
  html2pdf().from(element).save("my-resume.pdf");
}
