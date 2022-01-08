import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";

import { API } from "../config/api";

import DeleteUser from "../components/modal/DeleteUser";

export default function Portal() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };
  const deleteById = async (id) => {
    try {
      await API.delete(`/user/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      handleClose();
      // execute delete data by id function
      deleteById(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  const handleEdit = (id) => {
    navigate("/edit-user/" + id);
  };

  const getUsers = async () => {
    try {
      const res = await API.get("/users/");
      setUsers(res.data.data.users);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
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
            <h3>Data User</h3>
            <Button onClick={() => navigate("/add-user")}>Add new user</Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.email}</td>
                    <td>
                      <DropdownButton
                        variant="flat"
                        style={{ background: "translucent" }}
                      >
                        <Dropdown.Item
                          eventKey="approved"
                          style={{ color: "#4CD084" }}
                          onClick={() => {
                            handleEdit(item.id);
                          }}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          style={{ color: "#FA423B" }}
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <DeleteUser
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}
