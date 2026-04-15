import { useState } from 'react';

export function SearchBar({ onSearch }) {
  // Estado local solo para guardar lo que se escribe en el input
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    onSearch(query);    // Ejecuta la función que le pasó el padre
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre o ID del Pokémon" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit">Buscar</button>
    </form>
  );
}