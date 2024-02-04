import './Header.scss';
import Socials from '../Socials/Socials';

export default function Header() {
    return(
        <div className='Header'>
            <img className="mainLogo" src="images/Logo.svg" alt="logo"/>
            <div className="socialsBlock">
                <Socials/>
            </div>
        </div>
    )
}
