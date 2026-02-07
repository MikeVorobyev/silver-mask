// Контейнер с информацией для афиши -> date | inormation | duration

import styles from './informationContaier.module.scss'

import useEventTransmission from '../../store/eventTransmissionStore'

function InformationContaier({ event }) {
    const eventTransmission = useEventTransmission()

    function informationContaierHadler() {
        eventTransmission.setEvent(
            {
                id: event.id,
                visible: true,
                dateEvent: event.dateEvent,
                titleEvent: event.titleEvent,
                subtitleEvent: event.subtitleEvent,
                durationEvent: event.durationEvent,
                photoFolderName: event.photoFolderName,
                imgURLEvent: event.imgURLEvent,
                descriptionEvent: event.descriptionEvent,
            }
        )
    }

    return(
        <div id={event.id} className={styles.informationContaier} onClick={() => informationContaierHadler()}>
            <div className={styles.informationContaier__date}>
                <p>{event.dateEvent}</p>
            </div>

            <div className={styles.informationContaier__title_and_subtitle_wrapper}>
                <h2 className={styles.informationContaier__title}>{event.titleEvent}</h2>

                <div className={styles.informationContaier__sub_title}>{event.subtitleEvent}</div>
            </div>

            <div className={styles.informationContaier__duration}>
                <div>{event.durationEvent}</div>
            </div>
        </div>
    )
}

export default InformationContaier