import hello from '../../assets/logo.png';
import Chart from '../charts/Chart';

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
                    <img src=" https://cdn-icons.flaticon.com/png/512/2003/premium/2003257.png?token=exp=1641603976~hmac=8ca730f961bd2ab3378f659d1b0ad5fc" width={40}></img>
                     <i className="fa fa-file-text fa-2x text-lightblue"></i>
                            <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                        <span className="font-bold text-title">3400</span>
                    </div>
                </div>
               
               
                <div className="card">
                 <i className="fa fa-money- fa-2x text-red"></i>
                        <div className="card__inner">
                        <p className="text-primary-p">Pagamentos</p>
                        <span className="font-bold text-title">R$218.698</span>
                        <img src="https://cdn-icons.flaticon.com/png/512/3110/premium/3110547.png?token=exp=1641603101~hmac=45e91d2f92479bbd6a78b75fc2e19b20" width={60}></img>
                    </div>
                </div>

               
                <div className="card">
                <i className="fa fa-archive- fa-2x text-red"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Relatórios</p>
                        <span className="font-bold text-title">5000</span>
                        <img src="https://cdn-icons.flaticon.com/png/512/3889/premium/3889588.png?token=exp=1641603259~hmac=9e91ac0b54c0809008d17216c5d82cd5" width={60}></img>
                    </div>
                </div>

                <div className="card">
                 <i className="fa fa-bars- fa-2x text-yellow"></i>
                    <div className="card__inner">
                        <p className="text-primary-p">Categorias</p>
                        <span className="font-bold text-title">45</span>
                        <img src="https://cdn-icons.flaticon.com/png/512/2816/premium/2816963.png?token=exp=1641603527~hmac=f452abfe641a9b019e88755353a30524" width={60}></img>
                    </div>
                </div>


             <div className='charts'>
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>João Pessoa, Paraíba, BR</p>
                        </div>
                            <i className="fa fa-usd"></i>
                        </div>
                </div>
             </div>


             <div className='charts'>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>João Pessoa, Paraíba, BR</p>
                        </div>
                        <i className="fa fa-area-chart"></i>
                   </div>

                    <div className="charts__right__cards">
                        <div className='card1'>
                            <h1>Lucro</h1>
                            <p>R$ 500.000</p>
                        </div>

                        <div className='card2'>
                            <h1>Pagamentos</h1>
                            <p>R$ 355.000</p>
                        </div>

                        <div className='card3'>
                            <h1>Custos de hospedagem</h1>
                            <p>R$ 200,00</p>
                        </div>

                        <div className='card4'>
                            <h1>Banco de dados</h1>
                            <p>R$ 389,00</p>
                        </div>

                    </div>
                </div>
             </div>
        </div>
 </main>

    );

};

export default Main;