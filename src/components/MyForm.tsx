import React, { useState } from 'react';
import { setFlagsFromString } from 'v8';

type MyFormProps = {
    onFormSubmit: (form:{name:string,desc:string})=>void;
}

const MyForm = ({onFormSubmit}:MyFormProps) => {
    const [formData,setFormData] = useState({
        name:"",
        desc:""
    })
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       const {name,value}= e.target;
       setFormData({
        ...formData,
        [name]:value
       })
    }
    //submit버튼 클릭시 실행
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        //연결된 이벤트 제거
        e.preventDefault();
        setFormData({
            name:"",
            desc:""
        })
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" value={formData.name} onChange={onChange}/>
                <input name="desc" value={formData.desc} onChange={onChange}/>
                <button type='submit'>등록</button>
            </form>
        </div>
    );
};

export default MyForm;