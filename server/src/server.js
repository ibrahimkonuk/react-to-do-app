import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import uuid from 'uuid';

let mockTodos = [
    {
        id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
        title: 'Lorem Ipsum',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
        isCompleted: false,
        createdAt: new Date(),
    },
    {
        id: 'ae06181d-92c2-4fed-a29d-fb53a2ed5k6f',
        title: 'Title',
        description: 'This is description.',
        isCompleted: false,
        createdAt: new Date(),
    }
];

const app = express();

app.use(bodyParser.json());
app.use(cors());

// The route for getting a list of all todos
app.get('/todos', (req, res) => {
    res.status(200).json(mockTodos);
});

// The route for getting a list of all todos, but with a delay
// (to display the loading component better)
app.get('/todos-delay', (req, res) => {
    setTimeout(() => res.status(200).json(mockTodos), 2000);
});

// The route for creating new todo-list items
app.post('/todos', (req, res) => {
    console.log(req.body)
    const { title, description } = req.body;
    if (title && description) {
        const insertedTodo = {
            id: uuid(),
            createdAt: Date.now(),
            isCompleted: false,
            title,
            description,
        }
        mockTodos.push(insertedTodo);
        res.status(200).json(insertedTodo);
    } else {
        res.status(400).json({ message: 'Request body should have a title and description properties' });
    }
});

app.post('/todos/:id/completed', (req, res) => {
    const { id } = req.params;
    const matchingTodo = mockTodos.find(todo => todo.id === id);
    const updatedTodo = {
        ...matchingTodo,
        isCompleted: true,
    }
    if (updatedTodo) {
        mockTodos = mockTodos.map(todo =>
            todo.id === id
                ? updatedTodo
                : todo);
        res.status(200).json(updatedTodo);
    } else {
        res.status(400).json({ message: 'There is no todo with that id' });
    }
})

// The route for deleting a todo-list item
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const removedTodo = mockTodos.find(todo => todo.id === id);
    mockTodos = mockTodos.filter(todo => todo.id !== id);
    res.status(200).json(removedTodo);
});

app.listen(8080, () => console.log("Server listening on port 8080"));
