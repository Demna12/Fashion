import styles from './Card.module.css';
import cat01Img from './../../images/images/01.jpg';
import arrowImg from './../../images/icons/arrow.svg';

const Card = ({title, img}) => {

    return (
        <div className={styles.card}>
            <a className={styles.cardLink} href="#!"></a>
            <img className={styles.cardImg} src={img} alt="CategoryImg" />
            <div className={styles.cardBody}>
                <div className={styles.cardText}>
                    <div className={styles.cardTitle}>{title}</div>
                    <div className={styles.cardMuted}>Explore Now!</div>
                </div>
                <div className={styles.cardIcon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
};

export default Card;
