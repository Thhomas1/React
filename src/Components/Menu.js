
import React from 'react';
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown,Button,FormControl,} from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import AuthContext from '../Context/AuthContext';
import './todo.css'
function Menu({statusLogin}) {
  const styles ={
    search:{
      position:"left",
      top:"25%",
    }
  }
  
    return (
      <AuthContext.Consumer>
      {
        context=>
        <Navbar className="mb-4" bg="info" expand="sm">

          <Navbar.Brand href="/home" class="titulo" expand= "lg">Compras Online</Navbar.Brand>
           <InputGroup className="mb-1">
            <FormControl
            style={styles.search}
            placeholder="Presione aqui para buscar"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            class= "buscador"
            size= "md"
          />
          <Button variant="outline-secondary" id="button-addon2" size="sm" >
            Buscar
          </Button>
        </InputGroup>

          

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              {
                        !context.userLogin &&
                        <>
              <Nav.Link as={Link} to="/alta" >Registro</Nav.Link>
              <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/productos/Soporte/:id">Soporte</NavDropdown.Item>
              </NavDropdown>
                        </>
                         }
                         {
                           context.userLogin &&
                           <>

              <NavDropdown title="Administrador" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
 
              </NavDropdown>
              <Nav.Link onClick={context.logoutUser} >Salir</Nav.Link>
              </>
        }
            </Nav>
          </Navbar.Collapse>
          {
                    context.userLogin &&
                    <div>Tanto tiempo {context.userInfo.name}</div>
                  }   

      </Navbar>
      
                }
    </AuthContext.Consumer>
    );
               }
  


export default Menu;
