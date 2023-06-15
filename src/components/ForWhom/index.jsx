import styles from './index.module.scss'
import Star from '../../images/star.svg'
import Face from '../../images/human.png'
import Face1 from '../../images/human1.png'
import Face2 from '../../images/human2.png'
import Face3 from '../../images/human3.png'
import textWrapper from '../../images/Union1.png'
import textWrapper2 from '../../images/Union2.png'
import textWrapper3 from '../../images/Union3.png'

import ContentWrapper from '../ContentWrapper'
import Label from '../Label'
import Title from '../Title'
import Line from '../Line'
import Button from '../Button'
import GroupPhoto from '../GroupPhoto'
import BackLine from '../../images/Vector.svg'

const ForWhom = () => {
    return ( 
        <section className={styles.members}>
            <Line/>
            <ContentWrapper>
                <div className={styles.members__top}>
                    <Label text='для кого' width={125}/>
                    <Title text='Кто может принять участие? ' width={750}/>
                    <img src={Star} alt="decor" className={styles.decorStar}/>
                </div>
                <div className={styles.members__main}>
                    <GroupPhoto
                        image1={Face} 
                        image2={Face1} 
                        image3={Face2}
                        image4={Face3}
                    />
                    <p className={styles.members__main_text}>
                        Для участия в чемпионате достаточно заполнить форму на сайте. 
                        В этом тебе могут помочь твои родители. 
                    </p>
                
                    <p className={styles.members__main_specialText}>
                        Школьники 8-18 лет из<br/> Хабаровска и Хабаровского края  
                    </p>
                    <p className={styles.members__main_text}>
                        После оформления заявки с тобой свяжутся 
                        организаторы и расскажут о дальнейших действиях. 
                    </p>
                </div>
                <div className={styles.containerForRow}>
                    <div className={styles.rowTop}>
                        <img src={textWrapper} alt="wrapper" />
                        <span>
                        Ты школьник?
                        </span>
                    </div>
                    <div className={styles.rowMid}>
                        <img src={textWrapper2} alt="" />
                        <span>
                        Хочешь быть финансово грамотным?
                        </span>
                    </div>
                    <div className={styles.rowBot}>
                        <img src={textWrapper3} alt="" />
                        <span>
                        Регистрируйся на чемпионат! 
                        </span>
                    </div>
                </div>
                <img src={Star} alt="decor" className={styles.decorStarBottom}/>
            </ContentWrapper>
            <Button text='Принять участие' width={924}/>
            <img src={BackLine } alt="Back line" className={styles.backLine}/>
        </section>
     );
}
 
export default ForWhom;