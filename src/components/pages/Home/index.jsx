import React from 'react';
import HomeStyle from './HomeTemplate.module.css';
import ExplorerButton from "../../atoms/ExplorerButton";

const HomeTemplate = () => {
    return (
        <div className={HomeStyle.body}>
            <div className={HomeStyle.main__info__container}>
                <div className={HomeStyle.text__info__container}>
                    <div className={HomeStyle.text__info}>
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h1>SPACE</h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely
                            go to outer space and not hover kind of on the edge of it. Well sit back,
                            and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>

                </div>
                <div className={HomeStyle.explorer__button__container}>
                    <ExplorerButton/>
                </div>

            </div>
        </div>
    );
};

export default HomeTemplate;
