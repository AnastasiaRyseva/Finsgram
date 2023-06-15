import styles from './index.module.scss'
import Child from '../../images/child.png'
import Child1 from '../../images/child1.png'
import Child2 from '../../images/child2.png'
import GroupSvg from '../../images/Groupsvg.svg'
import GroupSvg1 from '../../images/Group1.svg'
import PurpuleCup from '../../images/PurpleIcons.png'

import ContentWrapper from '../ContentWrapper'
import Label from '../Label'
import Title from '../Title'
import Line from '../Line'

const News = () => {
    return ( 
        <section className={styles.news}>
            <Label text='новости' width={125} marginBottom={42}/>
            <Title text='Новости чемпионата' width={905}/>
            <Line/>
            <ContentWrapper>
                <p className={styles.news__anons}>
                    Как проходил летний чемпионат по финансовой 
                    грамотности<br/> в 2022 г.
                    <span className={styles.news__anons_special}>
                        &nbsp;в Хабаровске 
                    </span>
                </p>
                <div className={styles.news__photos}>
                    <img src={GroupSvg1} alt="decor" className={styles.decorTop}/>
                    <img src={Child1} alt="child" />
                    <img src={Child2} alt="child" />
                    <img src={Child} alt="child" />
                    <img src={GroupSvg} alt="decor" className={styles.decorBot}/>
                    <img src={PurpuleCup} alt="decor" className={styles.decorCup}/>
                    <div className={styles.decor}></div>
                </div>
            </ContentWrapper>
        </section>
     );
}
 
export default News;