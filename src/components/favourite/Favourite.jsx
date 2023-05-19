import Card from './../card/Card';
import styles from './Favourite.module.css';
import trendingImg from './../../images/images/trendingImg.jpg';
import allaroundImg from './../../images/images/allunderIMg.jpg';

const Favourite = () => {
    return (
        <section className={styles.faviurite}>
            <div className={styles.container}>
                <div className={styles.faviuriteHeader}>
                    <h2 className={styles.favTitle}>Young’s Favourite</h2>
                </div>
                <div className={styles.favouriteCards}>
                    <Card title="Trending on instagram" img={trendingImg} />
                    <Card title="All Under $40" img={allaroundImg} />
                </div>
            </div>
        </section>
    );
};

export default Favourite;
