// Главная страница

import React, { useRef, useState, useLayoutEffect } from 'react';
import styles from './main.module.scss'

import main_up_page from '../../../assets/img/main_up_page.png' // Картинка

import ButtonMain from '../../../components/buttons/ButtonMain' // Кнопка для Main

import calculatePercentage from '../../../function/calculatePercentage' // Вычисляет процент от полученных числовых значений(здесь использую для значения из 'position')

import useNavigationButton from '../../../store/navigationButtonStore'
import useHeightMainIMG from '../../../store/heightMainIMG_store';

function Main() {
    const mainRef = useRef(null)
    const [position, setPosition] = useState(0) // Позиция контейнера с кнопками
    const navigationButton = useNavigationButton()
    const heightMainIMG = useHeightMainIMG()

    useLayoutEffect(() => { // Вычисляем высоту контейнера 'Main'(она равна рисунку бэкграунда) для позиционирования кнопок и передаем в useState 'position'
        const updatePosition = () => {
          if (mainRef.current) {
            setPosition(mainRef.current.offsetHeight)
            heightMainIMG.setHeight(mainRef.current.offsetHeight)
          }
        }
    
        const resizeObserver = new ResizeObserver(updatePosition)
        resizeObserver.observe(mainRef.current)
    
        return () => resizeObserver.disconnect() // Очистка
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (text) => {
        navigationButton.setText(text)
    }

    return(
        <div className={styles.main}>
            <img ref={mainRef} className={`${styles.main_up_page}`} src={main_up_page} alt="main_back" />

            <div className={styles.buttonMain_wrapper} style={{marginTop: `${calculatePercentage(position, 82)}px`}}>

                <div className={styles.buttonMain_aboutTheAward} onClick={() => handleClick('aboutTheAward')} >
                    <ButtonMain text={'О ПРЕМИИ'} />
                </div>
                
                <div className={styles.buttonMain_eventPoster} onClick={() => handleClick('eventPoster')} >
                    <ButtonMain text={'АФИША'} />
                </div>

                <div className={styles.buttonMain_gallery} onClick={() => handleClick('gallery')} >
                    <ButtonMain text={'ГАЛЕРЕЯ'}/>
                </div>
            </div>
        </div>
    )
}


export default Main