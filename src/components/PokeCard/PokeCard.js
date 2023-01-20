import './PokeCard.css';

export default function PokeCard({ url_image, pokebase, attack, defense, hp }) {
  return (
    <div className="poke-card">
      <span className="name">{pokebase}</span>
      <span className="hp">{hp}</span>
      <img src={url_image} />
      <div className="stat">{attack}</div>
      <div className="stat">{defense}</div>
    </div>
  );
}
