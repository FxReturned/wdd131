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

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
      templeName: "Arequipa Perú",
      location: "Arequipa, Perú",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 30",
      area: 72000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 29",
      area: 53997,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
  ];
  
  const templeContainer = document.getElementById("templeContainer");
  
  function clearData() {
    templeContainer.innerHTML = "";
  }
  
  function createTempleCard(temple) {
    const figure = document.createElement("figure");
    figure.classList.add("temple-card");
  
    const img = document.createElement("img");
    img.classList.add("img-temple");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("loading", "lazy");
    img.height = 167;
  
    const caption = document.createElement("figcaption");
    caption.innerHTML = `<strong>${temple.templeName}</strong><br>
                         Location: ${temple.location}<br>
                         Dedicated: ${temple.dedicated}<br>
                         Area: ${temple.area} sq ft`;
  
    figure.appendChild(img);
    figure.appendChild(caption);
  
    return figure;
  }
  
  function renderTemples(templesToRender) {
    clearData();
    templesToRender.forEach(temple => {
      const templeCard = createTempleCard(temple);
      templeContainer.appendChild(templeCard);
    });
  }

  const navLinks = document.querySelectorAll(".navigation a");
  const headerDynamic = document.getElementById('headerContainer');
  
  navLinks.forEach(link => {
    link.addEventListener("click", function() {

      headerDynamic.textContent = this.textContent;

      const filter = this.getAttribute("data-filter");
      let filteredTemples = [];
      if(filter === "all") {
        filteredTemples = temples;
    } else if(filter === "old") {
        filteredTemples = temples.filter(temple => {
          const year = parseInt(temple.dedicated.split(",")[0]);
          return year < 1900;
        });
      } else if(filter === "new") {
        filteredTemples = temples.filter(temple => {
          const year = parseInt(temple.dedicated.split(",")[0]);
          return year > 2000;
        });
      } else if(filter === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if(filter === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }
      renderTemples(filteredTemples);
    });
  });
  
  renderTemples(temples);