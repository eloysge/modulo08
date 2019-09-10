import React, { useState, useEffect, useMemo, useCallback } from 'react';

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

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // faz a atribuição somente se "tech" for modificado
  const sizeTech = useMemo(() => tech.length, [tech]);

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
      <br />
      <br />
      <strong>Existe(m) {sizeTech} tecnologia(s).</strong>
    </>
  );
}

export default App;
