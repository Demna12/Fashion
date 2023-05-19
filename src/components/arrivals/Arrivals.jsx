import Card from '../card/Card';
import styles from './Arrivals.module.css';
import cat01Img from './../../images/images/01.jpg';
import cat02Img from './../../images/images/02.jpg';
import cat03Img from './../../images/images/03.jpg';

const Arrivals = () => {
    return (
        <section className={styles.arrvals}>
            <div className={styles.container}>
                <div className={styles.arrivalsHeader}>
                    <h2 className={styles.title2}>NEW ARRIVALS</h2>
                </div>
                <div className={styles.arrivalsCard}>
                    <Card title="Hoodies & Sweetshirt" img={cat01Img}/>
                    <Card title="Coats & parkas" img={cat02Img}/>
                    <Card title="Tees & T-Shirt" img={cat03Img}/>
                </div>
            </div>
        </section>
    );
};

export default Arrivals;
