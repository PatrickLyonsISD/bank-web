// src/pages/AccountsPage.jsx
import React, { useEffect, useState } from 'react'; // Import React and necessary hooks

const AccountsPage = () => {
  // Initialize state to hold list of accounts from the backend
  const [accounts, setAccounts] = useState([]);

  // Fetch account data from backend on first render
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_BASE}/accounts`)
    .then((res) => res.json())
    .then((data) => setAccounts(data))
    .catch((err) => console.error('Failed to fetch accounts:', err));
}, []);

  // Render account table
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Account List</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              {/* Display ID */}
              <td>{account.id}</td>

              {/* Display owner (fallback to dash if null) */}
              <td>{account.owner ?? '—'}</td>

              {/* Display balance formatted to 2 decimal places */}
              <td>€{account.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export this component for use in other files
export default AccountsPage;
