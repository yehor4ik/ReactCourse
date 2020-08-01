import React, { Component } from 'react'

import './App.css'

import GoodsList from '../GoodsList/GoodsList'
import { goods } from '../Mocks/GoodsMock'
import GoodsListForm from '../GoodsListForm/GoodsListForm'
import { addNewItem, removeElementById } from '../Utils/goodsUtils'

export default class App extends Component {
  state = {
    goods,
  }

  onAdd = (newElement) => {
    this.setState(({ goods }) => ({
        goods: addNewItem(newElement, goods)
      }))
  }

  onDelete = (id) => {
    this.setState(({ goods }) => ({
      goods: removeElementById(id, goods)
    }))
  }

  render() {
    return (
      <div className="Container">
        <div className="Title">Fridge</div>
        <GoodsList goods={this.state.goods} onDelete={this.onDelete}/>
        <GoodsListForm onAdd={this.onAdd}/>
      </div>
    )
  }
}
