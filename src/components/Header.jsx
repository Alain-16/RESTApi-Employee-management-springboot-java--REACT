
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function Header(){
  const contentStyle={
    gap:'50px'
  }
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Form className="d-flex" style={{width:"300px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Collapse className="justify-content-center" style={contentStyle}>
          <NavDropdown title="languages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                French
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">japanese</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MS Excel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                MS Word
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PDF</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">OpenMrs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                DHIS2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CURE</NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" style={{gap:"50px"}}>
          <Nav>
          {/* Notification Icon */}
          <Nav.Link href="#notification">
            <img 
            alt=''
            width="30px"
            height="30px"
            src={require("../assets/active.png")}
            ></img> {/* Assuming you're using Font Awesome for icons */}
          </Nav.Link>
          {/* Message Icon */}
          <Nav.Link href="#messages">
          <img 
            alt=''
            width="30px"
            height="30px"
            src={require("../assets/comments.png")}
            ></img>
          </Nav.Link>
          <Nav.Link href="#messages">
          <img 
            alt=''
            width="30px"
            height="30px"
            src={require("../assets/profile.png")}
            ></img>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}
export default Header