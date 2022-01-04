import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'

function App() {
  const [data, setData] = useState({
    title: "Something",
    author: "Someone",
    synopsis: "Events",
  })
  
  function handleSubmit(e) {
    var bookTitle = document.getElementById('title').value
    var bookAuthor = document.getElementById('author').value
    var bookSynopsis = document.getElementById('synopsis').value
    e.preventDefault();
    setData({
      title: bookTitle,
      author: bookAuthor,
      synopsis: bookSynopsis,
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input type = 'text' id="title" name="title" defaultValue={data.title}></input>
        <h1>Author</h1>
        <input type = 'text' id="author" name="author" defaultValue ={data.author}></input>
        <h1>Synopsis</h1>
        <input type = 'text' id="synopsis" name="synopsis" defaultValue={data.synopsis}></input>
        <br></br>
        <Button as='input' type = 'submit'></Button>
        </form>
       
      </header>
      <Container>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.author}</Card.Text>
          <Card.Text>{data.synopsis}</Card.Text>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}

export default App;
