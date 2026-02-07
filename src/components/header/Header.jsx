
import logo from '../../assets/img/logo_left_up1.png'
import styles from './header.module.scss'

import useHeightMainIMG from "../../store/heightMainIMG_store"
import useNavigationButton from '../../store/navigationButtonStore'
import calculatePercentage from '../../function/calculatePercentage'



function Header({ headerTitle }) {
    const navigationButton = useNavigationButton()
    const heightMainIMG = useHeightMainIMG()
    const marginMoreInfo = heightMainIMG.initHeight

    return(
        <div className={styles.header} style={{marginTop: `${calculatePercentage(marginMoreInfo, 3)}px`}}>
            <img className={styles.header_logo} src={logo} onClick={() => navigationButton.setText('back')} alt="Лого" />
            <h1 className={styles.header_title}>{headerTitle}</h1>
        </div>
    )
}


export default Header