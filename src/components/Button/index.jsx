import styles from './index.module.scss'

const Button = ({
    text,
    width
}) => {
    return ( 
    <button type='button' style={{width: width}} className={styles.button}>
        <p>{text}</p>
    </button> );
}
 
export default Button;