import styles from './NewTask.module.css'
import pluslogo from '../assets/plus.svg'

export function NewTask(){
    return(
        <div className={styles.newTask}>
            <textarea
                name="addTask"
                placeholder="Adicione uma nova tarefa"
                />
         
        <button className={styles.click} type='submit'>
            <p>Criar</p>
            <img src={pluslogo} alt="plus" />
        </button>
        </div>

    )
}
