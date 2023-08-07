import { useQuery } from 'react-query'
import PokedexService from '../service/PokedexService';
import FetchState from '../../components/FetchState/FetchState';

const pokedexService = new PokedexService();

const PokemonExcerpt = ({ pokemon }) => {
	const { data, isLoading, isError, error } = useQuery(['pokedex', pokemon.name], () => pokedexService.getPokedexEntryByName(pokemon.name));

	return (
		<div className="d-flex">
			<div className="flex-shrink-0 w-25">
				<img className='w-100 mw-100' src={pokemon.sprites.front_default} alt={pokemon.name} />
			</div>
			<div className="d-flex flex-column">
				<h1>{pokemon.name}</h1>
				<FetchState isLoading={isLoading} isError={isError} error={error}>
					{data && (
						<p>
							{data}
						</p>
					)}
				</FetchState>
			</div>
		</div>
	)
}

export default PokemonExcerpt