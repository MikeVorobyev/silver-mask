
import { useState } from 'react'
import styles from './buttonMain.module.scss'

function ButtonMain({ text }) {
    const [clickBtn, setClickBtn] = useState('')

    function scaleAnimation() { // Добавление селектора для анимации нажатия кнопки из-за того, что 'action' в CSS не всегда срабатывает для тапания по экрану
        setClickBtn(styles.scale_animation)
        setTimeout(function() {
            setClickBtn('')
          }, 100);
    }

    return(
        <div className={`${styles.buttonMain} ${clickBtn}`} onClick={scaleAnimation}>
            <button className={styles.button_style}>{text}</button>
        </div>
    )
}


export default ButtonMain