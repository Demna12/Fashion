import styles from './Footer.module.css';
import fbIcon from './../../images/socials/fb.svg';
import instIcon from './../../images/socials/inst.svg';
import twIcon from './../../images/socials/tw.svg';
import inIcon from './../../images/socials/in.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.fashion}>
                    <div className={styles.text}>
                        FASHION
                        <div className={styles.fashinDescr}>
                            Complete your style with awesome clothes from us.
                        </div>
                    </div>
                    <div className={styles.fashionIcon}>
                        <a href="#!">
                            <img src={fbIcon} alt="FacebooK" />
                        </a>
                        <a href="#!">
                            <img src={instIcon} alt="Instagram" />
                        </a>
                        <a href="#!">
                            <img src={twIcon} alt="Tweater" />
                        </a>
                        <a href="#!">
                            <img src={inIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className={styles.fashionLinks}>
                    <div className={styles.company}>
                        <ul>
                            {' '}
                            Company
                            <a href="#!">
                                <li>About</li>
                            </a>
                            <a href="#!">
                                <li>Contact us</li>
                            </a>
                            <a href="#!">
                                <li>Support</li>
                            </a>
                            <a href="#!">
                                <li>Careers</li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.quickLink}>
                        <ul>
                            {' '}
                            Quick Link
                            <a href="#!">
                                <li>Share Location</li>
                            </a>
                            <a href="#!">
                                <li>Orders Tracking</li>
                            </a>
                            <a href="#!">
                                <li>Size Guide</li>
                            </a>
                            <a href="#!">
                                <li>FAQs</li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.legal}>
                        <ul>
                            {' '}
                            Legal
                            <a href="#!">
                                <li>Terms & conditions</li>
                            </a>
                            <a href="#!">
                                <li>CPrivacy Policy</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
