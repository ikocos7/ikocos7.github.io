import {ComponentProps} from "react";
import {Container} from "react-bootstrap";

export const Body = (props: ComponentProps<any>) => {
    return <Container>{
        props.children
    }</Container>

}