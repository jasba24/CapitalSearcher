let titleResultsText = document.getElementById("search-result-text")
let imagenSection = document.querySelector(".imagen__section")
let imagen = document.getElementById("img")


// Function for get the country and search the capital for show it in the document
const setNameCountry = () => {
	// Element for get the name of the country
	let countryResults = document.getElementById("search").value
	// api for search the capitals
	let api_countri = `https://restcountries.eu/rest/v2/name/${countryResults}/`
	fetch(api_countri)
	.then(Response => Response.json())
	.then(data => {
		let capital = data[0].capital
		let flag = data[0].flag
		console.log(flag)
		titleResultsText.innerHTML = `La capital de ${countryResults} es ${capital}`
		imagen.setAttribute("src", `${flag}`)
		imagenSection.classList.add("active")
	})
}