import React, {useState} from 'react';
import {DefaultLayout} from "../components/DefaultLayout";
import {Button, Card, Col, Row} from "react-bootstrap";

const consonants: string[] = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h'];
const vowels: string[] = [
    'ā', 'á', 'ǎ', 'à',
    'ō', 'ó', 'ǒ', 'ò',
    'ē', 'é', 'ě', 'è',
    'ī', 'í', 'ǐ', 'ì',
    'ū', 'ú', 'ǔ', 'ù',
    'ǖ', 'ǘ', 'ǚ', 'ǜ',
];

function Pinyin() {
    const [consonantIdx, setConsonantIdx] = useState<number>(0);
    const [vowelIdx, setVowelIdx] = useState<number>(0);
    return <DefaultLayout>
        <div className={' vh-100 d-flex justify-content-center align-items-center'}>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Row>
                        <Col placeholder={'声母'} className={'text-center font-weight-bold'}>
                            <h1 className={'display-1'}>{consonants[consonantIdx]}</h1>
                        </Col>
                        <Col placeholder={'韵母'} className={'text-center font-weight-bold'}>
                            <h1 className={'display-1'}>{vowels[vowelIdx]}</h1>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col className={'text-end'}><Button className={'text-center'} onClick={() => {
                            setConsonantIdx(Math.floor(Math.random() * consonants.length))
                            setVowelIdx(Math.floor(Math.random() * vowels.length))
                        }}>Next</Button></Col>
                    </Row>
                </Card.Footer>
            </Card>


        </div>
    </DefaultLayout>;
}

export default Pinyin;
