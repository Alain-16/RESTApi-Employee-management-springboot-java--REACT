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



function DepartmentTable(){

  const tableStyle={
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };
  const formControl={
    display: 'flex',
    gap: "20px",
    marginTop:"15px",
    marginLeft:"10px"}

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
        getDepartment()
    },[]);


    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () =>setShow(true);

      const [updateFormData, setUpdateFormData] = useState({});

      


      const handleUpdate = async (id) => {
           await axios.get(`http://localhost:9090/api/employees/departmentById/${id}`)
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
      await axios.put(`http://localhost:9090/api/employees/updateDepartment/${updateFormData.id}`, updateFormData)
      .then(response =>{
        handleClose();
        console.log(response.data);
      })
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const [showDelete, setShowDelete] = useState(false);
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
    axios.delete(`http://localhost:9090/api/employees/deleteDepartment/${selectedDepartmentId}`)
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
            <Card.Title style={{textAlign:'left'}}>Department List</Card.Title>
            <Table style={tableStyle}>
            <thead>
        <tr>
          <th>#</th>
          <th>Department Name</th>
          <th>Department Head</th>
          <th>Total Employee</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {department.map(departments =>(
          <tr>
          <td style={{color:"#D1C27D"}}>{departments.id}</td>
          <td style={{color:'#00E5D3'}}>{departments.departmentName}</td>
          <td style={{color:'#00E5D3'}}>{departments.departmentHead}</td>
          <td style={{color:'#00E5D3'}}>{departments.totalEmployee}</td>
          <td>
              <UpdateIcon color='primary' onClick={()=>handleUpdate(departments.id)}/>
              <DeleteIcon color='primary' onClick={()=>handleDelete(departments.id)}/>

          </td>
        </tr>
        ))}
      </tbody>
         </Table>
         
        </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">Department Name</Form.Label>
        <Form.Select aria-label="Default select example" name="departmentName" value={updateFormData.departmentName} onChange={handleInputChange}>
        <option value="">-- Choose employee department --</option>
        {department.map(option =>(
            <option key={option.id} value={option.departmentName}>{option.departmentName}</option>
           ))}
    </Form.Select>      </Form.Group>

      <Form.Group >
        <Form.Label>Department Head</Form.Label>
        <Form.Control type="text" name='departmentHead' value={updateFormData.departmentHead} onChange={handleInputChange} placeholder="Enter department Head" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Total Employee</Form.Label>
        <Form.Control type="number" name='totalEmployee' onChange={handleInputChange} value={updateFormData.totalEmployee}/>
      </Form.Group>
      </div>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleUpdateSubmit}>
            update Department
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
export default DepartmentTable