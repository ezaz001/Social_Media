import "./leftBar.scss"
import mylogo from "../../images/mylogo.png";
import Friends from "../../images/1.png";
import Groups from "../../images/2.png";
import Market from "../../images/3.png";
import Watch from "../../images/4.png";
import Memories from "../../images/5.png";
import Events from "../../images/6.png";
import Gaming from "../../images/7.png";
import Gallery from "../../images/8.png";
import Videos from "../../images/9.png";
import Massages from "../../images/10.png";
import Tutorials from "../../images/11.png";
import Courses from "../../images/12.png";
import Fund from "../../images/13.png";

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={mylogo} alt="" />
                        <span>Ehana Majumder</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                    <hr />
                    <div className="menu">
                        <span>Your Shortcuts</span>
                        <div className="item">
                            <img src={Events} alt="" />
                            <span>Events</span>
                        </div>
                        <div className="item">
                            <img src={Gaming} alt="" />
                            <span>Gaming</span>
                        </div>
                        <div className="item">
                            <img src={Gallery} alt="" />
                            <span>Gallery</span>
                        </div>
                        <div className="item">
                            <img src={Videos} alt="" />
                            <span>Videos</span>
                        </div>
                        <div className="item">
                            <img src={Massages} alt="" />
                            <span>Massages</span>
                        </div>
                    </div>
                    <hr />
                    <div className="menu">
                        <span>Others</span>
                        <div className="item">
                            <img src={Fund} alt="" />
                            <span>Fund</span>
                        </div>
                        <div className="item">
                            <img src={Tutorials} alt="" />
                            <span>Tutorials</span>
                        </div>
                        <div className="item">
                            <img src={Courses} alt="" />
                            <span>Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
