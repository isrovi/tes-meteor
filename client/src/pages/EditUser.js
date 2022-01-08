import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import { API } from "../config/api";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const getUser = async (id) => {
    try {
      const response = await API.get("/user/" + id);
      console.log(response);
      setUser({
        email: response.data.data.user.email,
        password: response.data.data.user.password,
        name: response.data.data.user.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const formData = JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      });

      console.log(user);
      const response = await API.patch("/user/" + id, formData, config);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(id);
  }, []);
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Col md={2}>
          <div
            className="d-flex flex-column align-items-center vh-100"
            style={{
              backgroundColor: "#EEEEEE",
            }}
          >
            <div>Home</div>
          </div>
        </Col>
        <Col md={10} className="p-4">
          <h3>Edit User</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
