import React, { useRef, useState } from 'react';
import { useTodoDispatch } from '../context/TodolisContext';

const TodoInput = () => {
    // 인풋의값을 관리할 상태
    const [text,setText] = useState("")
    const dispatch = useTodoDispatch()
    //인풋의 값이  변경될때 호출되는 함수
    //text값을 인풋의 값으로 업데이트
    const onchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
    const ref = useRef(4)
    const onAddTodo = ()=>{
        dispatch({type:"ADDTODO",todo:{
            id:ref.current,
            text:text,
            isDone:false
        }})
        setText("")
        ref.current++
    }
    return (
        <div>
            <input name='text' value={text} onChange={onchange}/>
            <button onClick={onAddTodo}>등록</button>
        </div>
    );
};

export default TodoInput;