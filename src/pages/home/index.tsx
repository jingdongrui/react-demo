import "./index.scss";
import reactLogo from '../../assets/images/button/react_logo.svg'
import antdLogo from '../../assets/images/button/antd_logo.svg'
import p2 from '../../assets/images/button/101.png';
import p3 from '../../assets/images/button/8.png';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isButtonDown, setIsButtonDown] = useState("0")
  const handClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    if (target.tagName !== "IMG") return;
    if (!target.dataset.id) return;
    setIsButtonDown(target.dataset.id)
  }
  return (
    <>
      <div className="home-container">
        <ul className="button-container" onMouseDown={handClickEvent} onMouseUp={() => { setIsButtonDown("0") }}>
          <li className="box">
            <div className={isButtonDown === "1" ? "imgdown" : "img"} onClick={() => navigate('/todos')}>
              <img className="spin" data-id="1" src={reactLogo} alt="p1" />
            </div>
            <p>TodoList</p>
          </li>
          <div className="box">
            <div className={isButtonDown === "2" ? "imgdown" : "img"} onClick={() => navigate('/antd')}>
              <img className="spin" data-id="2" src={antdLogo} alt="p3" />
            </div>
            <p>AntDesign</p>
          </div>
          <div className="box">
            <div className={isButtonDown === "3" ? "imgdown" : "img"} onClick={() => window.open('https://www.bilibili.com', '_blank')}>
              <img data-id="3" src={p3} alt="p3" />
            </div>
            <p>哔哩哔哩</p>
          </div>
          <li className="box">
            <div className={isButtonDown === "4" ? "imgdown" : "img"}>
              <img data-id="4" src={p2} alt="p2" />
            </div>
            <p>Test</p>
          </li>
          {/* <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>电话</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>短信</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>浏览器</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>相机</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>相册</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>哔哩哔哩</p>
          </div>
          <div className="box">
            <div className="img"><img src={p2} alt="" /></div>
            <p>日历</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/10.png" alt="" /></div>
            <p>时钟</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/11.png" alt="" /></div>
            <p>Youtube</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/12.png" alt="" /></div>
            <p>Facebook</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/13.png" alt="" /></div>
            <p>微信</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/14.png" alt="" /></div>
            <p>QQ</p>
          </div>
          <div className="box">
            <div className="img"><img src="images/15.png" alt="" /></div>
            <p>微博</p>
          </div> */}
        </ul>
      </div>
    </>
  )
}
export default Home