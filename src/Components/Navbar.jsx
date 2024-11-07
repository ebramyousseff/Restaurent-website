 import { useState } from 'react';
import {Form, Nav ,Navbar , Container,Button, Row } from 'react-bootstrap';

 const NavBar = ({filterBySearch})=>{

    const [searchValue, setSearchValue] = useState("")

    const onSearch = ()=>{
        filterBySearch(searchValue)
        setSearchValue('')
    }
    return (
        <Row>
            <Navbar expand="lg" className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand href="#"><div className='brand-color'>مطعم جديد</div> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="text"
                    placeholder="أبحث"
                    className="mx-2"
                    aria-label="Search"
                    onChange = {(e)=> setSearchValue(e.target.value)}
                    value = {searchValue}
                    />
                    <Button onClick={()=>onSearch()} variant="outline-success">بحث</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Row>
  );
}
export default NavBar;