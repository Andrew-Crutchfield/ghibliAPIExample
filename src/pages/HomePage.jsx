import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} className="text-center">
                    <h1>Welcome to Our HomePage</h1>
                    <p>Learn more by exploring our links</p>
                    <Link to='/films'>
                        <Button variant="primary" className="mr-2">View Films</Button>
                    </Link>
                    <Link to='/people'>
                        <Button variant="secondary">View People</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;




// import { Link } from "react-router-dom";

// const HomePage = () => {
    



//     return (
//         <div>
            
//         </div>
//     );
// }

// export default HomePage;