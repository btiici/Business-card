import Email from "../Images/Icon.png"
import Vector from '../Images/Vector.png'


export default function Contact3 (){
    return(
        <div>
            <div className="contact">
                <h2>Olanrewaju Pelumi</h2>
                <h3>Frontend Developer</h3>
                <p>pelumi.website</p>
                <div className="buttons">
                    <button><img src={Email}/>Email</button>
                    <button><img src={Vector}/>Linkedin</button>
                </div>
            </div>
        </div>
    )
}

