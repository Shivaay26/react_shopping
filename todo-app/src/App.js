import React,{useState} from 'react';
import Display from './Display';
import Form from './form';

function App() {
  const HandleDelete=(id)=>{
    const NewArray=todos.filter(todo=>{return todo.id!==id})
    settodos(NewArray);
    console.log(Math.random())
  }

  const [todos, settodos] = useState([{todo:"complete react cart project",id:1},
{todo:"do Exercise",id:2},])

  return (
    <div className="App">
      <h1 className="title">TODO APP</h1>
      <Display todos={todos} HandleDelete={HandleDelete}/>
      <Form settodos={settodos} todos={todos}/>
    </div>
  );
}

export default App;
