// 📚 Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Function to calculate area using parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Function to display the calculated area in the DOM
function showArea() {
  const result = calculateArea(5, 10); // Example values
  document.getElementById("areaResult").textContent = "Area is: " + result;
}

// 🎬 Part 3: Combining CSS Animations with JavaScript

// Function to toggle animation class on the box
function animateBox() {
  const box = document.getElementById("box");
  box.classList.toggle("slide");
}

// Function to toggle visibility and animation of the modal
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
