import React, { Component } from 'react';
import './ItemList.css'
import ItemCard from './ItemCard'

class ItemList extends Component {
  render() {
    return (
      <div className="list-container">
          {this.props.list.map((task, index) => {
            return <div className="item-card-container">
              <ItemCard {...this.props} onchange={this.props.toggleStatus} key={`${index}_${task.job}`} index={index} item={task} />
              </div>
          })}
      </div>
    );
  }
}

export default ItemList;