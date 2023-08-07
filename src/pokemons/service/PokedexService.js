import { config } from '../../config';

class PokedexService {
	baseUrl = config.baseUrl;
	endpoint = 'pokemon-species'

	async getPokedexEntryByName(name, language = 'en') {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}/${name}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		const entry = data.flavor_text_entries.find(entry => entry.language.name === language);

		if (!entry) throw new Error(`No entry found for language ${language}`);

		return entry.flavor_text;
	}
}

export default PokedexService;