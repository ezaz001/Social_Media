import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import mylogo from "../../images/mylogo.png"
import bg from "../../images/bg.jpg"
import Posts from "../../components/posts/Posts"




const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src={bg} alt="" className="cover" />
                <img src={mylogo} alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/"><FacebookIcon fontSize="medium" /></a>
                        <a href="https://www.facebook.com/"><InstagramIcon fontSize="medium" /></a>
                        <a href="https://www.facebook.com/"><TwitterIcon fontSize="medium" /></a>
                        <a href="https://www.facebook.com/"><LinkedInIcon fontSize="medium" /></a>
                        <a href="https://www.facebook.com/"><PinterestIcon fontSize="medium" /></a>
                    </div>
                    <div className="center">
                        <span>Ehana Majumder</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon fontSize="small" />
                                <span>India</span>
                            </div>
                            <div className="item">
                                <LanguageIcon fontSize="small" />
                                <span>Ehana.com</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailIcon fontSize="medium" />
                        <MoreVertIcon fontSize="medium" />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile
