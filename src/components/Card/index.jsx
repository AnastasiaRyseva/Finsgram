import styles from './index.module.scss'

const Card = ({
    height,
    color,
    titleSize,
    img,
    text,
    title
}) => {
    return ( 
        <div className={styles.card} 
            style={{minHeight: height,
            backgroundColor: color}}
        >
            <div>
                <h3 style={{fontSize: titleSize}} className={styles.card__title}>
                    {title}
                </h3>
                <p className={styles.card__text}>
                    {text}
                </p>
            </div>
            <div className={styles.card__img}>
                <img src={img} alt="decor" />
            </div>
        </div>
     );
}
 
export default Card;