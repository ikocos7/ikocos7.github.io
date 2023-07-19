import {Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import React, {ComponentProps} from "react";

interface IProps extends ComponentProps<any>{
}

export const Header = (props: IProps) => {
    return <Navbar expand={'sm'} className="bg-body-tertiary mb-3">
        <Container fluid>
            <Navbar.Brand href="/">学汉语</Navbar.Brand>

            <NavDropdown align={'end'} title="发音练习" className={'dropdown-menu-end'}>
                <NavDropdown.Item href={'/pinyin'}>拼音练习</NavDropdown.Item>
                <NavDropdown.Item href={'/hanzi'}>汉字练习</NavDropdown.Item>
                <NavDropdown.Item href={'/hanzi-2'}>汉字练习-2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown align={'end'} title="字帖" className={'dropdown-menu-end'}>
                <NavDropdown.Item href={'/assets/zitie/zitie-1.pdf'}>第一课田字格字帖</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown align={'end'} title="学习素材" className={'dropdown-menu-end'}>
                <NavDropdown.Item href={'/assets/chinese_pinyin_chart_a2_chalkboard.pdf'}>汉语拼音表下载</NavDropdown.Item>
                <NavDropdown.Item href={'/assets/tianzige.pdf'}>田字格下载</NavDropdown.Item>

            </NavDropdown>
        </Container>
    </Navbar>
}