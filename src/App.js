import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // didMount (executa apenas uma vez [])
  useEffect(() => {
    const itens = localStorage.getItem('tech');
    if (itens) {
      setTech(JSON.parse(itens));
    }
  }, []);

  // didUpdate (fica monitorando [tech])
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map((item, index) => (
          <li key={item}>{`${index + 1} - ${item}`}</li>
        ))}
      </ul>
      <input
        value={newTech}
        onChange={event => setNewTech(event.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
