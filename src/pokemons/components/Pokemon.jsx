import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import PokemonService from '../service/PokemonService';
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container';
import PokemonExcerpt from './PokemonExcerpt';
import PokemonAbilities from './PokemonAbilities';
import PokemonMoves from './PokemonMoves';

const pS = new PokemonService();

const Pokemon = () => {
	const params = useParams();
	const { data, isLoading, isError, error } = useQuery(['pokemon', params.name], () => pS.getPokemonByName(params.name));

	return (
		<Container fluid className='min-vh-100 d-grid'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
					{data && (
						<div className='d-flex flex-column gap-5'>
							<PokemonExcerpt pokemon={data} />
							<PokemonAbilities pokemon={data} />
							<PokemonMoves pokemon={data} />
						</div>
					)}
				</Container>
			</FetchState>
		</Container>
	)
}

export default Pokemon
