// script.js

// 1. Event Handling 🎈

// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("clickText").textContent = "You clicked the button! 🎉";
});

// Keypress detection
const keypressInput = document.getElementById("keypressInput");
const keypressOutput = document.getElementById("keypressOutput");
keypressInput.addEventListener("input", () => {
    keypressOutput.textContent = `You typed: ${keypressInput.value}`;
});

// Secret action (double-click or long press)
const secretBtn = document.getElementById("secretBtn");
const secretMsg = document.getElementById("secretMsg");

let longPressTimer;
secretBtn.addEventListener("mousedown", () => {
    longPressTimer = setTimeout(() => {
        secretMsg.style.display = "block";
    }, 1000); // Long press for 1 second
});
secretBtn.addEventListener("mouseup", () => clearTimeout(longPressTimer));
secretBtn.addEventListener("dblclick", () => {
    secretMsg.style.display = "block";
});

// 2. Interactive Elements 🎮

// Change button color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
    colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === "lightcoral" ? "lightblue" : "lightcoral";
});

// Image gallery
const galleryImg = document.getElementById("galleryImg");
const nextImgBtn = document.getElementById("nextImgBtn");
const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/ff0000",
    "https://via.placeholder.com/300/00ff00",
    "https://via.placeholder.com/300/0000ff"
];
let currentImgIndex = 0;

nextImgBtn.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    galleryImg.src = images[currentImgIndex];
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");

        tabContents.forEach(content => content.classList.remove("active"));
        document.getElementById(`tab${tabId}`).classList.add("active");
    });
});

// 3. Form Validation 📋✅

// Real-time validation
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

emailInput.addEventListener("input", () => {
    if (emailInput.validity.typeMismatch || emailInput.validity.valueMissing) {
        emailError.style.display = "inline";
    } else {
        emailError.style.display = "none";
    }
});

passwordInput.addEventListener("input", () => {
    if (passwordInput.validity.tooShort || passwordInput.validity.valueMissing) {
        passwordError.style.display = "inline";
    } else {
        passwordError.style.display = "none";
    }
});

// Form submission
const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput.validity.valid) {
        emailError.style.display = "inline";
    }
    if (!passwordInput.validity.valid) {
        passwordError.style.display = "inline";
    }

    if (emailInput.validity.valid && passwordInput.validity.valid) {
        alert("Form submitted successfully! 🎉");
    }
});