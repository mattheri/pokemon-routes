import { config } from '../../config';

class PokemonAbilityService {
	baseUrl = config.baseUrl;
	endpoint = 'ability'

	async getPokemonAbilityByName(name, language = 'en') {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}/${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		const ability = data.effect_entries.find((effect) => effect.language.name === language);

		if (!ability) throw new Error(`No effect entry found for language ${language}`)
		return ability.effect;
	}
}

export default PokemonAbilityService;