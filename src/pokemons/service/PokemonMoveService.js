import { config } from '../../config';

class PokemonMoveService {
	baseUrl = config.baseUrl;
	endpoint = 'move'

	async getPokemonMoveByName(name, language = 'en') {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}/${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		const move = data.effect_entries.find((effect) => effect.language.name === language);

		if (!move) throw new Error(`No effect entry found for language ${language}`)
		return move.effect;
	}
}

export default PokemonMoveService;