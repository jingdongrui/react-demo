import "./index.scss";
import p1 from '../../assets/images/button/1.png';
import p2 from '../../assets/images/button/2.png';
import { useState } from "react";
const Home = () => {
  const [isButtonDown, setIsButtonDown] = useState(false)
  const handleMouseDown = () => {
    setIsButtonDown(true)
  }
  const handleMouseUp = () => {
    setIsButtonDown(false)
  }
  return (
    <>
      <div className="home-container">
        <div className="button-container">
          <div className="box" onMouseDown={() => setIsButtonDown(true)} onMouseUp={() => setIsButtonDown(false)}>
            <div className={isButtonDown ? "imgdown" : "img"}><img src={p1} alt="p1" /></div>
            <p>录音机</p>
          </div>
          <div className="box" onMouseDown={() => setIsButtonDown(true)} onMouseUp={() => setIsButtonDown(false)}>
            <div className={isButtonDown ? "imgdown" : "img"}><img src={p2} alt="p2" /></div>
            <p>通讯录</p>
          </div>
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
        </div>
      </div>
    </>
  )
}
export default Home