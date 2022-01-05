import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,} from 'react-bootstrap'
import {useState} from 'react'
import CardText from './Card'

function App() {
  const [data, setData] = useState({
    title: "Something",
    author: "Someone",
    synopsis: "Events",
  })
  function handleChange(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
  setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input type = 'text' id="title" name="title" defaultValue={data.title} onChange={handleChange}/>
        <h1>Author</h1>
        <input type = 'text' id="author" name="author" defaultValue ={data.author} onChange={handleChange}/>
        <h1>Synopsis</h1>
        <input type = 'text' id="synopsis" name="synopsis" defaultValue={data.synopsis} onChange={handleChange}/>
        <br></br>
        <Button as='input' type = 'submit'></Button>
        </form>
       
      </header>
      <CardText props={data} />
    </div>
  );
}

export default App;
