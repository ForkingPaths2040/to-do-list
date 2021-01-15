import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((task, index) => {
            return <ItemCard key={`${index}_${task.name}`} item={task} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ItemList;