import Sidebar from '../Sidebar'
import Header from '../Header'
import styles from '../../styles/style.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import DepartmentTable from '../cards/DepartmentTable'


function Departments(){
    const buttonPosition={
        position:'relative',
        top:'20px',
        left:'420px'
    };

    const formControl={
        display: 'flex',
        gap: "20px",
        marginTop:"15px",
        marginLeft:"10px"}


        const handleChange=(e)=>{
            const {name,value}=e.target;
            setData({
                ...data,
                [name]:value
            });
        }

    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [data,setData]=useState({
        department:"",
        departmentHead:"",
        totalEmployee:"",
      
      });

      const handleSubmit=(e)=>{
        e.preventDefault();
        const employeData={
            departmentName:data.department,
            departmentHead:data.departmentHead,
            totalEmployee:data.totalEmployee
          
        };
        axios.post("http://localhost:9090/api/employees/createDepartment",employeData)
                .then((response) =>{
                    console.log(response)
                })
                .catch((error) =>{
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                      } else if (error.request) {
                        console.log("network error");
                      } else {
                        console.log(error);
                      }
                });
      };


      




    return(
        <>
        <Sidebar/>
        <div className={styles.postionHeader}>
            <Header/>
            <Button variant="primary" onClick={handleShow} style={buttonPosition}>
                Add Department
      </Button>
        </div>
        <div className={styles.employesTable}>
            <DepartmentTable/>
        </div>
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">Department Name</Form.Label>
        <Form.Control type="text" name='department' value={data.department} onChange={handleChange} placeholder="Enter Department Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Department Head</Form.Label>
        <Form.Control type="text" name='departmentHead' value={data.departmentHead} onChange={handleChange} placeholder="Enter department Head" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Total Employee</Form.Label>
        <Form.Control type="number" name='totalEmployee' onChange={handleChange} value={data.totalEmployee}/>
      </Form.Group>
      </div>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Department
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div>
      
      </div>
        </>
    )
}
export default Departments