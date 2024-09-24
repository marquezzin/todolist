import styles from './NewTask.module.css'
import pluslogo from '../assets/plus.svg'
import { useState } from 'react';

export function NewTask({onAddTask}){ //recebe a função handleNewTask como propriedade
    const [newTask, setNewTask] = useState('');

    function handleSubmit(){
        event.preventDefault();
        onAddTask(newTask); //adiciona a nova task 
        setNewTask(''); //limpa textarea
    }
   
    return(
        <form onSubmit={handleSubmit} className={styles.newTask}>
            <textarea
                name="addTask"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className={styles.click} type='submit'>
                <p>Criar</p>
                <img src={pluslogo} alt="plus" />
            </button>
        </form>

    )
}
