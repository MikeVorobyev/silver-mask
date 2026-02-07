// Всплывающее окно с дополнительной информацией

import ButtonBack from "../buttons/ButtonBack"
import styles from './moreinfo.module.scss'

import useHeightMainIMG from "../../store/heightMainIMG_store"
import calculatePercentage from '../../function/calculatePercentage'
import useEventTransmission from "../../store/eventTransmissionStore"

function MoreInfo({ section }) {// galery, EventPoster
    const heightMainIMG = useHeightMainIMG()
    const marginMoreInfo = heightMainIMG.initHeight

    const eventTransmission = useEventTransmission()
    function buttonBackHadler() {
        eventTransmission.setEvent(              // Для того чтобы при закрытии окна MoreInfo контент в нем не исчезал мгновенно(выглядит некрасиво) сначала посылаем 
            {                                    // в store контент без изменений(только команду для закрытия окна MoreInfo - false), а затем, спомощью
                ...eventTransmission.initEvent,  // функции setTimeout, через 1 секунду отправляем в store объект с пустынными данными. Обратил внимание, что 
                visible: false,                  // невсегда старый контент успевает исчезнуть перед появлением нового, поэтому лучше заранее очистить весь контент,
            }                                    // но с небольшой задержкой, чтобы визуально это не выглядело некрасво в момент анимации
        )
        setTimeout(function() {
            eventTransmission.setEvent(
                {
                    id: ``,
                    visible: false,
                    dateEvent: "",
                    titleEvent: "",
                    subtitleEvent: <p></p>,
                    durationEvent: <p></p>,
                    photoFolderName: "",
                    imgURLEvent: [],
                    descriptionEvent: <p></p>,
                }
            )
          }, 800);
    }

    const flag = function(section) { // Отображение разного контента в MoreInfo в зависимости от того где MoreInfo было вызвано (в Galery или в EventPoster)
        if(section === 'eventPoster') return true
        if(section === 'galery') return false
    }

    const visibleMoreInfo = eventTransmission.initEvent.visible === true ?  styles.visibleMoreInfo : '' // Открытие и сокрытие MoreInfo

    return (       
                <div className={`${styles.moreInfo} ${visibleMoreInfo}`} style={{marginTop: `${calculatePercentage(marginMoreInfo, 5)}px`}}>
                    <div className={styles.moreInfo_inner}>
                        {
                            flag(section) 
                                ?   <div className={styles.eventPoster__information_section}>
                                        <div className={styles.eventPoster__date}>
                                            <p>{eventTransmission.initEvent.dateEvent}</p>
                                        </div>

                                        <div className={styles.eventPoster__title_and_subtitle_wrapper}>
                                            <h2 className={styles.eventPoster__title}>{eventTransmission.initEvent.titleEvent}</h2>

                                            <div className={styles.eventPoster__sub_title}>{eventTransmission.initEvent.subtitleEvent}</div>
                                        </div>

                                        <div className={styles.eventPoster__duration}>{eventTransmission.initEvent.durationEvent}</div>
                                    </div> 

                                :   <div className={styles.galery__title_section}><h2>{eventTransmission.initEvent.titleEvent}</h2></div>
                        }

                        {   flag(section)
                            ?   <div className={styles.eventPoster__slide_section}>
                                    {eventTransmission.initEvent.imgURLEvent.map((e, i)=> <img src={e} key={i} className={styles.eventPoster__slides}/>)}
                                </div>
                            :   <div className={styles.galery__slide_section}>
                                    {eventTransmission.initEvent.imgURLEvent.map((e, i)=> <img src={e} key={i} className={styles.galery__slides}/>)}
                                </div>
                        }

                        {
                            flag(section) 
                                ? <div className={styles.description_section}>{eventTransmission.initEvent.descriptionEvent}</div>
                                : ''
                        }

                    </div>

                    <div className={styles.buttonBack_wrapper} onClick={() => buttonBackHadler()}>
                        <ButtonBack />
                    </div>
                </div>
            )
}

export default MoreInfo