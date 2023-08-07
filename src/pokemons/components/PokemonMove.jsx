import { useQuery } from 'react-query'
import FetchState from '../../components/FetchState/FetchState'
import PokemonMoveService from '../service/PokemonMoveService'

const pokemonMoveService = new PokemonMoveService();

const PokemonMove = ({ move }) => {
	const {data, isLoading, isError, error} = useQuery(['move', move], () => pokemonMoveService.getPokemonMoveByName(move))

	return (
		<FetchState isLoading={isLoading} isError={isError} error={error}>
			{data && (
				<div className='d-flex flex-column'>
					<h4>{move}</h4>
					<p>{data}</p>
				</div>
			)}
		</FetchState>
	)
}

export default PokemonMove