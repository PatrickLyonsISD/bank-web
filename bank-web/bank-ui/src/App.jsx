import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage'; // ✅ Adjust path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accounts" element={<AccountsPage />} />
        {/* add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;