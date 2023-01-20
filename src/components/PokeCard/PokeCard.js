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
}) {
  return (
    <div className="poke-card">
      <div className="card-header">
        <span className="name">{pokebase}</span>
        <span>{hp} HP</span>
      </div>
      <img src={url_image} />
      <div className="physical-stats">
        <span>{type_1} Pokemon. </span>
        <span>Length: {height}ft, </span>
        <span>Weight: {weight}lbs.</span>
      </div>
      <div className="card-footer">
        <span className="stat">Attack: {attack}</span>
        <span className="stat">Defense: {defense}</span>
        <span>{species_id}/801</span>
      </div>
    </div>
  );
}
