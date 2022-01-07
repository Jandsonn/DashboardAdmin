import hello from '../../assets/logo.png';
// import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    return (
        <main> 
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá Jandson :D</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards"></div>
                    <div className="card">
                        <i className="fa fa-file-text fa-2x  text-lightblue"></i>
                            <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                        <span className="font-bold text-title">3400</span>
                    </div>
               </div>
            </div>
        
        
        </main>

    );

};

export default Main;