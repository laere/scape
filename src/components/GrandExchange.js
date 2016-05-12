import React, { Component, PropTypes } from 'react';

const GrandExchange = ({text, geData, onSubmit, onChange}) => {
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input type="text" onChange={onChange}/>
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
      <div>
        {geData.map(x => {
          {console.log(x.item.id)}
          return (
            <div key={x.item.id}>
              <img src={x.item.icon_large} alt="picture of the item" />
              <div>{x.item.name}</div>
              <div>{x.item.type}</div>
              <div>{x.item.description}</div>
              <div>Current price: <em>{x.item.current.price}</em> gold.</div>
              <div>Today: Down <em>{x.item.today.price}</em> gold.</div>
              <div>30 day change: <em>{x.item.day30.change}</em></div>
              <div>90 day change: <em>{x.item.day90.change}</em></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GrandExchange;
