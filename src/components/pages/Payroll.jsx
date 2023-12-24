import Sidebar from "../Sidebar"
import Header from "../Header"
import PayrollCard from "../cards/PayrollCard"
import styles from '../../styles/style.module.css'
import PayrollTable from "../cards/PayrollTable"
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"


function Payroll(){
    const buttonPosition={
        position:'relative',
        top:'20px',
        left:'420px'
    };
    const formControl={
        display: 'flex',
        gap: "20px",
        marginTop:"15px",
        marginLeft:"10px"
    };
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data,setData]=useState({
        employee:"",
        role:"",
        salary:"",
        email:""
    });
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
        getEmployees()
    },[]);
    const titleOptions =[
        {id:1,value:'',text:'--choose employee job title'},
        {id:2,value:'accountant',text:'accountant'},
        {id:3,value:'sales officer',text:'sales officer'},
        {id:4,value:'software developer',text:'software developer'},
      ];
      const [title,setTitle]=useState(titleOptions[0].value);
      const [selectedEmployee, setSelectedEmployee]=useState('');

      const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        });
        if(name === 'role'){
            setTitle(value)
        }else if(name === 'employee'){
            setSelectedEmployee(value)
      };
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const payrollData={
            employee:data.employee,
            role:data.role,
            salary:data.salary,
            email:data.email
          
        };
        axios.post("http://localhost:9090/api/employees/createPayroll",payrollData)
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
                Add Payroll
      </Button>
        </div>
        <div className={styles.card_body}>
            <PayrollCard/>
        </div>
        <div className={styles.employesTable}>
            <PayrollTable/>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Payroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
            <Form.Group >
        <Form.Label>Employee</Form.Label>
        <Form.Select aria-label="Default select example" name="employee" value={selectedEmployee} onChange={handleChange}>
           {employees.map(option =>(
            <option key={option.id} value={`${option.fname} ${option.lname}`}>{`${option.fname} ${option.lname}`}</option>
           ))}
    </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Form.Select aria-label="Default select example" name="role" value={title} onChange={handleChange}>
        {titleOptions.map(option =>(
            <option key={option.id} value={option.value}>{option.text}</option>
           ))}
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" name='salary' onChange={handleChange} value={data.salary}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control type="text" name='email' onChange={handleChange} value={data.email}/>
      </Form.Group>
      </div>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Payroll
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default Payroll