import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function RegisterForm(){

  const formControl={
    display: 'flex',
    gap: "20px",
    marginTop:"15px",
    marginLeft:"10px"}
  
  // Backdrop JSX code
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hiring Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date"/>
        <Form.Text className="text-muted">
          We'll never share your birthday with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Gender</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone number" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Job title</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
    </Form.Select>
      </Form.Group>

      <Form.Group >
        <Form.Label>Department</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>hire date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Hire employee
          </Button>
        </Modal.Footer>
      </Modal>
     </>
  );

}
export default RegisterForm