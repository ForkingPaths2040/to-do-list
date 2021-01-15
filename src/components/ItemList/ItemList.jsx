import React, { Component } from 'react';
import './ItemList.css'
import ItemCard from './ItemCard'

class ItemList extends Component {
  render() {
    return (
      <div className="list-container">
          {this.props.list.map((task, index) => {
            return <ItemCard onchange={ this.props.toggleStatus }key={`${index}_${task.name}`} index={index} item={task} />;
          })}
      </div>
    );
  }
}

export default ItemList;