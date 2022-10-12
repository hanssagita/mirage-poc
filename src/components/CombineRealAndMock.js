import React, { useState, useEffect } from 'react'

const CombineRealAndMock = () => {

  const [realResponse, setRealResponse] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setRealResponse(data.results));
  }, []);


  return (
    <div>
      <br />
      {realResponse.map(character => {
        return (
          <div key={character.id}>{character.name}</div>
        )
      })}
      <br />
    </div>
  )
}

export default CombineRealAndMock