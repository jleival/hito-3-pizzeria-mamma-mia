import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas'; // Importamos el arreglo de pizzas desde la carpeta data

const Home = () => {
    return (
        <div>
            <Header />
            <Container className="my-4">
                <Row className="g-4">
                    {pizzas.map((pizza) => (
                        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center" key={pizza.id}>
                            <CardPizza
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                desc={pizza.desc}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;