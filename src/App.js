import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((tasks) => setTask(tasks));
    }, []);

    return (
        <div className="App">
            <div>
                {task.map(({ id, title }) => (
                    <div key={id} className="container">
                        {id} <input type="checkbox" /> {title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
