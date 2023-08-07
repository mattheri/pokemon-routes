import ListGroup from 'react-bootstrap/ListGroup';
import PokemonAbility from './PokemonAbility';

const PokemonAbilities = ({ pokemon }) => {

	return (
		<div>
		<h2>Abilities</h2>
		<ListGroup>
			{pokemon.abilities.map((ability) => (
				<ListGroup.Item key={ability.ability.name}>
					<PokemonAbility ability={ability.ability.name} />
				</ListGroup.Item>
			))}
			</ListGroup>
		</div>
	)
}

export default PokemonAbilities;