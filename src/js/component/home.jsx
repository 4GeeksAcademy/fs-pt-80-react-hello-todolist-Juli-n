import React, { useState } from "react";

const Home = () => {
    const [todos, setTodos] = useState([]);       
    const [newTodo, setNewTodo] = useState("");   

    
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo.trim()]); 
            setNewTodo("");                       
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTodo();
        }
    };
 
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

  
    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">TODO LIST</h1>

            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleChange}
					onKeyPress={handleKeyPress}
                    placeholder="Añadir nueva tarea"
                />
                <input type="submit" className="submit" value="Añadir" onClick={handleAddTodo}/>
            </div>

            <ul>
                {todos.length > 0 ? (
                    todos.map((task, i) => (
                        <li
                            key={i}
                        >
                            {task}
                            <span
                                onClick={() => handleDelete(i)}
                                className="fa-regular fa-trash-can"
                            ></span>
                        </li>
                    ))
                ) : (
                    <li>No hay tareas, añadir tareas</li>
                )}
            </ul>
        </div>
    );
};

export default Home;