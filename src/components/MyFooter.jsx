import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyFooter = () =>  (
    <Container fluid className='bg-success mt-3'>
      <Row>
        <Col className='text-center mt-1'><h5>Servizi</h5><p>Ciao</p><p>Ciao</p><p>Ciao</p></Col>
        <Col className='text-center mt-1'><h5>Contatti</h5><p>+3519628775</p><p>ciao@gmail.com</p><p>Ciao</p></Col>
        <Col className='text-center mt-1'><h5>Social</h5></Col>
      </Row>
    </Container>
  
)

export default MyFooter;