import React from 'react';

const Todos = ({todos,deletetodo}) => {

let mtodos=todos.map(todo=>{
		return (<div onClick={()=>deletetodo(todo.id)} className="templetediv">
			{todo.name}
				</div>)
		
	})

  return (
    <div >{mtodos}</div>
  )
}

export default Todos;