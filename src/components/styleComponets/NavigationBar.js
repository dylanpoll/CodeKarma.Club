import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { LoginButton } from "../auth/LoginButton";
import { Logout } from "../auth/LogOutButton";
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Nav.Item><Nav.Link href="/testprofile">Profile</Nav.Link></Nav.Item>
        )
    )
}

export const Styles = styled.div`
.navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`

export const NavigationBar = () => {
  return(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">CodeKarma.Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"> 
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/quests">Quest-Board</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/discord">Discord-Information</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/users">Leader-Boards</Nav.Link></Nav.Item>
                    <Profile />
                    <Logout />
                    <LoginButton />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    )
  }

  // <Nav.Item><Nav.Link path='/external' component={() => { window.location = "https://www.linkedin.com/in/dylan-poll-4a324a1a2/"; return null;} }>LinkdIn</Nav.Link></Nav.Item>