import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Page from './Page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
}

export default App;
