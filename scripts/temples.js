document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader'); 
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden'); 
    });
});

// Footer
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;