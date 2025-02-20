document.addEventListener("DOMContentLoaded", () => {
    let counter = localStorage.getItem("reviewCounter") || 0;
    counter = parseInt(counter, 10) + 1;
    localStorage.setItem("reviewCounter", counter);
  
    const counterDiv = document.getElementById("reviewCounter");
    counterDiv.textContent = `Total Reviews Submitted: ${counter}`;
  
    const params = new URLSearchParams(window.location.search);
  
    const reviewDetails = {
      product: params.get("product"),
      rating: params.get("rating"),
      installationDate: params.get("installationDate"),
      features: params.getAll("features").join(", "),
      review: params.get("review"),
      user: params.get("user")
    };
  
    const summaryDiv = document.getElementById("confirmation");
    summaryDiv.innerHTML = `
      <p><strong>Product ID:</strong> ${reviewDetails.product || "Not provided"}</p>
      <p><strong>Rating:</strong> ${reviewDetails.rating || "Not provided"}</p>
      <p><strong>Date of Installation:</strong> ${reviewDetails.installationDate || "Not provided"}</p>
      <p><strong>Useful Features:</strong> ${reviewDetails.features || "None selected"}</p>
      <p><strong>Written Review:</strong> ${reviewDetails.review ? reviewDetails.review : "No review written"}</p>
      <p><strong>Your Name:</strong> ${reviewDetails.user ? reviewDetails.user : "Anonymous"}</p>
    `;
  });

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`; 
  