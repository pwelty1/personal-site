import React from 'react'

import styles from './About.module.css'
import Footer from '../../components/Footer/Footer';

export default function About() {
    return (
        <>
        <div className={styles.pageContainer}>
            <div className={styles.pageCard}>
                <Footer/>
            </div>
        </div>
        </>
    )
}
