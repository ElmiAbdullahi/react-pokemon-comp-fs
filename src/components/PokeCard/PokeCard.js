import './PokeCard.css';

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
}) {
  return (
    <div className="poke-card hvr-grow-shadow">
      <div className="card-header">
        <span className="name">{pokebase}</span>
        <span className="hp">{hp} HP</span>
      </div>
      <div className="img-container ">
        <img src={url_image} className="hvr-grow-rotate" />
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
