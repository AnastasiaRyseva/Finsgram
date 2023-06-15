import styles from './index.module.scss'

const Title = ({
    text,
    width
}) => {
    return ( 
        <h2 className={styles.title}style={{maxWidth: width}}>
            {text}
        </h2> 
    );
}
 
export default Title;