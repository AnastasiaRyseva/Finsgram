import styles from './index.module.scss'

const GroupPhoto = ({
    image1,
    image2,
    image3,
    image4,
}) => {
    return ( 
        <div className={styles.photos}>
            <div className={styles.photoWrapper}>
                <img src={image1} alt="photo" className={styles.photo}/>
            </div>
            <div className={styles.photoWrapper}>
                <img src={image2} alt="photo" className={styles.photo}/>
            </div>
            <div className={styles.photoWrapper}>
                <img src={image3} alt="photo" className={styles.photo}/>
            </div>
            <div className={styles.photoWrapper}>
                <img src={image4} alt="photo" className={styles.photo}/>
            </div>
        </div>
     );
}
 
export default GroupPhoto;