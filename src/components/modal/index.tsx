import React from 'react';
import { TodoTypes } from '../../base/types';

const Modal = (props: any) => {
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="p-10 rounded-xl bg-gray-50">
            <div className="absolute right-5 top-5 rounded-full hover:bg-gray-200 p-2"></div>
            <p className="text-center text-xl font-semibold">
              {props.selectedTodo ? 'Update Todo' : 'Create Todo'}
            </p>
            <div className="mt-5">
              <p className="text-sm mb-1 ml-2 font-semibold">Todo Title</p>
              <input
                value={props.todoTitle}
                onChange={(e) => props.setTodoTitle(e.target.value)}
                type="text"
                placeholder="Todo Title"
                className="rounded-md border w-full px-4 py-2"
              />
            </div>
            <div className="mt-5">
              <p className="text-sm mb-1 ml-2 font-semibold">
                Todo Description
              </p>
              <input
                value={props.todoDescription}
                onChange={(e) => props.setTodoDescription(e.target.value)}
                type="text"
                placeholder="Todo Description"
                className="rounded-md border w-full px-4 py-2"
              />
            </div>
            <div className="mt-5 flex ml-2">
              <input type="checkbox" className="w-5 h-5" onChange={e => props.setTodoStatus(e.target.checked)} checked={props.todoStatus} />
              <p className="text-sm mb-1 ml-2 font-semibold">
                Done
              </p>
            </div>

            <div className="flex justify-around mt-8 items-center">
              <button
                onClick={(e) => props.cleanUp()}
                className=" font-semibold  flex justify-between"
              >
                Cancel
              </button>
              <button
                onClick={() => props.handleSubmit()}
                className="px-3 py-2 disabled:bg-yellow-200 rounded-md bg-yellow-400 text-white font-semibold hover:bg-yellow-500 flex justify-between"
              >
                {props.selectedTodo ? 'Update Todo' : 'Create Todo'}
              </button>

              { props.selectedTodo.status === 0 && <button
                onClick={() => props.handleDelete()}
                className=" font-semibold text-red-600 flex justify-between"
              >
                Delete Todo
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
