import React from 'react'
import styles from './PageCard.module.css'
import { Button } from '@material-ui/core'

export default function PageCard() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageCard}>
                <Button>Hello</Button>
            </div>
        </div>
    )
}
