import { useEffect, useState } from "react"
import BakedGood from "./BakedGood";
import { Col, Container, Row } from "react-bootstrap";

export default function BadgerBakery() {

    const [bakedGoods, setBakedGoods] = useState([]);
    const [featuredGood, setFeaturedGood] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://cs571.org/api/f23/hw3/all-baked-goods", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBakedGoods(data);
        })
    }, [])

    useEffect(() => {
        
        fetch("https://cs571.org/api/f23/hw3/featured-baked-good", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFeaturedGood(data);
            setLoading(false);
        })
        .catch(error => {
            console.log("Error Fetching Data");
            setLoading(false);
    })
    }, [])

    return <div>
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="header-background-image">
                        <div className="text-overlay">
                            <h1>Badger Bakery</h1>
                            <p>Welcome to our small-town bakery located in Madison, WI!</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      <Container className="baked-goods-section">
      {loading ? <p>Loading...</p> : <p><em><strong>Today's featured item is {featuredGood.name} for ${featuredGood.price}!</strong></em></p>}
        <Row>
            {bakedGoods.map((bakedGood) => (
            <Col key={bakedGood.name} xs={12} md={6} lg={4} xl={3}>
                <BakedGood
                name={bakedGood.name}
                description={bakedGood.description}
                price={bakedGood.price}
                featured={bakedGood.featured}
                />
            </Col>
            ))}
        </Row>
    </Container>
    </div>
}