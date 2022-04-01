import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import { Card } from './components/Card';

function App() {
  const dataSource = [
    {
      title: 'Rick',
      url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      description: 'Some text',
    },
    {
      title: 'Rick',
      url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      description: 'Some text',
    },
    {
      title: 'Rick',
      url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      description: 'Some text',
    },
  ];
  const [characters, setCharacters] = useState([]);
  return (
    <>
      <h1>Rick and morty</h1>
      <button type='button' onClick={() => setCharacters(dataSource)}>
        click me
      </button>
      <button
        type='button'
        onClick={() =>
          setCharacters([
            ...characters,
            {
              title: 'Rick',
              url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              description: 'Some text new',
            },
          ])
        }
      >
        +1
      </button>
      <div className='gallery-container'>
        {characters.map((elm, index) => (
          <Card
            key={index}
            title={elm.title}
            url={elm.url}
            description={elm.description}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
