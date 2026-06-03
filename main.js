        
function darkMode() {
    document.body.classList.toggle("dark");
}


const modal = document.getElementById("myModal");

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
);}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}


var navbar = document.getElementById("navbar");
var overlay = document.getElementById("overlay");

function openNav() {
    navbar.style.left = "0";
    overlay.style.display = "block";
}

function closeNav() {
    navbar.style.left = "-260px";
    overlay.style.display = "none";
}



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
            <img src="imgs/BOOKS IMG/${pic}">
            <div class="cartDetails">
                <h4>${name}</h4>
                <h4>${price}</h4>
            </div>
        </div>
    `;
}