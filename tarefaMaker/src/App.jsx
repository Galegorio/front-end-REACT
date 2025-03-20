import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar.jsx';
import Container from './components/layout/Container.jsx';
import Home from './components/pages/Home.jsx';
import CreateBook from './components/pages/CreateTrf.jsx';
import ListBook from './components/pages/ListTrf.jsx';
import Login from './components/pages/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />


             <Route element={<NavBar />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/newBook" element={<CreateBook />} />
            <Route path="/listBook" element={<ListBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
