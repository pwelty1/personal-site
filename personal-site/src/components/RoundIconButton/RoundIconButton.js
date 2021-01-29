import React from 'react'
import { Button} from '@material-ui/core'
import styles from './RoundIconButton.module.css'

export default function RoundIconButton({icon}) {
    return (
        <div className={styles.buttonContainer}>
            <Button 
                variant='outlined' 
                color='secondary' 
                style={{borderRadius: '100px', height: '50px', minWidth: '0px', width: '50px'}}
            >   
                {icon}
            </Button>
        </div>
    )
}
