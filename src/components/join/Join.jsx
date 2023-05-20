import styles from './Join.module.css';

const Join = () => {
    return (
        <section className={styles.join}>
            <div className={styles.container}>
                <div className={styles.text}>
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                    <div className={styles.joinDescr}>
                        Type your email down below and be young wild generation
                    </div>
                    <div className={styles.joinInput}>
                    <div className={styles.joinButtonIn}>
                        <input type="text" placeholder='Add your email here'/>
                        <button>SEND</button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Join;
