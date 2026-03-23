const reviewForm = document.getElementById("reviewForm");
const formMessage = document.getElementById("formMessage");
const reviewsList = document.getElementById("reviewsList");

function createStars(number) {
    return "★".repeat(Number(number)) + "☆".repeat(5 - Number(number));
}

reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dish = document.getElementById("dish").value;
    const rating = document.getElementById("rating").value;
    const ambience = document.getElementById("ambience").value;
    const comment = document.getElementById("comment").value.trim();

if (!name || !dish || !rating || !ambience || !comment) {
    formMessage.textContent = "Merci de remplir tous les champs.";
    formMessage.style.color = "#a52a2a";
    return;
}

const reviewCard = document.createElement("article");
reviewCard.classList.add("review-card");

reviewCard.innerHTML = `
    <div class="review-top">
        <h4>${name}</h4>
        <span>${createStars(rating)}</span>
    </div>
    <p class="review-meta">Plat préféré : ${dish} • Ambiance : ${ambience}</p>
    <p>${comment}</p>
`;

reviewsList.prepend(reviewCard);

formMessage.textContent = `Grazie ${name} ! Votre avis sur le restaurant de la chef Loriana a bien été ajouté.`;
formMessage.style.color = "#2f7a43";

reviewForm.reset();
});