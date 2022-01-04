import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
        <h1>Title</h1>
        <input type = 'text' id="title" name="title" value='Title'></input>
        <h1>Author</h1>
        <input type = 'text' id="author" name="author" value ='Author'></input>
        <h1>Synopsis</h1>
        <input type = 'text' id="synopsis" name="synopsis" value='Synopsis'></input>
        <br></br>
        <Button as='input' type = 'submit'></Button>
        </form>
       
      </header>
      <Container>
      <Card>
        <Card.Body>
          <Card.Title>To Kill A Mockingbird</Card.Title>
          <Card.Text>Harper Lee</Card.Text>
          <Card.Text>A story about a lawyer and his daughter and also race relations in the Jim Crow south.</Card.Text>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}

export default App;
