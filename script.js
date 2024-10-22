// Função para abrir o lightbox
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "block";
  lightboxImg.src = src;
}

// Função para fechar o lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}