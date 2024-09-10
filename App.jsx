import { useState } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className='Card'>
        <p>
          Informação Básica!
        </p>

        <button
          className='button'
          onClick={handleClick}
          style={{
            backgroundColor: isClicked ? 'blue' : 'gray',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            marginTop: '10px',
          }}
        >
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </button>
      </div>
    </>
  );
}

export default App;
