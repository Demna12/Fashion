import styles from './Payday.module.css';
import payadayImg from './../../images/images/payday.jpg';

const Payday = () => {
    return (
        <section className={styles.payday}>
            <div className={styles.container}>
                <div className={styles.paydayContent}>
                    <div className={styles.daypayImg}>
                        <img src={payadayImg} alt="payadayImg" />
                    </div>
                    <div className={styles.paydayText}>
                        <div className={styles.paydayTitle}>
                            <span className={styles.highlight}>
                                <span>PAYDAY</span>
                            </span>
                            SALE NOW
                            <div className={styles.paydayDescr}>
                                Spend minimal $100 get 30% off voucher code for
                                your next purchase
                                <span className={styles.descrBold}>
                                    1 June - 10 June 2023
                                </span>
                                *Terms & Conditions apply
                            </div>
                        </div>
                        <div>
                            <a href="#!" className={styles.paydayBtn}>
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payday;
