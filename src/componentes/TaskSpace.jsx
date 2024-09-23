import styles from './TaskSpace.module.css'
import clipboard from '../assets/Clipboard.svg'

export function TaskSpace(){
    return(
        <div>
            <header className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.completed}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
            <div className={styles.boxEmpty}>
                {/* if tasks == 0 */}
                <img src={clipboard} alt="clipboard" />
                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>


            </div>
        </div>



    )

}
