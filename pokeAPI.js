const main = document.querySelector('main')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
	datosFetch()
})

const datosFetch = async () => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio(1, 386)}`)
		const data = await res.json()
		console.log(data)
		pintarCard(data)
	} catch (error) {
		console.log(error)
	}
}

function aleatorio(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const pintarCard = pokemon => {
	const clon = templateCard.cloneNode(true)
	
	if (pokemon.id < 152) {
	clon.querySelector('.card-header').setAttribute('src', 'https://pozoslowpoke.com/wp-content/uploads/2018/01/Banner-Rojo-Azul-Y-Amarillo-735x400.png')
	} else if (pokemon.id < 252) {
	clon.querySelector('.card-header').setAttribute('src', 'https://phantom-marca.unidadeditorial.es/897f36ca61c0e272bb9b8ae25bd83814/crop/13x0/718x397/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/06/16176996077317.jpg')
	} else {
	clon.querySelector('.card-header').setAttribute('src', 'https://pa1.narvii.com/6147/a45a249f1e668d75a783118a20bfad054475d060_hq.gif')
	}

	// clon.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.front_default)
	if (pokemon.id < 252) {
	clon.querySelector('.card-body-img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.id}.png`)
	} else {
	clon.querySelector('.card-body-img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)
	}

	clon.querySelector('h1').innerHTML = `${pokemon.name} <span>${pokemon.stats[0].base_stat} Hp</span>`
	clon.querySelector('.card-body-text').textContent = pokemon.base_experience + ' Exp'
	clon.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.stats[1].base_stat
	clon.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.stats[3].base_stat
	clon.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.stats[2].base_stat

	fragment.appendChild(clon)
	main.appendChild(fragment)
}