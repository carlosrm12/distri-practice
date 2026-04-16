import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';

function App() {
  // Estado para el Pokémon actual que viene de la API
  const [pokemon, setPokemon] = useState(null);
  
  // Estado para nuestra "Base de Datos" (un arreglo de Pokémons guardados)
  const [db, setDb] = useState([]);

  // useEffect se ejecuta una sola vez al cargar la página para leer la "DB"
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('pokeDB')) || [];
    setDb(datosGuardados);
  }, []);

  // Función para llamar a la API
  const buscarPokemon = async (nombre) => {
    if (!nombre) return;
    
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
      if (!respuesta.ok) throw new Error('No encontrado');
      
      const datos = await respuesta.json();
      setPokemon(datos); // Actualizamos el estado con los datos reales
    } catch (error) {
      alert("Error: " + error.message);
      setPokemon(null);
    }
  };

  // Función para guardar en la "DB" local
  const guardarEnDb = (pokeToSave) => {
    // Verificamos que no esté guardado ya
    const existe = db.find(p => p.id === pokeToSave.id);
    
    if (!existe) {
      const nuevaDb = [...db, { id: pokeToSave.id, name: pokeToSave.name }];
      setDb(nuevaDb); // Actualizamos la pantalla
      localStorage.setItem('pokeDB', JSON.stringify(nuevaDb)); // Guardamos en memoria del navegador
    }
  };

  return (
    <div>
      <h1>Poké App Básica</h1>
      
      {/* Le pasamos la función buscarPokemon al componente hijo */}
      <SearchBar onSearch={buscarPokemon} />
      
      <br />
      
      {/* Le pasamos los datos y la función de guardar al componente hijo */}
      <PokemonCard pokemon={pokemon} onSave={guardarEnDb} />
      
      <hr />
      
      <h2>Mi "Base de Datos"</h2>
      <ul>
        {/* Renderizamos la lista de lo que está en la DB */}
        {db.map(p => (
          <li key={p.id}>
            {p.name} (ID: {p.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;