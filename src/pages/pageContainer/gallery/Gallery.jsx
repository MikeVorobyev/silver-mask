// Галерея

import styles from './gallery.module.scss'
import Header from '../../../components/header/Header'
import ButtonBack from '../../../components/buttons/ButtonBack'
import MoreInfo from '../../../components/moreInfo/MoreInfo'
import GalleryCard from '../../../components/galleryCard/GalleryCard'

import useNavigationButton from '../../../store/navigationButtonStore'
import useHeightMainIMG from '../../../store/heightMainIMG_store'

import calculatePercentage from '../../../function/calculatePercentage'

import eventsGallery from '../../../components/galleryCard/eventsGallery'

function Gallery() {
    const navigationButton = useNavigationButton()

    const heightMainIMG = useHeightMainIMG()
    const marginGalleryCardWrapper = heightMainIMG.initHeight

    return(
        <div className={styles.gallery}>
            <Header headerTitle={'ГАЛЕРЕЯ'}/>

            <div className={styles.galleryCard_wrapper} style={{marginTop: `${calculatePercentage(marginGalleryCardWrapper, 27)}px`}}>
                {eventsGallery.map((eventGallery, i) => <GalleryCard eventGallery={eventGallery} />)}

                <div className={styles.buttonBack_wrapper} onClick={() => navigationButton.setText('back')} >
                    <ButtonBack />
                </div>
            </div>



            <MoreInfo section='galery'/>
        </div>
    )
}


export default Gallery