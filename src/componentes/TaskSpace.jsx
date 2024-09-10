import styles from './TaskSpace.module.css'

export function TaskSpace(){
    return(
        <div className={styles.info}>
            <div className={styles.created}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>
            <div className={styles.completed}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
        </div>
    )

}
