import './App.css'
import React from 'react';
import FormOne from './components/formOne.jsx';
import FormTwo from './components/formTwo.jsx';
import FormThree from './components/FormThree.jsx';

function App() {

  return (
    <div className="forms">
      <FormOne url={'http://localhost:7071/data'}/>
      <FormTwo url={'http://localhost:7071/loading'}/>
      <FormThree url={'http://localhost:7071/error'}/>
    </div>
  )
}

export default App