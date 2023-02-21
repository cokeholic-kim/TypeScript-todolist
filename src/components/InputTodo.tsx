import React, { useRef, useState } from 'react';
import { dataType } from '../App';

interface InputProps {
    onaddtodo:(todo:dataType)=>void
}

const InputTodo = ({onaddtodo}:InputProps) => {
    const [text,setText] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const t = e.target.value;
        setText(t);
    }
    const todoid = useRef(4); //리턴객체 {current: 4}
    const onClick = () => {
        onaddtodo({
            id:todoid.current,
            text: text,
            isDone: false
        })
        setText("")
        todoid.current++;
    }
    return (
        <div>
            <input name="todotext" value={text} onChange={onChange} />
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default InputTodo;