import React, { Component } from 'react';
import './ItemList.css'
import ItemCard from './ItemCard'

class ItemList extends Component {
  render() {
    return (
      <div className="list-container">
          {this.props.list.map((task, index) => {
            return <ItemCard key={`${index}_${task.name}`} item={task} />;
          })}
      </div>
    );
  }
}

export default ItemList;