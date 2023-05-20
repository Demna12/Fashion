import styles from './Voucher.module.css';
import AppstoreIcon from './../../images/icons/app-store.png';
import GoogleplayIcon from './../../images/icons/google-play.png';
import VoucherImg from './../../images/images/vouchers-img.png';

const Vaucher = () => {
    return (
        <section className={StyleSheet.voucher}>
            <div className={styles.container}>
                <div className={styles.text}>
                    DOWNLOAD APP & GET THE VOUCHER!
                    <div className={styles.voucherDescr}>
                        Get 30% off for first transaction using Rondovision
                        mobile app for now.
                    </div>
                    <div className={styles.voucherIcon}>
                        <img src={AppstoreIcon} alt="AppStore" />
                        <img src={GoogleplayIcon} alt="GooglePlay" />
                    </div>
                </div>
                <div className={styles.voucherImg}>
                    <img src={VoucherImg} alt="VoucherImg" />
                </div>
            </div>
        </section>
    );
};

export default Vaucher;
