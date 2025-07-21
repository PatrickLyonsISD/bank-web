import React, { useEffect, useState } from 'react';

function App() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/accounts")
      .then(res => res.json())
      .then(data => setAccounts(data))
      .catch(err => console.error("Error fetching accounts:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bank Accounts</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(acc => (
            <tr key={acc.id}>
              <td>{acc.id}</td>
              <td>{acc.owner}</td>
              <td>{acc.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
