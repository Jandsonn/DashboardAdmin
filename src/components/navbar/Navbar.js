import avatar from '../../assets/avatar.png';
import "./Navbar.css";



const Navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <img src="https://img.icons8.com/ios/24/000000/menu--v1.png"/><i className="" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#/">Produtos</a>
                <a href="#/">Usuários</a>
                <a href="#/" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                
                <a href="#/">
                <img src="https://img.icons8.com/ios/25/000000/search--v1.png"/> <i className=""></i>
                </a>


                <a href="#/">
                <img src="https://img.icons8.com/ios/25/000000/clock--v1.png"/> <i className=""></i>
                </a>


                <a href="#/">
                    <img width="30" src={avatar} alt="avatar" />
                </a>

            </div>


        </nav>
    )
}

export default Navbar;