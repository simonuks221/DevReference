import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const About = () => {
    return (
            <Container fluid className = 'bg-secondary rounded py-2 text-center px-5 text-light'>
                <h2 className = 'text-center text-light py-2'>About</h2>
                <p className = ''>My created webpage to quickly see the reference code and resources I need weather would it be Web development or doing custom charts</p>
                <p className = ''>Created using ReactJS and stylized using Bootstrap css library and components</p>
                <p className = 'pt-2'>Features include:</p>
                <ListGroup variant="flush" className = 'bg-dark text-left'>
                    <ListGroup.Item className = 'bg-secondary'>Easy integration with APIs</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary'>Automatic reference and section data rendering</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary'>Responsive design for all device sizes</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary'>Carousel design in Home page</ListGroup.Item>
                </ListGroup>
            </Container>
    )
}

export default About
