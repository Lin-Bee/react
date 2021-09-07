import React from 'react';
import Button from'./component/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
      <Button size="large" onClick={()=> console.log('클릭됨')}>Button</Button>
      <Button onClick={()=> console.log('클릭됨')}>Button</Button>
      <Button size="small">Button</Button>
      </div>
      <div>
      <Button size="large" color="secondary"onClick={()=> console.log('클릭됨')} >Button</Button>
      <Button color="secondary">Button</Button>
      <Button size="small" color="secondary">Button</Button>
      </div>
      <div>
      <Button size="large" color="third">Button</Button>
      <Button color="third">Button</Button>
      <Button size="small" color="third">Button</Button>
      </div>
      <div>
      <Button color="primary" outline>Button</Button>
      <Button color="secondary" outline>Button</Button>
      <Button color="third" outline>Button</Button>
      </div>
      <div>
      <Button color="primary" fullwidth>Button</Button>
      <Button color="secondary" fullwidth>Button</Button>
      <Button color="third" fullwidth>Button</Button>
      </div>
    </div>
  );
}

export default App;
