import styles from './index.module.scss'
import Back from '../../images/back.svg'
import Lamp from '../../images/lamp.png'
import Check from '../../images/check.png'
import Learn from '../../images/learn.png'
import Win from '../../images/win.png'
import GroupSvg from '../../images/Groupsvg.svg'

import ContentWrapper from '../ContentWrapper'
import Label from '../Label'
import Title from '../Title'
import Line from '../Line'
import Card from '../Card'
import Button from '../Button'

const Advantages = () => {
    return ( 
        <section className={styles.advantages}>
            <img src={Back} alt="background" className={styles.backLine}/>
            <Label text='для чего' marginBottom={23} width={125} />
            <Title text='Зачем участвовать в чемпионате?' width={750}/>
            <Line/>
            <ContentWrapper>
                <div className={styles.advantages__cards}>
                    <Card 
                        height={359}
                        color='#8836AE'
                        titleSize={32}
                        img={Lamp}
                        text='На чемпионате есть возможность познакомиться с базовыми понятиями и принципами финансовой грамотности, прокачать гибкие навыки и предпринимательское мышление. А благодаря игровому формату новые знания усвоятся значительно лучше!'
                        title='Получить прикладные знания'
                    />
                    <Card 
                        height={359}
                        color='#8836AE'
                        titleSize={32}
                        img={Check}
                        text='Результаты личного и командного зачетов продемонстрируют, насколько хорошо ты разбираешься в теме финансов и умеешь управлять своими ресурсами.'
                        title='Проверить себя'
                    />
                    <Card 
                        height={359}
                        color='#8836AE'
                        titleSize={32}
                        img={Learn}
                        text='Если умений и опыта не хватает, во время турнира ты сможешь потренироваться, закрепить новую информацию и систематизировать свои знания.'
                        title='Восполнить пробелы и потрениро­вать навыки'
                    />
                    <Card 
                        height={359}
                        color='#8836AE'
                        titleSize={32}
                        img={Win}
                        text='Все участники получат сертификаты, а финалистов и призеров ждут памятные подарки. '
                        title='Получить призы и подарки'
                    />
                    <img src={GroupSvg} alt="decor" className={styles.groupDecor}/>
                </div>
            </ContentWrapper>
            <Button text='Подать заявку на участие' width={530}/>
        </section>
     );
}
 
export default Advantages;