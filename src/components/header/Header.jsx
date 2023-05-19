import logoImg from './../../images/icons/Logo.svg';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <div className={styles.headerLogo}>
                        <img src={logoImg} alt="logo" />
                        <span>Fashion</span>
                    </div>
                    <nav className={styles.headerNav}>
                        <ul>
                            <li>
                                <a href="#!">CATALOGUE</a>
                            </li>
                            <li>
                                <a href="#!">FASHION</a>
                            </li>
                            <li>
                                <a href="#!">FAVOURITE</a>
                            </li>
                            <li>
                                <a href="#!">LIFESTYLE</a>
                            </li>
                            <li>
                                <a href="#!" className={styles.headerNavBtn}>
                                    SIGN UP
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
