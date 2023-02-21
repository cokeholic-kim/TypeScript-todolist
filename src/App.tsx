import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';
import ReducerSample from './components/ReducerSample';
import SampleContext from './context/SampleContext';
import ReducerSampleEdit from './components/ReducerSampleEdit';
import TodolisContext from './context/TodolisContext';
const initalState = [
  {
    id:1,
    text:"ddd",
    isDone:false
  },
  {
    id:2,
    text:"ddd",
    isDone:false
  },
  {
    id:3,
    text:"ddd",
    isDone:false
  },
]
type Action = "ADDTODO" | "DELTODO" | "TOGGLETODO"
interface actionType{
  type:Action;
  todo?:dataType;
  id?:number;
}
export interface dataType {
  id:number;
  text:string;
  isDone: boolean;
}
function reducer(state:dataType[],action:actionType):dataType[]{
  switch(action.type){
    case "ADDTODO":
      return[
        ...state,
        action.todo! // null undefined 배제 값이 무조건 있음.
      ];
    case "DELTODO":
      return (state as Array<dataType>).filter(li=>li.id !== action.id);
    case "TOGGLETODO":
      return state.map(li=>li.id === action.id ? {...li,isDone: !li.isDone}: li);
    default:
      return state;
  }
}

function App() {
  const [todos,dispatch] = useReducer(reducer,initalState)


  // const onDeltodo = (id:number) =>{
  //   dispatch({})
  // }



  // const onClick = (name: string) =>{
  //   console.log(`${name} hi`)
  // }

  // const onFormSubmit = (form:{name: string, desc: string}) =>{
  //   console.log(form)
  // }

  return (
    <div className="App">
      {/* <Hello name="green" message="안녕하세요" onClick={onClick}/>
      <Counter/>
      <MyForm onFormSubmit={onFormSubmit}/>
      <CounterReducer/> */}
      {/* <InputTodo onaddtodo={onaddtodo}/>
      <Todolists todos={todos} onToggletodo={onToggletodo} onDeltodo={onDeltodo}/>
      <ReducerSample/> */}
      {/* <SampleContext>
        <ReducerSampleEdit/>
      </SampleContext> */}
      {/* <TodolisContext>
        <Sampletodolist/>
      </TodolisContext> */}
    </div>
  );
}

export default App;
