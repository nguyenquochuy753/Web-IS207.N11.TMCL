
import CardSample from './CardSample';
import './App.css';
import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';



function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/list",
      data: null
    })
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  console.log(users);
  return (
    <div>
    <ul>
      {users.map(c => <li key={c._id}>{c.fullName}</li>)}
    </ul>
      <div style={{marginLeft:600}}>
        <CardSample></CardSample>
    </div>
    </div>
  );
}

export default App;
