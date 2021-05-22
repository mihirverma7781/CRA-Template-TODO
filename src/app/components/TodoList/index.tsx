/**
 *
 * TodoList
 *
 */
import * as React from 'react';

export function TodoList({ todoArray, setFunc }) {
  const deleteItem = index => {
    const todos = todoArray.filter((item, indexToDelete) => {
      return indexToDelete !== index;
    });
    setFunc(todos);
  };

  return todoArray.map((elem, index) => {
    return (
      <div
        className="border-2 m-2 bg-white rounded-sm shadow-lg text-gray-800 flex justify-between "
        key={index}
      >
        <li className="list-none text-lg font-bold p-2">{elem}</li>
        <button
          className=" px-5 py-2  bg-red-800 text-white"
          onClick={() => deleteItem(index)}
        >
          Delete
        </button>
      </div>
    );
  });
}
