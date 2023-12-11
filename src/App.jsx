
import { useReducer, useRef } from 'react'
import './App.css'



function App() {

  const inputRef = useRef();
 
  const [tasks, dispatch] = useReducer((state = [], action) =>{

    switch(action.type){
      case 'ADD_TASK':{
        return [
          ...state,
          { id: state.length , title: action.title}
        ]
      }

      case 'DELETE_TASK':{
      return  [
          ...state.filter( (task, index) => index != action.index )
        ]

      }

      default: { return state; }

    }
  })

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      title: inputRef.current.value
    });
  }



  return (
    <>
              {/* ----Header---- */}
      <div className=' text-green-500 text-3xl my-10 font-bold'>To do List App</div>

              {/* ----input to add some task---- */}

      <form onSubmit={handleSubmit} className='text-white flex justify-center text-center '>
      <input type="text" title='name' ref={inputRef} className=" py-2.5 lg:text-center sm:text-left w-10/12 lg:px-28 text-sm  bg-transparent border-0 border-b-2  text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="agregar tarea" />
      <button className=' ml-5 p-1 font-bold'> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 448 512"><path fill='#1c1' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> </button>

      

      </form>


                {/* ----Lista de tareas----  */}

      <div className='justify-center text-white flex flex-col'>

      <hr className="h-px my-8 border-0 bg-gray-700"></hr>

      {tasks && tasks.map( (task, index)=>(
        <div className='  flex justify-center gap-5 my-3 items-center ' key={index}>

          

          <p  className='bg-transparent border-[#a1f7a1] border-0 border-b-2 px-7'> { task.title } </p>

          <button onClick={ ()=> dispatch( { type: 'DELETE_TASK', index }) } className=' p-1 font-bold' > <svg xmlns="http://www.w3.org/2000/svg" fill='#ff0000' height="20" width="20" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg> </button>

        </div>
        
      ) ) }

      </div>

    </>
  )
}

export default App
