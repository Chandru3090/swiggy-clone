import logo from '../../assets/images/money-control.png';
import { Link, useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const navigate = useNavigate();
    
    const handleLogoContainerClick = () => {
        navigate("/");
    }

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex shadow-md justify-between items-center p-4 lg:px-6">
            <div className="logo-container" onClick={() => handleLogoContainerClick}>
                <img src={logo} className="w-16 h-16" alt="Money Control" />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4"><Link to="/" title="Home">Home</Link></li>
                    <li className="px-4"><Link to="/offers" title="Offers">Offers</Link></li>
                    <li className="px-4"><Link to="/settings" title="Settings">Settings</Link></li>
                    <li className="px-4 flex items-center">{onlineStatus} <span className={`w-2 ml-2 mt-1 h-2 inline-block rounded-full ${onlineStatus === 'Online' ? 'bg-green-600' : 'bg-red-600'}`}>&nbsp;</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;