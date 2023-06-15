import styles from './index.module.scss'
import Cup from '../../images/cup.png'
import Star from '../../images/star.svg'
import Cash from '../../images/cash.png'


import ContentWrapper from '../ContentWrapper'

const Promo = () => {
    return ( 
        <section className={styles.promo}>
            <ContentWrapper>
                <div className={styles.promo__block}>
                    <div className={styles.promo__text}>
                        <h1 className={styles.promo__title}>
                            Летний 
                            чемпионат
                            по финансовым играм
                        </h1>
                        <img src={Cash} alt="decor" className={styles.decorCash}/>
                        <div className={styles.promo__text_items}>
                            <div>май-август 2023 г.</div>
                            <div>г. Хабаровск</div>
                            <div className={styles.item}>для школьников 8-18 лет</div>
                        </div>
                    </div>
                    <div className={styles.promo__offer}>
                        Прокачай свои знания по финансовой грамотности
                    </div>
                    <div className={styles.promo__image}>
                        <img src={Star} className={styles.promo__decorStar} alt='star'/>
                        <img src={Cup} className={styles.promo__cup} alt="cup" />
                        <div className={styles.promo__decor}></div>
                    </div>
                </div>
            </ContentWrapper>
        </section> 
    );
}
 
export default Promo;