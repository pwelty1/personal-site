import React from 'react'
import styles from './Contact.module.css'

import Footer from '../../components/Footer/Footer';

export default function Home() {
    
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