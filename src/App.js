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
          <Link to='/'>Home</Link>
          <Link to='/create'>Create a New Juice</Link>
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
