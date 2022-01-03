import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React to-do app</h1>
      </header>
      <nav></nav>
      <main>
        <TodoList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
