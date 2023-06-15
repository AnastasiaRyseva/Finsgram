import styles from './index.module.scss'

import Star from '../../images/star.svg'
import Cash from '../../images/cash.png'
import WhiteStar from '../../images/star_white.svg'
import Photo1 from '../../images/div.png'
import Photo2 from '../../images/div1.png'
import Photo3 from '../../images/div2.png'
import Photo4 from '../../images/div3.png'

import ContentWrapper from '../ContentWrapper'
import GroupPhoto from '../GroupPhoto'
import Label from '../Label'

const About = () => {
    return ( 
        <section className={styles.about} id='about'>
            <ContentWrapper>
                <div className={styles.about__card}>
                    <img src={WhiteStar} alt="Star" className={styles.whiteStar}/>
                    <Label text='для кого' width={168} marginBottom={17}/>
                        <div className={styles.about__card_head}>
                            <h2 className={styles.about__card_title}>
                                Что такое чемпионат<br/>
                                по финансовым играм?    
                            </h2>
                            <GroupPhoto 
                                image1={Photo1} 
                                image2={Photo2} 
                                image3={Photo3}
                                image4={Photo4}
                            />
                        </div>
                        <div className={styles.about__card_body}>
                            <p className={styles.about__card_text}>
                                Летний чемпионат по финансовым играм - это уникальная 
                                возможность повысить свои знания и навыки по финансовой грамотности. 
                                Чемпионат проводится в формате увлекательных настольных игр. 
                            </p>
                            <p className={styles.about__card_text}>
                                Для участия в чемпионате не требуется специальных навыков и 
                                знаний. 
                                Изучать и закреплять знания по финансовой 
                                грамотности участники будут прямо во время турнира. 
                            </p>
                        </div>
                    <img src={Cash} alt="decor" className={styles.decorCash}/>
                    <img src={Star} alt="decor" className={styles.decorStar}/>
                </div>
            </ContentWrapper>
        </section> 
    );
}
 
export default About;