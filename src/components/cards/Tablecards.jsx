
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

function Tablecards(){
  const formControl={
    display: 'flex',
    gap: "20px",
    marginTop:"15px",
    marginLeft:"10px"
  };
  const [employees,setEmployees]=useState([]);

  useEffect(()=>{
    function getEmployees(){
      axios.get('http://localhost:9090/api/employees/listEmployee')
      .then(response =>{
        setEmployees(response.data)
      })
      .catch(error =>{
        console.log(error)
      });
    }
    getEmployees();
  }, []);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

    
  const handleClose = () => setShow(false);
  const handleShow = () =>setShow(true);


  const [updateFormData, setUpdateFormData] = useState({});

  


  const handleUpdate = async (id) => {
       await axios.get(`http://localhost:9090/api/employees/employeById/${id}`)
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
  await axios.put(`http://localhost:9090/api/employees/updateEmploye/${updateFormData.id}`, updateFormData)
  .then(response =>{
    handleClose();
    console.log(response.data);
  })
} catch (error) {
  console.error('Error updating employee:', error);
}
};

const handleDeleteShow = () =>setShowDelete(true);
const handleDeleteClose = () => setShowDelete(false);

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
    axios.delete(`http://localhost:9090/api/employees/deleteEmploye/${selectedDepartmentId}`)
      .then(response => {
        // Handle successful deletion (e.g., update state or refresh the department list)
        console.log('Department deleted successfully');
        
      })
      .catch(error => {
        // Handle error (e.g., show an error message)
        console.error('Error deleting department:', error);
      });
  };

  const [department,setDepartment]=useState([]);

  useEffect(()=>{
    function getDepartment(){
      axios.get('http://localhost:9090/api/employees/listDepartments')
  .then(response =>{
    setDepartment(response.data)
  })
  .catch(error =>{
    console.log(error)
  });
    }
    getDepartment();

  },[])


    return(
        <>
        <Card className={styles.tablecard}>
        <Card.Body>
            <Card.Title style={{textAlign:'left'}}>Employee List</Card.Title>
            <div className={styles.tableContainer}>
            <Table className={styles.table}>
            <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DateOfBirth</th>
          <th>Gender</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Jobtitle</th>
          <th>Department</th>
          <th>HireDate</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employe =>(
          <tr>
          <td>{employe.fname}</td>
          <td>{employe.lname}</td>
          <td>{employe.dateofbirth}</td>
          <td>{employe.gender}</td>
          <td>{employe.email}</td>
          <td>{employe.phonenumber}</td>
          <td>{employe.jobtitle}</td>
          <td>{employe.empDepart?.departmentName}</td>
          <td>{employe.hiredate}</td>
          <td>
              <UpdateIcon color='primary' onClick={()=> handleUpdate(employe.id)}/>
              <DeleteIcon color='primary' onClick={()=> handleDelete(employe.id)}/>

          </td>
        </tr>
        ))}
      </tbody>
         </Table>
         </div>
        </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">First Name</Form.Label>
        <Form.Control type="text" name='fname' value={updateFormData.fname} onChange={handleInputChange} placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' value={updateFormData.lname} onChange={handleInputChange} placeholder="Enter Last Name" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" name='dateofbirth' onChange={handleInputChange} value={updateFormData.dateofbirth}/>
        <Form.Text className="text-muted">
          We'll never share your birthday with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name='gender' value={updateFormData.gender} onChange={handleInputChange} placeholder="Enter Last Name" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={updateFormData.email} onChange={handleInputChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" name='phonenumber' value={updateFormData.phonenumber} onChange={handleInputChange} placeholder="Phone number" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" name='jobtitle' value={updateFormData.jobtitle} onChange={handleInputChange} placeholder="Enter Last Name" />

      </Form.Group>

      <Form.Group >
        <Form.Label>Department</Form.Label>
        <Form.Select aria-label="Default select example" name="empDepart" value={updateFormData.empDepart?.departmentName} onChange={handleInputChange}>
        <option value="">-- Choose employee department --</option>
        {department.map(option =>(
            <option key={option.id} value={option.id}>{option.departmentName}</option>
           ))}
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>hire date</Form.Label>
        <Form.Control type="date" name='hiredate' value={updateFormData.hiredate} onChange={handleInputChange} />
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleUpdateSubmit}>
            Update employee
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

export default Tablecards