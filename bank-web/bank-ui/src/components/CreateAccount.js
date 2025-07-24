import React, { useState } from 'react'

function CreateAccount(){
const [owner, setOwner] = useState('');
const [balance, setBalance] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
e.preventDefault();

fetch("http://192.168.1.5:8080/accounts",{
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({owner, balance: parseFloat(balance) })
})
.then(res =>{
    if(res.ok){
    setMessage("Account created successfully!");
    setOwner('');
    setBalance('');
    }else{
    setMessage("failed to create account");
    }
})
    .catch(err =>{
    console.error("Error", err);
    setMessage("an error occured");
    });
};

return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Owner: </label>
          <input value={owner} onChange={(e) => setOwner(e.target.value)} required />
        </div>
        <div>
          <label>Balance: </label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Create Account</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

export default CreateAccount;