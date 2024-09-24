import styles from './TaskSpace.module.css';
import clipboard from '../assets/Clipboard.svg';
import { NewTask } from './NewTask'; // Importando o componente
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import bluecheck from '../assets/bluecheck.svg';
import { useState } from 'react';


export function TaskSpace(){
    const [tasks, setTasks] = useState([]); //armazenar as tasks
    
    function handleAddTask(newTask){
        if (newTask.trim() === '') return; // Não adiciona tarefa vazia
        setTasks([...tasks, { text: newTask, completed: false }]); //desestruturação, task com text e completed
    }

    function taskCompletion(index) {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      }
    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return(
        
        <div>
            <NewTask onAddTask={handleAddTask} />
            <header className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>{tasks.length}</span> 
                </div>
                <div className={styles.completed}>
                    <p>Concluídas</p>
                    <span>{tasks.filter(task => task.completed).length} de {tasks.length}</span>
                </div>
            </header>
            {/* Passando a função de adicionar tarefa para o componente NewTask */}
            
            
            {tasks.length === 0 ? (
                <div className={styles.boxEmpty}>
                    {/* if tasks == 0 */}
                    <img src={clipboard} alt="clipboard" />
                    <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>):(
                    <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? styles.completedTask : styles.incompletedTask}>
                            <div className={task.completed ? styles.completedCheckbox : styles.incompletedCheckbox}

                                onClick={() => taskCompletion(index)} //clicando na checkbox
                            >{task.completed ? (
                                <img src={check} alt="check" /> // Ícone de verificado como SVG
                            ) : (
                                <img src={bluecheck} alt="bluecheck" /> // Ícone para tarefas incompletas
                            )}
                            </div>
                            <span className={task.completed ? styles.completedText : styles.incompletedText}>{task.text}</span>
                            <button className={styles.trash} onClick={() => handleDeleteTask(index)}>
                                <img src={trash} alt="trash" />
                            </button>
                        </li>
                        ))}
                    </ul>
            )}
        </div>



    )

}
