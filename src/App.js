import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1>Juice Home</h1>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/create'>Add Juice</Link></button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
