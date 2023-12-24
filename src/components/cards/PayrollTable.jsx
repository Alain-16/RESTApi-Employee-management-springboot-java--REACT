import Card from 'react-bootstrap/Card';
import styles from '../../styles/style.module.css'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function PayrollTable(){
    const tableStyle={
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
      }
      const formControl={
        display: 'flex',
        gap: "20px",
        marginTop:"15px",
        marginLeft:"10px"}

      const [payroll,setPayroll]=useState([]);

      useEffect(()=>{
        function getPayrolls(){
            axios.get('http://localhost:9090/api/employees/listPayroll')
            .then(response =>{
              setPayroll(response.data)
            })
            .catch(error =>{
              console.log(error)
            });
        }
        getPayrolls()
      },[]);

      const [show, setShow] = useState(false);
      const [showDelete, setShowDelete] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () =>setShow(true);

      const handleDeleteShow = () =>setShowDelete(true);
      const handleDeleteClose = () => setShowDelete(false);

      const [updateFormData, setUpdateFormData] = useState({});

      


      const handleUpdate = async (id) => {
           await axios.get(`http://localhost:9090/api/employees/payrollById/${id}`)
            .then(response =>{
              setUpdateFormData(response.data);
              handleShow();
            })
            .catch(error =>{
              console.error('error in fetching department details:',error)
            });
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData({ 
          ...updateFormData, 
          [name]: value
         });
      };


  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:9090/api/employees/updatePayroll/${updateFormData.id}`, updateFormData)
      .then(response =>{
        handleClose();
        console.log(response.data);
      })
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const handleDelete = (id) => {
    // Set the selected department ID
    setSelectedDepartmentId(id);

    // Open the confirmation modal (if you want to confirm deletion)
    handleDeleteShow();
  };

  const handleConfirmDelete = () => {
    // Close the modal
    handleDeleteClose();

    // Make the DELETE request to your Spring Boot backend
    axios.delete(`http://localhost:9090/api/employees/deletePayroll/${selectedDepartmentId}`)
      .then(response => {
        // Handle successful deletion (e.g., update state or refresh the department list)
        console.log('Department deleted successfully');
        
      })
      .catch(error => {
        // Handle error (e.g., show an error message)
        console.error('Error deleting department:', error);
      });
  };

    return(
        <>
        <Card className={styles.tablecard}>
        <Card.Body>
            <Card.Title style={{textAlign:'left'}}>Payroll List</Card.Title>
            <Table style={tableStyle}>
            <thead>
        <tr>
          <th>#</th>
          <th>Employee</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payroll.map(payrolls =>(
          <tr>
          <td style={{color:"#D1C27D"}}>{payrolls.id}</td>
          <td style={{color:'#00E5D3'}}>
          <ul style={{listStyleType:'none'}}>
                <li>{payrolls.employee}</li>
                <li>{payrolls.email}</li>
            </ul>
          </td>
          <td style={{color:'#00E5D3'}}>{payrolls.role}</td>
          <td style={{color:'#00E5D3'}}>{payrolls.salary}</td>
          <td>
              <UpdateIcon color='primary' onClick={()=>handleUpdate(payrolls.id)}/>
              <DeleteIcon color='primary' onClick={()=> handleDelete(payrolls.id)}/>

          </td>
        </tr>
        ))}
      </tbody>
         </Table>
        </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Payroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">Employee</Form.Label>
        <Form.Control type="text" name='employee' value={updateFormData.employee} onChange={handleInputChange} placeholder="Enter Department Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" name='role' value={updateFormData.role} onChange={handleInputChange} placeholder="Enter department Head" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" name='salary' onChange={handleInputChange} value={updateFormData.salary}/>
      </Form.Group>
      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name='email' value={updateFormData.email} onChange={handleInputChange} placeholder="Enter department Head" />
      </Form.Group>
      </div>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleUpdateSubmit}>
            update Payroll
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Payroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this payroll ?
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
          </Modal>
      </div>
        </>
    )
}
export default PayrollTable