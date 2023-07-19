import {DefaultLayout} from "../components/DefaultLayout";
import {Button, Card, Col, Row} from "react-bootstrap";
import React, {useRef, useState} from "react";
import loading from '../assets/loading-37.gif';
import {isBrowser, isDesktop, isMobile, isTablet} from "react-device-detect";

const hanzi = [
  '大人', '模拟', '饥饿', '星期五',
  '周五', '下雨', '在', '再见',
  '奶奶', '好', '到', '飞', '美丽', '没有',
  '走', '狗', '三', '看到', '跟', '怎么',
  '忙', '帮忙', '等', '更', '红色', '容易',
  '对不起', '没关系', '谢谢', '不客气',
]
const pinyin = [
  'dàren', 'mónǐ', 'jī’è', 'xīngqīwǔ',
  'zhōuwǔ', 'xiàyǔ', 'zài', 'zàijiàn',
  'nǎinai', 'hǎo', 'dào', 'fēi', 'měilì', 'méiyǒu',
  'zǒu', 'gǒu', 'sān', 'kàndào', 'gēn', 'zěnme',
  'máng', 'bāngmáng', 'děng', 'gèng', 'hóngsè', 'róngyì',
  'duìbuqǐ', 'méiguānxi', 'xièxiè', 'búkèqì',
]
export const Hanzi2 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversed, setReversed] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(-1);
  const [status, setStatus] = useState<boolean>(false);
  const [isStarted, setStarted] = useState<boolean>(false);

  return <DefaultLayout>
    <div className={' vh-100 d-flex justify-content-center align-items-center'}>
      <Card>
        <Card.Body style={{minWidth: 260, minHeight: 260}}>
          <video autoPlay={false} ref={videoRef}
                 style={{position: "relative", visibility: isStarted ? 'visible' : 'hidden', zIndex: 0}}
                 playsInline={true}
                 onEnded={() => {
                   if (isReversed) {
                     setIdx(idx <= 0 ? 0 : idx - 1)
                   } else {
                     setIdx(idx === hanzi.length - 1 ? 0 : idx + 1)
                   }
                   setStatus(true)
                 }}>
            <source src={'/assets/countdown.mp4'} />
          </video>
          <div style={{
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
          }}>{status ? [pinyin[idx], "\n", hanzi[idx]].join('') :
              <img width={100} height={100} src={loading} />}</h1>
          </div>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col className={'text-start'}>
              <Button className={'text-center'} onClick={() => {
                setReversed(true)
                setStatus(false)
                setStarted(isDesktop || isTablet ? true : false)
                return videoRef.current?.play();
              }}>Previous</Button>
            </Col>
            <Col className={'text-end'}>
              <Button className={'text-center'} onClick={() => {
                setReversed(false)
                setStatus(false)
                setStarted(isDesktop || isTablet ? true : false)
                return videoRef.current?.play();
              }}>Next</Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  </DefaultLayout>
}