import React from 'react';
import {Navbar, Nav, Dropdown, DropdownButton, Button} from "react-bootstrap";
import './NavBar.css';
import {Link} from "react-router-dom";


const NavBar = ({setDiffLevel, refreshGame, setLookImg}) => {
    const onChangeLevel = (e) => {
        if (e.target.getAttribute('role') === 'button') {
            refreshGame()
        }
    }

    const onSetLook = (e) => {
        if (e.target.closest("img")) {
            setLookImg(e.target.closest("img").getAttribute('src'))
        }
    }
    return (
        <Navbar bg="danger" variant="dark" className='navbar'>
            <Navbar.Brand href="/">MARVEL</Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link as={Link} to='/game'>
                        <Button size='lg' variant='danger'>
                            Game
                        </Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/topscore'>
                        <Button size='lg' variant='danger'>
                            TOP scores
                        </Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <DropdownButton id="dropdown-basic-button"
                                    title="Difficulty "
                                    size="lg"
                                    drop="right"
                                    variant="danger"
                                    onClick={onChangeLevel}
                    >
                        <Dropdown.Item onMouseDown={() => setDiffLevel(10)}>Easy</Dropdown.Item>
                        <Dropdown.Item onMouseDown={() => setDiffLevel(20)}>Medium</Dropdown.Item>
                        <Dropdown.Item onMouseDown={() => setDiffLevel(24)}>Hard</Dropdown.Item>
                        <Dropdown.Item onMouseDown={() => setDiffLevel(30)}>God</Dropdown.Item>
                    </DropdownButton>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <DropdownButton id="dropdown-basic-button"
                                    title="Choose template"
                                    size="lg"
                                    drop="right"
                                    variant="danger"
                                    onClick={onSetLook}
                    >
                        <Dropdown.Item><img
                            src='https://i.pinimg.com/564x/c5/75/03/c57503c194f5f0a538afe613622f12bf.jpg' alt='look1'/></Dropdown.Item>
                        <Dropdown.Item><img
                            src='https://i.pinimg.com/564x/be/ec/09/beec092ac722f923c6a1a587366ea565.jpg' alt='look2'/></Dropdown.Item>
                        <Dropdown.Item><img
                            src='https://i.pinimg.com/564x/01/6d/65/016d6581a8352d9f20c5f3879db2b1e5.jpg' alt='look3'/></Dropdown.Item>
                        <Dropdown.Item><img
                            src='https://i.pinimg.com/564x/ab/82/89/ab82892bdf0a505614228abce65c1562.jpg' alt='look4'/></Dropdown.Item>
                        <Dropdown.Item><img
                            src='https://i.pinimg.com/564x/03/12/c1/0312c133dc63c0a5334b00ec5327baf0.jpg' alt='look5'/></Dropdown.Item>
                    </DropdownButton>
                </Nav.Item>

            </Nav>
        </Navbar>
    )
}
export default NavBar;