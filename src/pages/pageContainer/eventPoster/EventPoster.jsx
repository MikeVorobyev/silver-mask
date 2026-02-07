// Афиша

import styles from './eventPoster.module.scss'
import ButtonBack from '../../../components/buttons/ButtonBack'
import Header from '../../../components/header/Header'
import InformationContaier from '../../../components/informationContaier/InformationContaier'
import MoreInfo from '../../../components/moreInfo/MoreInfo'

import useNavigationButton from '../../../store/navigationButtonStore'

import useHeightMainIMG from "../../../store/heightMainIMG_store"
import calculatePercentage from '../../../function/calculatePercentage'

import events from './events'

function EventPoster() {
    const navigationButton = useNavigationButton()
    const heightMainIMG = useHeightMainIMG()
    const marginBodyWrapper = heightMainIMG.initHeight

    // console.log(events)

    return(
        <div className={styles.eventPoster}>
            <Header headerTitle={'АФИША'}/>

            <div className={styles.body_wrapper} style={{marginTop: `${calculatePercentage(marginBodyWrapper, 22)}px`}}>
                <div className={styles.body_inner}>
                    {events.map((event, i) => <InformationContaier event={event} key={i}/>)}
                </div>

                <div className={styles.buttonBack_wrapper} onClick={() => navigationButton.setText('back')}>
                    <ButtonBack />
                </div>
            </div>

            <MoreInfo section='eventPoster'/>
        </div>
    )
}


export default EventPoster