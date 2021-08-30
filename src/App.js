import './App.css';
import AddTask from './Component/AddTask';
import TaskList from './Component/TaskList';

function App() {
  return (
    <div className="App">
      <h1>To do app</h1>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
