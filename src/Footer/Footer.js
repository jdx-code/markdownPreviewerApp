import {FaGithub, FaTwitterSquare, FaLinkedin, FaFacebookSquare, FaYoutube} from "react-icons/fa"
import './Footer.css'

function Footer() {
    return (
        <div className="footer text-center">
            <p>This project was built as a part of freeCodeCamp's Front End Libraries Certification.</p>
            <p>Jyotirmoy Das, Web Developer </p>
                <div className="reactIconCustomStyle">
                    <a href="https://github.com/jdx-code"><FaGithub style={{color: 'black'}}/></a>
                    <a href="https://www.linkedin.com/in/jdx-code/"><FaLinkedin style={{color: 'black'}}/></a>
                    <a href="https://www.youtube.com/channel/UCbVXfJT0zA79w9Axl3Kx8eA"><FaYoutube style={{color: 'black'}}/></a>
                    <a href="https://twitter.com/jdx_code"><FaTwitterSquare style={{color: 'black'}}/></a>                
                    <a href="https://www.facebook.com/profile.php?id=100009157844756"><FaFacebookSquare style={{color: 'black'}}/></a>             
                </div>                           
        </div>
    )
}

export default Footer