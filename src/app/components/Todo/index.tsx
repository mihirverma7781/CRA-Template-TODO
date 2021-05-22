/**
 *
 * Todo
 *
 */
import * as React from 'react';
import { TodoList } from '../TodoList/index';

// interface InputValue{
//   inp
// }

interface Props {}

export function Todo(props: Props) {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [todoArray, setTodoArray] = React.useState<string[]>([]);

  const addTodo = e => {
    e.preventDefault();
    if (inputValue) {
      setTodoArray([...todoArray, inputValue]);
    } else {
    }
  };

  return (
    <div className="p-20 todo flex flex-col border-yellow-300 border-2  rounded-2xl shadow-2xl justify-center items-center  mt-20">
      <h1 className="text-3xl font-semibold ">Todo Application</h1>
      <div className="inner-div">
        <div className="div flex flex-col mt-5 justify-center items-center">
          <label className="font-mono text-yellow-300 text-lg mb-2">
            Enter Your task:
          </label>
          <input
            className=" w-96 text-gray-500 py-1 px-2 rounded-sm outline-none border-0"
            name="todo-input"
            onChange={e => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <button className="p-3 bg-yellow-300 w-1/2 mt-3" onClick={addTodo}>
            add todo
          </button>
        </div>
        <hr className="color-white h-0 mt-12" />
        <div className="div my-5 flex-col flex border-red-600">
          <h3 className="text-yellow-300 text-lg">Your TODO's:</h3>
          <div className="border-3 flex flex-col text-white">
            {<TodoList todoArray={todoArray} setFunc={setTodoArray} />}
          </div>
        </div>
      </div>
    </div>
  );
}
