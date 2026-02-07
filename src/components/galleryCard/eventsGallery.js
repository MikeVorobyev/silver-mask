
import { v4 as uuidv4 } from 'uuid'

// ===============================================================================================
import importAll from '../../function/importAll' // Функция, с помощью которой можно добавить сразу всю папку с фотографиями

const award_ceremony_2024 = importAll(require.context('../../assets/img/award_ceremony_2024', false, /\.(png|jpe?g|svg)$/))
const award_ceremony_2025 = importAll(require.context('../../assets/img/award_ceremony_2025', false, /\.(png|jpe?g|svg)$/))
const street_theatricals_2025 = importAll(require.context('../../assets/img/street_theatricals_2025', false, /\.(png|jpe?g|svg)$/))
const russian_national_theater_award_silver_mask_2025 = importAll(require.context('../../assets/img/russian_national_theater_award_silver_mask_2025', false, /\.(png|jpe?g|svg)$/))
// ===============================================================================================

const eventsGallery = [
    {
        id: `0_id-gallery-${uuidv4()}`,
        visible: false,
        titleEvent: "Церемония вручения наград 2024",
        photoFolderName: "award_ceremony_2024",
        imgURLEvent: award_ceremony_2024,
    },
    {
        id: `1_id-gallery-${uuidv4()}`,
        visible: false,
        titleEvent: "Церемония вручения наград 2025",
        photoFolderName: "award_ceremony_2025",
        imgURLEvent: award_ceremony_2025,
    },
    {
        id: `2_id-gallery-${uuidv4()}`,
        visible: false,
        titleEvent: "Уличные театрализации 2025",
        photoFolderName: "street_theatricals_2025",
        imgURLEvent: street_theatricals_2025,
    },
    {
        id: `3_id-gallery-${uuidv4()}`,
        visible: false,
        titleEvent: "Российская национальная театральная Премия «Серебряная маска» 2025",
        photoFolderName: "russian_national_theater_award_silver_mask_2025",
        imgURLEvent: russian_national_theater_award_silver_mask_2025,
    },
]

export default  eventsGallery