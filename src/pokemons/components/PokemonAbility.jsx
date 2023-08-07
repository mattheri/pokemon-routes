import { useQuery } from 'react-query';
import PokemonAbilityService from '../service/PokemonAbilityService';
import FetchState from '../../components/FetchState/FetchState';

const pokemonAbilityService = new PokemonAbilityService();

const PokemonAbility = ({ ability }) => {
	const { data, isLoading, isError, error } = useQuery(['ability', ability], () => pokemonAbilityService.getPokemonAbilityByName(ability))

	return (
		<FetchState isLoading={isLoading} isError={isError} error={error}>
			{data && (
				<div className='d-flex flex-column'>
					<h4>{ability}</h4>
					<p>{data}</p>
				</div>
			)}
		</FetchState>
	)
}

export default PokemonAbility;