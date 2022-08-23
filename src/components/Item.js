import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='item-name'>Title</h1>
        <div className='item-content'>
            <div className='item-image-content'>
                <div className='main-image'>
                    <img src='' alt='main-image' />
                </div>
                <div className='image-gallery'>

                </div>
            </div>
            <div className='item-data'>
                <button>Download</button><span>$28</span>
                <div>
                    <button>Like</button>
                    <button>Add to cart</button>
                </div>
                <div className='rating'></div>
            </div>
            
        </div>        
      </div>
    );
  }
}
