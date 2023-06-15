import styles from './index.module.scss'

const Label = ({
    text,
    width,
    marginBottom
}) => {
    return ( 
        <div className={styles.label} 
            style={{width: width,
            marginBottom: marginBottom}}>
            <p className={styles.label__text}>{text}</p>
        </div>
     );
}
 
export default Label;