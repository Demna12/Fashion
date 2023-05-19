import styles from './Payday.module.css';

const Payday = () => {
    return (
        <section className={styles.payday}>
            <div className={styles.container}>
                <div className={styles.paydayContent}>
                    <div className={styles.paydayText}>
                        <div className={styles.paydayTitle}>
                            <span className={styles.highlight}>
                                <span>PAYDAY</span>
                            </span>{' '}
                            SALE NOW
                        </div>
                        <div className={styles.paydayDescr}>
                            Spend minimal $100 get 30% off voucher code for your
                            next purchase
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payday;
