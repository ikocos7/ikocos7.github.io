import {DefaultLayout} from "../components/DefaultLayout";
import {Button, Card, Col, Row} from "react-bootstrap";
import React, {useRef, useState} from "react";

const hanzi = [
    '爸爸', '妈妈', '中文', '老师',
    '哥哥', '孤独', '可乐', '弟弟',
    '婆婆', '地图', '洗', '去', '马', '车',
    '他', '你', '我', '绿', '喇叭', '李子',
    '绿色', '这', '气', '鸡', '歌词', '十',
    '夫', '热', '卡','杂志',
]
const pinyin = [
    'bàba', 'māma', 'zhōngwén', 'lǎoshī',
    'gēge', 'gūdú', 'kělè', 'dìdi',
    'pópo', 'dìtú', 'xǐ', 'qù', 'mǎ', 'chē',
    'tā', 'nǐ', 'wǒ', 'lǜ', 'lǎba', 'lǐzi',
    'lǜsè', 'zhè', 'qì', 'jī', 'gēcí', 'shí',
    'fū', 'rè', 'kǎ','zázhì',
]
export const Hanzi = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [idx, setIdx] = useState<number>(-1);
    const [status, setStatus] = useState<boolean>(false);
    return <DefaultLayout>
        <div className={' vh-100 d-flex justify-content-center align-items-center'}>
            <Card>
                <Card.Body>
                    <video autoPlay={false} ref={videoRef} style={{position: "relative", zIndex: 0}} playsInline={false}
                           onEnded={() => {
                               setIdx(idx === hanzi.length - 1 ? 0 : idx + 1)
                               setStatus(true)
                           }}>
                        <source src={'/assets/countdown.mp4'}/>
                    </video>
                    {status && <div style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRadius: '50%',
                        background: 'white',
                        lineHeight: 2,
                        width: 250,
                        height: 250,
                        position: "absolute",
                        transform: 'translate(-53%, -40%)',
                        left: '53%',
                        top: '40%',
                        zIndex: 3,
                        display: 'table',
                        whiteSpace: 'pre-line'
                    }}><h1 style={{
                        display: 'table-cell',
                        letterSpacing: 5,
                        verticalAlign: 'middle'
                    }}>{[pinyin[idx], "\n", hanzi[idx]].join('')}</h1>
                    </div>}
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col className={'text-end'}>
                            <Button className={'text-center'} onClick={() => {
                                setStatus(false)
                                return videoRef.current?.play();
                            }}>Next</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    </DefaultLayout>
}