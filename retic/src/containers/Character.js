import React from 'react'
import glamorous from 'glamorous'
import IronmanImg from '../img/IronManLogo.png'
import CapUsaImg from '../img/CapLogo.png'
import ThorImg from '../img/ThorLogo.png'


const Char = glamorous.h1(tw('text-teal-light'))

const Awake = glamorous.div(tw('p-4'))

const HeroName = glamorous.h2(tw('text-white'))

const HeroDsc = glamorous.p(tw('text-white'))

const HeroImg = glamorous.img(tw(''))


export default (() => (
  <div>
    <Char>Character in Avenger:Infinity War</Char>
    <Awake>
      <a href="http://marvelcinematicuniverse.wikia.com/wiki/Iron_Man"><HeroName>Tony Stark (Ironman)</HeroName></a>
      <img src={IronmanImg} height="400px" />
      <HeroDsc>เศรษฐีวัยกลางคนผู้เป็นเจ้าของชุดเกราะสุดล้ำอย่าง Ironman และภาคนี้เค้าก็ไม่พลาดที่จะปรากฏตัว</HeroDsc>
    </Awake>
    <Awake>
      <a href="http://marvelcinematicuniverse.wikia.com/wiki/Captain_America"><HeroName>Steve Roger (Captain America)</HeroName></a>
      <img src={CapUsaImg} height="400px" />
      <HeroDsc>ทหารสุดแกร่ง ผู้ร่วมศึกสงครามต่างๆนานามากว่าหลาย 70 ปี และสงครามจักรวาลอันยิ่งใหญ่นี้เค้าก็จะขอร่วมต่อสู้ด้วย</HeroDsc>
    </Awake>
    <Awake>
      <a href="http://marvelcinematicuniverse.wikia.com/wiki/Thor"><HeroName>Thor</HeroName></a>
      <img src={ThorImg} height="400px" />
      <HeroDsc>บุตรแห่งโอดิน เจ้าชายแห่งแอสการ์ด หลังจากที่ได้สูญเสียค้อนโยเนียร์อันเป็นอาวุธคู่ใจ ชะตากรรมของเค้าก็ถึงจุดพลิกผันอีกครั้ง คราวนี้เค้าจะรับมือกับสงครามที่ยิ่งใหญ่ระดับจักรวาลนี้ได้อย่างไรล่ะ</HeroDsc>
    </Awake>
    <Awake>
      <HeroName>Peter Parker(Spiderman)</HeroName>
      <img src="../img/logo.png" />
      <HeroDsc>เด็กปั้นของ Tony Stark ผู้มีพลังไยแมงมุมไร้ขีดจำกัดพร้อมกับเซนส์การรับรู้ที่เหนือคนปกติ สงครามครั้งนี้จะวัดใจเค้าได้สักแค่ไหน</HeroDsc>
    </Awake>
    <Awake>
      <HeroName>Tony Stark (Ironman)</HeroName>
      <img src="../img/logo.png" />
      <HeroDsc>เศรษฐีวัยกลางคนผู้เป็นเจ้าของชุดเกราะสุดล้ำอย่าง Ironman และภาคนี้เค้าก็ไม่พลาดที่จะปรากฏตัว</HeroDsc>
    </Awake>
  </div>
))
