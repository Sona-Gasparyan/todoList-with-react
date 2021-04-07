import React from 'react';
import Header from "./components/Header"
import ToDoItemsList from "./components/TodoItemsList"
import SearchBar from "./components/SearchBar"
import "./style.css"
import Toggle from './components/Toggle';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      todoName: "",
      searchedName: "",
      done: false
    }
  }

  removeTodoItem = (todoName) => {
    const { items } = this.state
    const index = this.state.items.indexOf(todoName);
    const newItems = [...items]
    newItems.splice(index, 1)
    this.setState({
      items: newItems
    })
  }



  onAddBtn = () => {
    const { todoName, items } = this.state
    if (!todoName || items.includes(todoName)) {
      return
    }
    const newItems = [...items]
    newItems.push(todoName)
    this.setState({
      todoName: "",
      items: newItems
    })
  }

  onSearchBtn = (e) => {
    const arrOfSearchedItems = []
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].includes(this.state.searchedName)) {
        arrOfSearchedItems.push(this.state.items[i])
      }
    }
    console.log(arrOfSearchedItems)
  }


  searchChange = (e) => {
    this.setState({
      searchedName: e.target.value
    })
  }


  handleChange = (e) => {
    this.setState({
      todoName: e.target.value
    })
  }


  render() {
    return (
      <div>
        <Header onSearchBtn={this.onSearchBtn} onAddBtn={this.onAddBtn} todoName={this.state.todoName} handleChange={this.handleChange} searchChange={this.searchChange} />
        <ToDoItemsList items={this.state.items} removeTodoItem={this.removeTodoItem} />
        <SearchBar onSearchBtn={this.onSearchBtn} />
      </div>
    )
  }
}


export default App;