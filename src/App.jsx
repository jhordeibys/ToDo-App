import ToDos from './pages/ToDos';
import DeleteToDos from './pages/DeleteToDos';
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (

    <Routes>
      <Route path='/' element={<ToDos/>}/>
      <Route path='/deleted' element={<DeleteToDos />}/>
    </Routes>
 
       
  )
}

export default App
