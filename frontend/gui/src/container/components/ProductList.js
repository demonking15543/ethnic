import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from "../api/config";
import ProductComponent from '../components/ProductComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { setProducts } from '../redux/actions/ProductActions';
const ProductList = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await api.get('products/').catch((err)=> {
        });
        dispatch(setProducts(response.data));


    };
    useEffect(() => {
        fetchProducts();
        
    }, []);
    console.log("products", products);

    return (
        <>
        <Container>
            <Row className="g-4">
                <ProductComponent />

            </Row>
        </Container>
        </>
    );



}



export default ProductList;