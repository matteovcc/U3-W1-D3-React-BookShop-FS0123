import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyFooter = () =>  (
    <Container fluid>
      <Row bg="success">
        <Col className='text-center'>Servizi</Col>
        <Col className='text-center'>Contatti</Col>
        <Col className='text-center'>Social</Col>
      </Row>
    </Container>
  
)

export default MyFooter;