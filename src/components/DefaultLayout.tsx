import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {Body} from "./Body";
import {ComponentProps} from "react";

export const DefaultLayout = (props: ComponentProps<any>) => {
    return <Container>
        <Header/>
        <Body>{props.children}</Body>
    </Container>
}