const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

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
		templeName: "Gilbert Arizona",
		location: "Gilbert, Arizona, United States",
		dedicated: "2014, March, 2",
		area: 85326,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
	},
	{
		templeName: "Bentonville Arkansas",
		location: "Bentonville, Arkansas, United States",
		dedicated: "2023, September, 17",
		area: 30000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/bentonville-arkansas-temple/bentonville-arkansas-temple-55568-main.jpg"
	},
	{
		templeName: "Puebla Mexico",
		location: "Puebla, Mexico",
		dedicated: "2024, May, 19",
		area: 30000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
	}
];

const templeContainer = document.getElementById("temple-container");

const displayTemples = (templesArray) => {

	templeContainer.innerHTML = "";

	templesArray.forEach(temple => {

		const card = document.createElement("div");
		card.className = "temple-card";
	
		const name = document.createElement("h3");
		name.textContent = temple.templeName;
		card.appendChild(name);
	
		const location = document.createElement("p");
		location.textContent = `Location: ${temple.location}`;
		card.appendChild(location);
	
		const dedicated = document.createElement("p");
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
		card.appendChild(dedicated);
	
		const area = document.createElement("p");
		area.textContent = `Total Area: ${temple.area} sq ft`;
		card.appendChild(area);
	
		const image = document.createElement("img");
		image.src = temple.imageUrl;
		image.alt = temple.templeName;
		image.loading = "lazy";
		card.appendChild(image);
	
		templeContainer.appendChild(card);
	});
}

displayTemples(temples);

document.querySelector("#home").addEventListener('click', (e) => displayTemples(temples));
document.querySelector("#old").addEventListener('click', (e) => displayTemples(temples.filter(temple => temple.dedicated.split(',')[0] < 1900)));
document.querySelector("#new").addEventListener('click', (e) => displayTemples(temples.filter(temple => temple.dedicated.split(',')[0] > 2000)));
document.querySelector("#large").addEventListener('click', (e) => displayTemples(temples.filter(temple => temple.area > 90_000)));
document.querySelector("#small").addEventListener('click', (e) => displayTemples(temples.filter(temple => temple.area < 10_000)));