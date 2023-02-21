import React from 'react';

interface HelloProp {
    name: string;
    message?: string
    onClick:(name:string)=>void; //리턴하는값이없는 함수
}

const Hello = ({name,message,onClick}:HelloProp ) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{message}</p>
            <div>
                <button onClick={()=>onClick(name)}>클릭 하세요</button>
            </div>
        </div>
    );
};

export default Hello;