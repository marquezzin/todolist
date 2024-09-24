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

    function taskCompletion(index) { //filter nao serve pois ia apenas filtrar,nao repetindo as tasks incompletas
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task , completed: !task.completed } : task //se for do indice,altera o completed, se não for, apenas copia a task
                        //...task para copiar as propriedades, no caso text;
        );
        setTasks(updatedTasks);
      }
    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    
    return(
        <div>
            {/* Passando a função de adicionar tarefa para o componente NewTask por meio de sua propriedade onAddTask*/}
            <NewTask onAddTask={handleAddTask} /> {/*primeiro renderiza o componente NewTask*/}
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
            
            
            
            {tasks.length === 0 ? (
                <div className={styles.boxEmpty}>
                    <img src={clipboard} alt="clipboard" />
                    <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>):(
                    <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? styles.completedTask : styles.incompletedTask}>
                            <div className={styles.checkbox} onClick={() => taskCompletion(index)}>  
                            {/* com ()=> ... está criando uma função anônima que será executada apenas quando o evento onClick for disparado, se não o tivesse
                            ele ia ser disparado assim quando a div fosse renderizada */}
                                {task.completed ? (
                                    <img src={check} alt="check" /> // Ícone para tarefas completas
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
