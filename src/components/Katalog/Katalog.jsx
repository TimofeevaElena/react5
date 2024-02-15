import './Katalog.css'
import Card from '../Card/Card'
import {katalog} from '../../data'


export default function Katalog(){

    return(
        <div className="katalog">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <div className="filters">
                    <div className="filters-content">
                        <a href="" className="filter">Все</a>
                        <a href="" className="filter">Топ</a>
                        <a href="" className="filter">Низ</a>
                        <a href="" className="filter">Обувь</a>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        {katalog.map((card)=>{
                            return(
                                <Card name={card.name} price={card.price} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}