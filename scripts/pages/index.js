
async function getPhotographers() {
// récuperation du tableau datas
	let response = await fetch("./data/photographers.json");
	//console.log(response);
	const datas = await response.json();
	//console.log(datas);
	return datas;
}
;
async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
	console.log(photographers)
};



async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
};

init();

