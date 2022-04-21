import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { TodoTypes } from '../../base/types';
import { GetTodo } from '../api';
const TodoStateFn = () => {
  const [todos, setTodos] = React.useState<TodoTypes[]>([]);
  const [selectedTodo, setSelectedTodo] = React.useState<TodoTypes>();

  const [todoTitle, setTodoTitle] = React.useState('');
  const [todoDescription, setTodoDescription] = React.useState('');
  const [todoStatus, setTodoStatus] = React.useState(false);


  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    GetTodo()
      .then((res: AxiosResponse<TodoTypes[]>) => setTodos(res.data))
      .catch((err: AxiosError) => alert(err.response?.data.toString()));
  }, []);

  const undoneTodo = React.useMemo(() => {
    return todos
      .filter((item) => item.status === 0)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }, [todos]);

  const doneTodo = React.useMemo(() => {
    return todos
      .filter((item) => item.status === 1)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }, [todos]);

  const handleSelect = React.useCallback((item: TodoTypes) => {
    setSelectedTodo(item);
    setTodoTitle(item.title);
    setTodoDescription(item.description);
    setTodoStatus(item.status === 1)
    setIsModalOpen(true);
  }, []);

  const handleSubmit = () => {
    if (selectedTodo) {
      console.log(selectedTodo);
      let index = todos.findIndex((todo) => todo.id === selectedTodo.id);
      let tmp = [...todos];
      tmp[index].title = todoTitle;
      tmp[index].description = todoDescription;
      tmp[index].status = todoStatus ? 1 : 0;
      setTodos(tmp);
    } else {
      setTodos([
        ...todos,
        {
          title: todoTitle,
          description: todoDescription,
          status: todoStatus ? 1 : 0,
          createdAt: new Date().toString(),
          id: todos[todos.length - 1].id + 1,
        },
      ]);
    }
    cleanUp();
  };

  const handleDelete = React.useCallback(() => {
    if(selectedTodo){
      setTodos(todos => todos.filter(item => item.id !== selectedTodo.id))
      cleanUp()
    }
  }, [todos, selectedTodo]);

  const cleanUp = React.useCallback(() => {
    setIsModalOpen(false);
    setSelectedTodo(undefined);
    setTodoDescription('');
    setTodoTitle('');
  }, []);

  return {
    todos,
    undoneTodo,
    doneTodo,
    setTodos,
    selectedTodo,
    setSelectedTodo,
    handleSubmit,
    handleDelete,
    handleSelect,
    todoTitle,
    todoDescription,
    setTodoDescription,
    todoStatus,
    setTodoStatus,
    setTodoTitle,
    isModalOpen,
    setIsModalOpen,
    cleanUp,
  };
};

export default TodoStateFn;
