import React, { Component } from 'react';
import './ItemCard.css'

class ItemCard extends Component {
  render() {
    return (
      <div className='card' style={{
        backgroundColor: this.props.item.status === 'complete' ? 'lightgreen' : ''
    }}>
        <div className='card-header'>
            <input type="checkbox" onChange={() => this.props.onchange(this.props.index)}></input>
            <h3>Name: {this.props.item.job}</h3>
        </div>  
        <p>Status: {this.props.item.status}</p>
        <p>Created: {new Date(this.props.item.createdAt).toLocaleString()}</p>
      </div>
    );
  }
}

export default ItemCard;