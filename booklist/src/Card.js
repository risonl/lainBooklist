import {Container, Card} from 'react-bootstrap'

function CardText(props) {
    return(
    <Container>
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.author}</Card.Text>
                <Card.Text>{props.synopsis}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
    )
} 
export default CardText