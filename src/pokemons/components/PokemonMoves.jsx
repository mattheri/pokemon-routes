import ListGroup from 'react-bootstrap/ListGroup'
import PokemonMove from './PokemonMove'

const PokemonMoves = ({ pokemon }) => {
	return (
		<div>
			<h2>Moves</h2>
			<ListGroup>
				{pokemon.moves.map((move) => (
					<ListGroup.Item key={move.move.name}>
						<PokemonMove move={move.move.name} />
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	)
}

export default PokemonMoves