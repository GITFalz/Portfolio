import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Presentation from './components/pages/Presentation';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
        </Routes>
    );
}

export default App;
// Updated
