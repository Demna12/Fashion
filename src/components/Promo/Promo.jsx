import styles from './Promo.module.css';
import promoImg from './../../images/images/header-img.jpg';

const Promo = () => {
    return (
        <section className={styles.promo}>
            <div className={styles.container}>
                <div className={styles.promoContent}>
                    <div className={styles.promoText}>
                        <div className={styles.promoTitle}>
                            <span className={styles.highlight}>
                                <span>LET’S</span>
                            </span>
                            EXPLORE
                            <span className={`${styles.highlight} ${styles.highlightYellow}`}>
                                <span>UNIQUE</span>
                            </span>
                            CLOTHES.
                        </div>
                        <div className={styles.promoDescription}>
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className={styles.promoBtnWrapper}>
                            <a href="#!" className={styles.promoBtn}>
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className={styles.promoImg}>
                        <img src={promoImg} alt="PromoImg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;