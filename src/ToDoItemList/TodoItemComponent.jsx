import React, { useRef } from 'react';


const TodoItemComponent = (props) => {  
//   const handleChange = (event) => {
//       setTodoItem(event.target.value);
//   }
//   const [inputState, setInputState]=useState();
const inputState = useRef() 
console.log('inputState', inputState);
  const resolvedClass = {
    textDecoration: "line-through"
  } 

    const onFocusDescriptionHandler=(event)=> {
    console.log('event', event);
        inputState.current=(event.target.value);
    }

    const onBlurDescriptionHandler=()=>{
        props.setTodolist(inputState.current);
    }

    // console.log('props',props); 
    console.log('todoItem', props.todoItem);

    return (
        <div className="todo-item">
            <div className="description-wrapper">
       <h4 style={{marginBottom: 5}}>{props.todoItem.description}</h4> 
           </div>
           <input 
           type="text" 
           value={inputState.current} 
        //    onChange={inputDescriptionHandler}
            onFocus={onFocusDescriptionHandler} 
            onBlur={onBlurDescriptionHandler}
          style={props.completed === true ? resolvedClass : {}}
        />
           <div className="input-wrapper">
           
              
              {/* <input
                type="checkbox"
                defaultChecked={props.completed}
                onChange={props.handleChange}
              /> */}
           {/* </div>
           <div> 
            <p>{todoItem}</p>
            <input type="checkbox" onChange={handleChange}/> */}
          </div>
        </div>
    );
}

export default TodoItemComponent;