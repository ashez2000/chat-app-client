import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}
