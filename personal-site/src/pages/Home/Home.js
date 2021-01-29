import React from 'react'
import styles from './Home.module.css'

import Footer from '../../components/Footer/Footer';
import GiroImageCard from '../../components/GiroImageCard/GiroImageCard';

export default function Home() {
    
    return (
        <>
        <div className={styles.pageContainer}>
            <div className={styles.pageCard}>
                <div className={styles.pageHeaderContainter}>
                    <h1>PETER WELTY</h1>
                </div>
                <div className={styles.cardContainer}>
                    <GiroImageCard image='./IMG_2115.jpeg'/>
                </div>
                <div className={styles.descriptionContainer}> 
                    <h2> Developer. Programmer. Explorer.</h2>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )
}
