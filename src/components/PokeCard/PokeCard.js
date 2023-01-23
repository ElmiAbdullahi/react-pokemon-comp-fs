import './PokeCard.css';
import pokeBackground from '../../../src/mtn-bkgrd.jpeg';

export default function PokeCard({
  url_image,
  pokebase,
  attack,
  defense,
  hp,
  height,
  weight,
  type_1,
  species_id,
  ability_1,
  ability_2,
  ability_hidden,
  pokedex,
  color_1,
}) {
  return (
    <div className="poke-card hvr-grow-shadow" style={{ background: color_1 }}>
      <div className="card-header">
        <span className="name">{pokebase}</span>
        <span className="hp">{hp} HP</span>
      </div>{' '}
      <div
        className="img-container"
        style={{ background: `url(${pokeBackground})`, backgroundRepeat: 'no-repeat' }}
      >
        <a href={pokedex} target="_blank" rel="noreferrer">
          <img src={url_image} className="hvr-grow-rotate" />
        </a>
      </div>
      <div className="physical-stats">
        <span>{type_1} Pokemon. </span>
        <span>Length: {height}ft, </span>
        <span>Weight: {weight}lbs.</span>
      </div>
      <div className="abilities">
        <p>{ability_1}</p>
        <hr />
        <p>{ability_2}</p>
        <hr />
        <p>{ability_hidden}</p>
      </div>
      <div className="card-footer">
        <span>Attack: {attack}</span>
        <span>Defense: {defense}</span>
        <span>{species_id}/801</span>
      </div>
    </div>
  );
}
