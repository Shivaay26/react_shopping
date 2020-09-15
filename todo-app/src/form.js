import React,{useState} from 'react'

const Form = ({settodos,todos}) => {
    const [todo, settodo] = useState("")

    const ChangeHandler=(e)=>{
        settodo(e.target.value)
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        console.log(todo);
        settodos([...todos,{todo:todo,id:Math.random()}])
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div><input className="input" onChange={ChangeHandler}/></div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Form
