import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App p-10">
        <Nav />
        <Main Routes={Routes} Route={Route} />
      </div>
    </BrowserRouter>
  );
}

export default App;
