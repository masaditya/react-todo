import React from 'react';
import { TodoTypes } from '../../base/types';

const ListTodo = ({
  list,
  handleSelect,
  title
}: {
  list: TodoTypes[];
  handleSelect: (value: TodoTypes) => void;
  title : string
}) => {
  return (
    <div className="p-4 bg-white w-1/3 border rounded-xl">
      <p className="text-2xl font-bold text-gray-500 mb-6">{title}</p>
      {list.map((item: TodoTypes) => {
        return (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className="cursor-pointer px-3 py-2 my-2 bg-gray-400 rounded-md text-white"
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
