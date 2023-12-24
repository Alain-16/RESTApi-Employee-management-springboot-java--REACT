import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/style.module.css'

function Sidebar(){
  const navLinkStyle={
    color:"black"
  }
    return(
        <div className={styles.Sidebar}>

          <Nav className={styles.logo}><img 
            alt=''
            width="100px"
            height="100px"
            src={require("../assets/pagge.png")}
            ></img></Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Nav className={styles.nav}>
              <Nav.Link href="dashboard" className={styles.navLinks} style={navLinkStyle}><img 
            alt=''
            width="20px"
            height="20px"
            src={require("../assets/dashboard.png")}
            ></img>Dashboard</Nav.Link>
              <Nav.Link href="employees" className={styles.navLinks} style={navLinkStyle}><img 
            alt=''
            width="20px"
            height="20px"
            src={require("../assets/staff.png")}
            ></img>Employees</Nav.Link>
              <Nav.Link href="departments" className={styles.navLinks} style={navLinkStyle}><img 
            alt=''
            width="20px"
            height="20px"
            src={require("../assets/departments.png")}
            ></img>Department</Nav.Link>
              <Nav.Link href="events" className={styles.navLinks} style={navLinkStyle}><img 
            alt=''
            width="20px"
            height="20px"
            src={require("../assets/event.png")}
            ></img>Events</Nav.Link>
              <Nav.Link href="payroll" className={styles.navLinks} style={navLinkStyle}><img 
            alt=''
            width="20px"
            height="20px"
            src={require("../assets/salary.png")}
            ></img>Payroll</Nav.Link>
              
            </Nav>
      </div>
    );


}

export default Sidebar