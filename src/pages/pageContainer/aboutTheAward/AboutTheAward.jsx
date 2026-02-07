// О премии

import styles from './aboutTheAward.module.scss'

import Header from '../../../components/header/Header'
import ButtonBack from '../../../components/buttons/ButtonBack'

import useNavigationButton from '../../../store/navigationButtonStore'
import useHeightMainIMG from '../../../store/heightMainIMG_store'
import importAll from '../../../function/importAll' // Функция, с помощью которой можно добавить сразу всю папку с фотографиями
import calculatePercentage from '../../../function/calculatePercentage'

function AboutTheAward() {
    const navigationButton = useNavigationButton()
    const heightMainIMG = useHeightMainIMG()
    const marginAboutTheAward = heightMainIMG.initHeight

    const aboutTheAwardIMG = importAll(require.context('../../../assets/img/aboutTheAwardIMG', false, /\.(png|jpe?g|svg)$/))

    return(
        <div className={styles.aboutTheAward}>
            <Header headerTitle={'О ПРЕМИИ'}/>

            <div className={styles.row} style={{marginTop: `${calculatePercentage(marginAboutTheAward, 24)}px`}}>
                <div className={styles.main_text_wrapper}>
                    <p className={styles.main_text}>
                        Основанная в 1991 году Российская Национальная театральная Премия «Серебряная Маска» за годы своего 
                        существования заслуженно стала олицетворением профессионального признания и эталоном художественного качества 
                        в российском театральном пространстве. Она ставит своей целью представить зрителям наиболее яркие 
                        и значимые работы театрального сезона, охватывая практически все существующие жанры: 
                        от классической драмы и оперы до современных мюзиклов, балета и экспериментального театра кукол.
                        <br/>
                        <br/>
                        Являясь ключевым проектом Союза театральных деятелей Российской Федерации, 
                        «Серебряная Маска» – это авторитетная награда с богатой, более чем тридцатилетней историей. 
                        Премия отмечает постановки из самых разных регионов страны, выделяя наиболее впечатляющие 
                        и новаторские работы, определяющие лицо современного российского театра.
                        <br/>
                        <br/>
                        Главная задача Премии и Фестиваля «Серебряная Маска» – не только выявлять спектакли, 
                        демонстрирующие наивысшие достижения российской театральной школы, но и способствовать сохранению духовных 
                        и культурных ценностей, поддерживая преемственность и развитие лучших традиций отечественного театрального искусства. 
                        Театр живет благодаря своим зрителям, поэтому важнейшим приоритетом «Серебряной Маски» является предоставление возможности 
                        выдающимся творческим коллективам продемонстрировать свой талант и мастерство, 
                        создавая неповторимую атмосферу сотворчества между сценой и зрительным залом.
                    </p>

                    <div className={styles.buttonBack_wrapper} onClick={() => navigationButton.setText('back')}>
                        <ButtonBack />
                    </div>
                </div>

                <div className={styles.img_slider_container}>
                    {aboutTheAwardIMG.map((img) => <img className={styles.img} src={img} alt='aboutTheAwardIMG' />)}
                </div>
            </div>

        </div>
    )
}

export default AboutTheAward