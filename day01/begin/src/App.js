import './App.css';
import Hello from './Hello';

function App() {
  const name = '김이름님';
  const style ={
    backgroundColor: '#000',
    color:'#fff',
    fontSize: 30,
    padding: '1rem'
  }

  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
      <input/>
      <br/>
      <img src="" alt=""/>
    </>
  );
}

export default App;
