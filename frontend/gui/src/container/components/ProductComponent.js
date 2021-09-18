import React from 'react';
import { useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state)=> state.allproducts.products);

    const renderList = products.map((product) => {
        const {id, title, image, price } = product;
        return (
            <Col key={id} sm={12} md={3} className="mt-5">
            <Card className="h-100 pt-4">
                <Link to={`product/${id}`} style={{textDecoration:"none"}} className="text-muted">
              <Card.Img variant="top" src={image}  style={{height:"200px"}}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-success">
                  $ {price}
                </Card.Text>
              </Card.Body>
              </Link>

            </Card>
          </Col>
      
        );
        
    });
    return <>{renderList}</>;


    
};

export default ProductComponent;