// Карточка для галереи

import styles from './galleryCard.module.scss'

import useEventTransmission from '../../store/eventTransmissionStore'

function GalleryCard({ eventGallery }) {
    const eventTransmission = useEventTransmission()
    function galleryCardHadler() {
        eventTransmission.setEvent(
            {
                id: eventGallery.id,
                visible: true,
                dateEvent: '',
                titleEvent: eventGallery.titleEvent,
                subtitleEvent: '',
                durationEvent: '',
                photoFolderName: '',
                imgURLEvent: eventGallery.imgURLEvent,
                descriptionEvent: '',
            }
        )
    }

    return(
        <div id={eventGallery.id} className={styles.galleryCard} onClick={() => galleryCardHadler()}>
            <div className={styles.title}>
                <h2>{eventGallery.titleEvent}</h2>
            </div>

            <div className={styles.img_preview}>
                <img src={eventGallery.imgURLEvent[0]} alt='img_preview'/>
            </div>
        </div>
    )
}

export default GalleryCard