import React from 'react'
import glamorous from 'glamorous'
import SpaceStoneImg from '../img/SpaceStone.jpg'
import MindStoneImg from '../img/MindStone.jpg'
import RealityStoneImg from '../img/RealityStone.png'
import PowerStoneImg from '../img/PowerStone.jpg'
import TimeStoneImg from '../img/TimeStone.jpg'

const HeadStone = glamorous.h1(tw('text-yellow-lighter'))

const Awake = glamorous.div({padding:"10vh"})

const StoneName = glamorous.h2(tw('text-yellow-lighter'))

const StoneDsc = glamorous.p(tw('text-white text-xl'))

const StoneImg = glamorous.img({height:"400px"})

export default (() => (
  <div>
    <HeadStone>Infinity Stone</HeadStone>
    <Awake>
      <StoneName>Space Stone</StoneName>
      <StoneImg src={SpaceStoneImg} />
      <StoneDsc>มีพลังในการควบคุมพื้นที่ว่าง ใช้สำหรับเดินทางไปทั่วทุกที่ในจักรวาล</StoneDsc>
    </Awake>
    <Awake>
      <StoneName>Mind Stone</StoneName>
      <StoneImg src={MindStoneImg} />
      <StoneDsc>มีพลังในการอ่านใจและควบคุมจิตใจสิ่งมีชีวิตได้ตามใจชอบ</StoneDsc>
    </Awake>
    <Awake>
      <StoneName>Reality Stone</StoneName>
      <StoneImg src={RealityStoneImg} />
      <StoneDsc>มีพลังในการเปลี่ยนแปลงความเป็นจริง สร้างความเป็นจริงได้หลากหลายรูปแบบ</StoneDsc>
    </Awake>
    <Awake>
      <StoneName>Power Stone</StoneName>
      <StoneImg src={PowerStoneImg} />
      <StoneDsc>มีพลังในการทำลายล้างสูง ใช้แรงเพียงแค่แตะเดียว สะท้านสะเทือนทั้งดวงดาว</StoneDsc>
    </Awake>
    <Awake>
      <StoneName>Time Stone</StoneName>
      <StoneImg src={TimeStoneImg} />
      <StoneDsc>มีพลังในการควบคุมเวลา ย้อนเหตุการณ์ภายในอดีต อนาคต สร้างลูปเวลาได้</StoneDsc>
    </Awake>
  </div>
))
