export function PokemonCard({ pokemon, onSave }) {
  // Si no hay datos de pokemon todavía, mostramos un mensaje por defecto
  if (!pokemon) {
    return <p>No hay ningún Pokémon seleccionado.</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Número: {pokemon.id}</p>
      
      {/* Botón que ejecuta la función del padre para guardar */}
      <button onClick={() => onSave(pokemon)}>Guardar en DB</button>
    </div>
  );
}