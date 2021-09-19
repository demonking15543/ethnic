import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';






import api from '../api/config'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/ProductActions';

const ProductDetail = () => {
    const product = useSelector(state => state.product)
    const {title, image, price, category, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch()

    const fetchProductDetail = async () => {
        const response = await api.get(`products/${productId}`).catch((err) => {
            throw err
        });
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== '') 
        fetchProductDetail();
        
        return () => {
            dispatch(removeSelectedProduct());
        }
          
    }, [productId])
    

    return (
        <Container>
            <Card className="my-4">
            <Row>
                <Col sm={12} md={4}>
                    <Card.Img variant="top" src={image}  className="p-4" />
                </Col>
                <Col sm={12} md={8}>
                    <Card.Body className="text-left">
                        <Card.Title className="py-3 text-info">{title}</Card.Title>
                        <Card.Text><span className="text-success">Price</span>: ${price}</Card.Text>
                        <Card.Text className="pt-5">
                            <span className="text-success">Category</span>: {category}</Card.Text>
                        <Card.Text className="py-1">{description}</Card.Text>
                        <Card.Text className="text-center py-4">
                         <Button variant="danger" size="lg">Add to Cart</Button>
                         </Card.Text>
                    </Card.Body>
                    
                </Col>

            </Row>                
            </Card>
            
        </Container>
       
    )




};

export default ProductDetail;