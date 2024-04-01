import Twitter from "../Images/Twitter Icon.png"
import Facebook from "../Images/Facebook Icon.png"
import Github from '../Images/GitHub Icon.png'
import Instagram from "../Images/Instagram Icon.png"


export default function Footer(){
    return(
        <div className="footer">
            <a><img src={Twitter}/></a>
            <a><img src={Facebook}/></a>
            <a><img src={Instagram}/></a>
            <a><img src={Github}/></a>
        </div>
    )
}