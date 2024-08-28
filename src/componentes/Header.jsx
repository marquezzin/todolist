import rocketLogo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}> 
            <img src={rocketLogo} alt="Logo do rocket" />
            <div className={styles.todo}>
                <p className={styles.to}>to</p>
                <p className={styles.do}>do</p>
            </div>
            
        </header>
    )
}