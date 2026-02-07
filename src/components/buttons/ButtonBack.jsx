import { useState } from 'react'
import styles from './buttonBack.module.scss'


function ButtonBack() {
    const [clickBtn, setClickBtn] = useState('')

    function scaleAnimation() { // Добавление селектора для анимации нажатия кнопки из-за того, что 'action' в CSS не всегда срабатывает для тапания по экрану
        setClickBtn(styles.scale_animation)
        setTimeout(function() {
            setClickBtn('')
        }, 100);
    }

    return(
        <div className={`${styles.buttonBack} ${clickBtn}`} onClick={scaleAnimation}>
            <button className={styles.buttonBack_style}>НАЗАД</button>
        </div>
    )
}


export default ButtonBack