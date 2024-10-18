document.addEventListener("DOMContentLoaded", function () {
    const artworks = document.querySelectorAll(".artwork");

    artworks.forEach((artwork) => {
        artwork.addEventListener("click", function () {
            const title = artwork.querySelector(".overlay h2").textContent;
            const artist = artwork.querySelector(".overlay p").textContent;
            const imageUrl = artwork.querySelector("img").src;

            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("artwork-details");

            const detailsContent = `
                <img src="${imageUrl}" alt="${title}">
                <div>
                    <h2>${title}</h2>
                    <p>Artist: ${artist}</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            `;

            detailsContainer.innerHTML = detailsContent;

            const existingDetails = document.querySelector(".artwork-details");
            if (existingDetails) {
                existingDetails.remove();
            }

            document.querySelector("main").appendChild(detailsContainer);
        });
    });
});
