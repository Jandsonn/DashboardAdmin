import './Sidebar.css'

import logo from '../../assets/logo.png';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    
    return(

        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Eginer Soluctions</h1>
                    </div>

                    <i onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                    ></i> 
                </div>

               
                <div className="sidebar__menu">
                     <div className="sidebar__link active_menu_link">
                        <i className=""></i>
                        <a href="#/">Home</a>
                     </div>
                     <h2>ADMIN</h2>


                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/administrative-tools.png"/> <i className="fa fa-tachometer"></i>
                        <a href="#/">Área administrativa</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/duty-free.png"/> <i className=""></i>
                        <a href="#/">Lojas</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/store-setting.png"/> <i className=""></i>
                        <a href="#/">Produtos</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios-glyphs/25/000000/category.png"/> <i className=""></i>
                        <a href="#/">Categorias</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/telegram-app.png"/> <i className=""></i>
                        <a href="#/">Pedidos</a>
                    </div>

                    <h2>PESSOAS</h2>
                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/admin-settings-male.png"/>  <i className=""></i>
                        <a href="#/">Administradores</a>
                    </div>

                
                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios-glyphs/25/000000/group.png"/><i className=""></i>
                        <a href="#/">Usuários</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/25/000000/receive-change.png"/> <i className=""></i>
                        <a href="#/">Pagamentos e custos</a>
                    </div>

                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios-glyphs/25/000000/super-mario.png"/> <i className=""></i>
                        <a href="#/">A plataforma</a>
                    </div>

                    
                    <div className="sidebar__link">
                    <img src="https://img.icons8.com/ios/30/000000/spyware-free.png"/> <i className=""></i><a href="#/">Privacidade</a>
                    </div>

                    <div className="sidebar__link">
                        <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"> <i> <img src="https://img.icons8.com/ios-glyphs/25/000000/linkedin.png"/> </i> </a> 
                        <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"> <i><img src="https://img.icons8.com/ios-glyphs/30/000000/whatsapp.png"/> </i> </a> 
                        <a href="https://github.com/Jandsonn"> <i><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/> </i> </a> 
                    </div>    

   
                    <div className="sidebar__logout">
                    <img src="https://img.icons8.com/ios/30/000000/logout-rounded--v1.png"/> <i className=""></i>
                        <a href="#/">Log out</a>
                    </div>

                </div>
            </div>
    )


}
export default Sidebar;