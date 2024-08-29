import styles from './NewTask.module.css'
import pluslogo from '../assets/plus.svg'

export function NewTask(){
    return(
        <div className={styles.newTask}>
            <textarea
                name="addTask"
                placeholder="Adicione uma nova tarefa"
                />
            <div className={styles.click}>
            <button type='submit'>
                Criar
            </button>
            <img src={pluslogo} alt="plus" />
            </div>
        </div>

    )
}
