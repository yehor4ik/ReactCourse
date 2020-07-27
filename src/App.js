import React, { Component } from 'react'
import List from './List'


export default class App extends Component {

  state = {
    count: 4, 
    title: 'sdfasdf',
    array: [
      {
        id: 0,
        text: 'Text1',
      },
      {
        id: 1,
        text: 'Text2',
      },
      {
        id: 2,
        text: 'Text3',
      },
      {
        id: 3,
        text: 'Text4',
      },
      {
        id: 4,
        text: 'Text5',
      },
    ]
  }

  onAddBtnClick() {
    const { state: { array } } = this
    const lastElement = array[array.length-1]
    this.setState({
      array: [
        ...this.state.array,
        {
          id: lastElement.id + 1,
          text: lastElement.text + lastElement.id + 1
        }
      ]
    })
  }
  
  onRemoveBtnClick() {
    const { array, title, count } = this.state

    console.log(array)
    this.setState({
      array: array.slice(0, array.length - 1)
    })
  }

  render() {
    return (
      <div>
        <List arr={this.state.array}/>
        <button style={{ padding: 20 }} onClick={this.onAddBtnClick.bind(this)}>ADD ME</button>
        <button style={{ padding: 20 }} onClick={this.onRemoveBtnClick.bind(this)}>REMOVE ME</button>
      </div>
    )
  }
}
