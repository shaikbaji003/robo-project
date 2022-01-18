import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/Searchbox';
import {useState,useEffect} from 'react';

function App() {
  const[robots,setRobo]=useState([]);
  const[searchField,setSearchField]=useState('');

const handleChange=(mess)=>{
 setSearchField(mess);
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    setRobo(users);
  })
});

const filteredRobo=robots.filter((robo) => {
  return robo.name.toLowerCase().includes(searchField.toLowerCase())
})

return (
    <div className='tc'>
    <h1>ROBO PROJECT</h1>
    <SearchBox handleChange={handleChange}/>
    <CardList robots={filteredRobo}/>
    </div>
  );
}

export default App;