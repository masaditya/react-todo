import React from 'react';
import ListTodo from './components/ListTodo';
import Modal from './components/modal';
import TodoStateFn from './function/state';

const App = () => {
  const todoState = TodoStateFn();
  return (
    <div className="max-h-screen p-4 md:p-10">
      <div className="flex justify-center mb-10"> <button onClick={()=> todoState.setIsModalOpen(true)} className="px-2 py-2 bg-yellow-400 rounded-md text-white">Create New Todo</button> </div>
      <div className="flex justify-around">
        <ListTodo list={todoState.doneTodo} title="Done Todo" handleSelect={todoState.handleSelect} />
        <ListTodo list={todoState.undoneTodo} title="Undone Todo" handleSelect={todoState.handleSelect} />
      </div>
      {todoState.isModalOpen && <Modal {...todoState} />}
    </div>
  );
};

export default App;
