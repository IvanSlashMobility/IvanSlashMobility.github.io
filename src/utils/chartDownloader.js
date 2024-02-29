import html2canvas from "html2canvas";

export async function exportAsImage(el) {
  const canvas = await html2canvas(el);

  const image = canvas.toDataURL("image/jpeg", 1.0);

  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = 'mapa-escenarios-oportunidad-cnta';
  
  fakeLink.href = image;
  
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  
  fakeLink.remove();
};