import styles from './Brands.module.css';
import hm from './../../images/brands/HM.png';
import amazon from './../../images/brands/Amazon.png';
import lacoste from './../../images/brands/Lacoste.png';
import levis from './../../images/brands/Levis.png';
import obey from './../../images/brands/Obey.png';
import shopify from './../../images/brands/Shopify.png';

const Brands = () => {
    return (
        <section className={styles.brands}>
            <div className={styles.container}>
                <ul className={styles.brandsList}>
                    <li>
                        <a href="#!">
                            <img src={hm} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={obey} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={shopify} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={lacoste} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={levis} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={amazon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Brands;
