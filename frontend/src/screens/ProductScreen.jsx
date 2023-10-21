import React from 'react';
import {
  FaArrowCircleLeft,
  FaArrowLeft,
  FaChevronCircleLeft,
} from 'react-icons/fa';
import Message from '../components/Message';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  ListGroupItem,
} from 'react-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  //const product = products.find((p) => p._id === productId);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
            <Col md={5}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup className="text-default" variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item text-center>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item className="text-left">
                  Product Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>{product.countInStock}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-center">
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <FaChevronCircleLeft className="arrow-button my-3"></FaChevronCircleLeft>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
