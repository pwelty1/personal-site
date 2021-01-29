import React from 'react'
import styles from './Footer.module.css'
import RoundIconButton from '../RoundIconButton/RoundIconButton'
import * as Icon from 'react-feather';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
                <RoundIconButton icon={<Icon.Facebook/>}/>
                <RoundIconButton icon={<Icon.Mail/>}/>
                <RoundIconButton icon={<Icon.Linkedin/>}/>
                <RoundIconButton icon={<Icon.GitHub/>}/>
        </footer>
    )
}
