import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,  } from 'react-router-dom'
import './first.css';
function First() {
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  return (
    <div >
          <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark"  >
        <Container  >
          <Navbar.Brand href="#home" >LMS</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/"  >Home</Nav.Link>
            {/* <Nav.Link href="/cource">Cource</Nav.Link> */}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/new">new</Nav.Link>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
             User
            </Link>
            <ul className="dropdown-menu">
            {teacherLoginStatus!==true &&
            <>
                <li><Link className="dropdown-item" to="/userlogin">Userlogin</Link></li>
                <li><Link className="dropdown-item" to="/userreg">UserRegister</Link></li>
                <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
            </>
            }
            </ul>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Teacher
            </Link>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/teacherlogin">Teacher login</Link></li>
                <li><Link className="dropdown-item" to="/teacherrreg">Teacher Register</Link></li>
                <li><Link className="dropdown-item" to="/teacherboard">Dashboard</Link></li>
            </ul>
            </li>
    
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default First