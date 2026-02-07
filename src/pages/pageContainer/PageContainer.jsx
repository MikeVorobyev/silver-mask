// Контейнер-слайдер для всех страниц

import styles from './pageContainer.module.scss'
import main_back from '../../assets/img/main_back.png'

import Main from './main/Main'
import Gallery from './gallery/Gallery'
import EventPoster from './eventPoster/EventPoster'
import AboutTheAward from './aboutTheAward/AboutTheAward'

import useNavigationButton from '../../store/navigationButtonStore'


function PageContainer() {
    const navigationButton = useNavigationButton()

    const active = function() { // Навигация в 'ГАЛЕРЕЯ', 'АФИША' и "О ПРЕМИИ"
        switch (true) {
            case (navigationButton.initText === 'aboutTheAward'):     // Навигация для перехода в 'О ПРЕМИИ'
                return styles.active_right
            case (navigationButton.initText === 'eventPoster'):       // Навигация для перехода в 'АФИША'
                return styles.active_down
            case (navigationButton.initText === 'gallery'):           // Навигация для перехода в 'ГАЛЕРЕЯ'
                return styles.active_left
            case (navigationButton.initText === 'back'):              // Навигация возвращения в окно 'Main' для кнопки 'НАЗАД'
                return ''
            default:
                return ''
        }
    }

    const visible = navigationButton.initText === 'back' ? '' : styles.hiden_img // Включение и выключение видимости изображения '.main_back' при нажати кнопок навигации

    return(
        <div className={styles.pageContainer}>
            <img className={`${styles.main_back} ${visible}`} src={main_back} alt="main_back" />

            <div className={`${styles.main_page_wrapper} ${active()}`}>
                <Main className={styles.main_page} />
            </div>

            <div className={`${styles.gallery_page_wrapper} ${active()}`}>
                <Gallery className={styles.gallery_page} />
            </div>

            <div className={`${styles.eventPoster_page_wrapper} ${active()}`}>
                <EventPoster className={styles.eventPoster_page} />
            </div>

            <div className={`${styles.aboutTheAward_page_wrapper} ${active()}`}>
                <AboutTheAward className={styles.aboutTheAward_page} />
            </div>
            
        </div>
    )
}


export default PageContainer