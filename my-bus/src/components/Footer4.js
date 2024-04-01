import Twitter from "../Images/Twitter Icon.png"
import Facebook from "../Images/Facebook Icon.png"
import Github from '../Images/GitHub Icon.png'
import Instagram from "../Images/Instagram Icon.png"
import Linkedin from '../Images/Linkedin Icon.png'

export default function Footer4(){
    return(
        <div className="footer4">
            <a><img src={Twitter}/></a>
            <a><img src={Facebook}/></a>
            <a><img src={Instagram}/></a>
            <a><img src={Github}/></a>
            <a><img src={Linkedin}/></a>
        </div>
    )
}