import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/todoItem'
import CheckModal from './components/modal/checkModal'
import EditModal from './components/modal/editModal'



function App() {
  const [isShowInput, setShowInput] = useState(false)
  const [todolist, setTodolist] = useState([])
  const [isShowCheckModal, setShowCheckModal] = useState(false)
  const [isShowEditModal, setShowEditModal] = useState(false)
  const [currentData, setcurrentData] = useState({})


  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      isCompleted: false
    }
    setTodolist((todolist) => [...todolist, dataItem])
    setShowInput(false)
  }, [])

  const openCheckModal = useCallback((id) => {
    _setCurrentData(id)
    setShowCheckModal(true)
  }, [todolist])

  const openEditModal = useCallback((id) => {
    _setCurrentData(id)
    setShowEditModal(true)
  }, [todolist])

  const _setCurrentData = (id) => {
    setcurrentData(() => todolist.filter(item => item.id === id)[0])
  }

  const submitEdit = useCallback((newData, id) => {
    setTodolist((todolist) =>
      todolist.map((item) => {
        if (item.id === id) { item = newData }
        return item
      })
    )
    setShowEditModal(false)
  })
  const completeItem = useCallback(id => {
    setTodolist(todolist => todolist.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    }))
  }, [])

  const removeItem = useCallback(id => {
    setTodolist((todolist) =>
      todolist.filter(item => item.id !== id)
    )
  }, [])

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || [])
    setTodolist(todoData)
  }, [])
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todolist))
  }, [todolist])

  return (
    <div className="App">
      <CheckModal
        data={currentData}
        isShowCheckModal={isShowCheckModal}
        closeModal={() => { setShowCheckModal(false) }}
      />
      <EditModal
        data={currentData}
        isShowEditModal={isShowEditModal}
        submitEdit={submitEdit}
      />

      <Header openInput={() => setShowInput(!isShowInput)} />
      <AddInput isShowInput={isShowInput} addItem={addItem} />
      <ul className="Ul-todolist">
        {todolist.map(item => {
          return <TodoItem
            data={item}
            key={item.id}
            openCheckModal={openCheckModal}
            openEditModal={openEditModal}
            completeItem={completeItem}
            removeItem={removeItem}
          />
        })}
      </ul>
    </div>
  );
}

export default App;
