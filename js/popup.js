function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "flex";

    // Ajoute un écouteur pour fermer en cliquant en dehors
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        closePopup(popupId);
      }
    });
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}
