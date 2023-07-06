import {Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import React, {ComponentProps} from "react";

interface IProps extends ComponentProps<any>{
}

export const Header = (props: IProps) => {
    return <Navbar expand={'sm'} className="bg-body-tertiary mb-3">
        <Container fluid>
            <Navbar.Brand href="/">学汉语</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/pinyin">拼音练习</Nav.Link>
            </Nav>
            <NavDropdown title="学习素材" id="basic-nav-dropdown">
                <NavDropdown.Item href={'/assets/chinese_pinyin_chart_a2_chalkboard.pdf'}>汉语拼音表下载</NavDropdown.Item>
            </NavDropdown>
        </Container>
    </Navbar>
}