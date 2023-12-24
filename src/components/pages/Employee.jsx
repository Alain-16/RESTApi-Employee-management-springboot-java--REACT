import Sidebar from '../Sidebar'
import Header from '../Header'
import styles from '../../styles/style.module.css'
import Tablecards from '../cards/Tablecards'
import Employecards from '../cards/Employecards'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function Employee(){
    const buttonPosition={
        position:'relative',
        top:'20px',
        left:'420px'
    }
    const formControl={
        display: 'flex',
        gap: "20px",
        marginTop:"15px",
        marginLeft:"10px"}
      
      // Backdrop JSX code
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      const [data,setData]=useState({
        firstName:"",
        lastName:"",
        Dofbirth:"",
        Gender:"",
        email:"",
        phonenumber:"",
        title:"",
        department:"",
        hiredate:"",
      });

      const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        });
        if(name === 'gender'){
            setGender(value)
        }else if(name === 'title'){
            setTitle(value)
        }else if(name === 'department'){
            setSelectedValue(value)
        }
      };
      const genderOptions =[
        {id:1,value:'',text:'--choose your gender'},
        {id:2,value:'male',text:'male'},
        {id:3,value:'female',text:'female'},
        {id:4,value:'other',text:'other'},
      ];
      const [gender,setGender]=useState(genderOptions[0].value);

      const titleOptions =[
        {id:1,value:'',text:'--choose employee job title'},
        {id:2,value:'accountant',text:'accountant'},
        {id:3,value:'sales officer',text:'sales officer'},
        {id:4,value:'software developer',text:'software developer'},
      ];
      const [title,setTitle]=useState(titleOptions[0].value);

    
      const [department,setDepartment]=useState([]);
      const [selectedValue, setSelectedValue]=useState('');
      
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

      const handleSubmit=(e)=>{
        e.preventDefault();
        const employeData={
            fname:data.firstName,
            lname:data.lastName,
            dateofbirth:data.Dofbirth,
            gender:gender,
            email:data.email,
            phonenumber:data.phonenumber,
            title:title,
            empDepart:{
              id:selectedValue.id,
              departmentName:selectedValue.departmentName
            },
            hiredate:data.hiredate
        };
        axios.post("http://localhost:9090/api/employees/createEmployee",employeData)
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
                Add Employee
      </Button>
        </div>
        <div className={styles.EmployeCard}>
            <Employecards/>
        </div>
        <div className={styles.employesTable}>
            <Tablecards/>
        </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hiring Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div style={formControl} >
      <Form.Group>
        <Form.Label controlId="formBasicEmail">First Name</Form.Label>
        <Form.Control type="text" name='firstName' value={data.firstName} onChange={handleChange} placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' value={data.lastName} onChange={handleChange} placeholder="Enter Last Name" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" name='Dofbirth' onChange={handleChange} value={data.Dofbirth}/>
        <Form.Text className="text-muted">
          We'll never share your birthday with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Gender</Form.Label>
        <Form.Select aria-label="Default select example" name="gender" value={gender} onChange={handleChange}>
           {genderOptions.map(option =>(
            <option key={option.id} value={option.value}>{option.text}</option>
           ))}
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={data.email} onChange={handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" name='phonenumber' value={data.phonenumber} onChange={handleChange} placeholder="Phone number" />
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>Job title</Form.Label>
        <Form.Select aria-label="Default select example" name="title" value={title} onChange={handleChange}>
        {titleOptions.map(option =>(
            <option key={option.id} value={option.value}>{option.text}</option>
           ))}
    </Form.Select>
      </Form.Group>

      <Form.Group >
        <Form.Label>Department</Form.Label>
        <Form.Select aria-label="Default select example" name="department" value={selectedValue} onChange={handleChange}>
        <option value="">-- Choose employee department --</option>
        {department.map(option =>(
            <option value={option.id}>{option.departmentName}</option>
           ))}
    </Form.Select>
      </Form.Group>
      </div>
      <div style={formControl} >
      <Form.Group>
        <Form.Label>hire date</Form.Label>
        <Form.Control type="date" name='hiredate' value={data.hiredate} onChange={handleChange} />
      </Form.Group>
      </div>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Hire employee
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default Employee