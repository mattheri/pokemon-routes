import { config } from '../../config';

class PokemonService {
	baseUrl = config.baseUrl;
	endpoint = 'pokemon'

	async getAllPokemons(limit = 151, offset = 0) {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}?limit=${limit}&offset=${offset}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.results;
	}

	async getPokemonByName(name) {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}/${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data;
	}
}

export default PokemonService;