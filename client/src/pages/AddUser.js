import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { API } from "../config/api";

export default function AddUser() {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
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
        email: form.email,
        password: form.password,
        name: form.name,
      });

      console.log(form);
      const response = await API.post("/user", formData, config);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
          <h3>Add User</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                name="password"
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
