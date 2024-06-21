import { useState } from "react";

const initialUsers = [
    {  id: 0 , username:"tyler55",password:"tm55"},
    { id: 1 , username:"john55",password:"jj55"},
    { id: 2 , username:"carl55",password:"cj55"},
  ];

export default  function Login_page() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(
        users[0]
      );
    
      function handleUsername(e) {
        setUserName(e.target.value);
      }
    
      function handlePassword(e) {
        setPassword(e.target.value);
      }
    
    function handleAuthentication(e){
        for(let i=0; i < users.length; i++){
            if((userName == users.at(i).username) && (password == users.at(i).password)){return alert("Login accepted!!!");}
            
        }
        return alert("Incorrect login try again!!!");
       
    }
  
    return (
        <>
        <h2>Welcome to Login Page!</h2>
        <label>
          Username:{' '}
          <input
            value={userName}
            onChange={handleUsername}
          />
        </label>
        <label>
          Password:{' '}
          <input
            value={password}
            onChange={handlePassword}
          />
        </label>
    <button onClick={handleAuthentication}>
      Login
    </button>
      </>
    );
  
}