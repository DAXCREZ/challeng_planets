import React, {useState} from 'react';
import logo from '../../../assets/shared/logo.svg';
import MenuMainStyle from './MenuMain.module.css';
import {Link, Outlet } from "react-router-dom";


const MenuMain = () => {

    const [active, setActive] = useState(MenuMainStyle.list__messy);


    const ActiveButton = (option) => {
        if (option === 1){
            setActive(MenuMainStyle.list__messy__active);
        }else if(option === 2){
            setActive(MenuMainStyle.list__messy__active);
        }else if(option === 3){
            setActive(MenuMainStyle.list__messy__active);
        }else if(option === 4){
            setActive(MenuMainStyle.list__messy__active);
        }
    }


    return (
        <div className={MenuMainStyle.body}>
            <nav className={MenuMainStyle.browser}>
                    <div className={MenuMainStyle.container__logo}>
                        <img className={MenuMainStyle.logo} src={logo} alt=""/>
                    </div>

                    <span className={MenuMainStyle.line__detail}></span>

                    <ul className={MenuMainStyle.list}>
                        <Link to="/" className={MenuMainStyle.link}>
                            <li className={active} onClick={()=>ActiveButton(1)}>
                                <label className={MenuMainStyle.option_number} htmlFor="" >00</label>
                                <label className={MenuMainStyle.option} htmlFor="" >HOME</label>
                            </li>
                        </Link>
                        <Link to="/destination" className={MenuMainStyle.link}>
                            <li className={active} onClick={()=>ActiveButton(2)}>
                                <label className={MenuMainStyle.option_number} htmlFor="" >01</label>
                                <label className={MenuMainStyle.option} htmlFor="" >DESTINATION</label>
                            </li>
                        </Link>
                        <Link to="/crew" className={MenuMainStyle.link}>
                            <li className={active} onClick={()=>ActiveButton(3)}>
                                <label className={MenuMainStyle.option_number} htmlFor="" >02</label>
                                <label className={MenuMainStyle.option} htmlFor="" >CREW</label>
                            </li>
                        </Link>
                        <Link to="/technology" className={MenuMainStyle.link}>
                            <li className={active} onClick={()=>ActiveButton(4)}>
                                <label className={MenuMainStyle.option_number} htmlFor="" >03</label>
                                <label className={MenuMainStyle.option} htmlFor="" >TECHNOLOGY</label>
                            </li>
                        </Link>
                    </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default MenuMain;
