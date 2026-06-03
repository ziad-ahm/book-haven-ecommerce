const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


function openCart() {
    document.getElementById('cartModal').style.right = '0px';
}

function closeCart() {
    document.getElementById('cartModal').style.right = '-400px';
}

function addToCart(name, pic, price) {
    const cartItems = document.getElementById('cartItems');

    cartItems.innerHTML += 
    `
        <div class="cartItem">
            <img src="../imgs/BOOKS IMG/${pic}">
            <div class="cartDetails">
                <h4>${name}</h4>
                <h4>${price}</h4>
            </div>
        </div>
    `;
}