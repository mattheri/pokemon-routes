import {useQuery} from 'react-query'
import PokemonService from '../service/PokemonService'
import FetchState from '../../components/FetchState/FetchState';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

const pS = new PokemonService()

const Pokemons = () => {
	const { data, isLoading, isError, error } = useQuery(['pokemons'], () => pS.getAllPokemons());

	return (
		<Container fluid className='d-grid min-vh-100'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
					<Row>
						{data?.map((pokemon) => (
							<Col key={pokemon.name} xs={12} sm={6} md={4} lg={3} xl={2}>
								<Link to={`/pokemon/${pokemon.name}`}>
									{pokemon.name}
								</Link>
							</Col>
						))}
					</Row>
				</Container>
			</FetchState>
		</Container>
	)
}

export default Pokemons