import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        <Link to="/accounts">View Accounts</Link>
      </nav>
      <Routes>
        <Route path="/accounts" element={<AccountsPage />} />
      </Routes>
    </Router>
  );
}

export default App;