import React from 'react';
import style from './Destination.module.css';
import planet from '../../../assets/destination/image-moon.png'
import MenuSecundary from "../../atoms/MenuSecundary";

const Destination = () => {
    return (
        <div className={style.body}>
            <div className={style.content}>
                <div className={style.content__left}>
                    <div className={style.content__left__title}>
                        <h3 className={style.number}>01</h3>
                        <h3 className={style.title}>Pick your destination</h3>
                    </div>
                    <div className={style.content__left__maps}>
                        <img src={planet} alt=""/>
                    </div>
                </div>
                <div content={style.content__right}>
                    <MenuSecundary/>
                    hola

                </div>
            </div>
        </div>
    );
};

export default Destination;
