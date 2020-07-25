import React from "react";
import "./app.css"
function App() {
  const tasks = ["Laundry", "Mow the Grass"];
  console.log(tasks);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>abcd {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
