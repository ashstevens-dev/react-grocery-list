import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from './Item';
import AddItem from './AddItem';


const ItemList = ({ initialList }) => {

  // Seed the data from the default array or LocalStorage
  const storList = localStorage.getItem('listValue');
  const initList = storList ? JSON.parse(storList) : initialList;
  const [list, setList] = useState(initList);

  useEffect(() => {
    localStorage.setItem('listValue', JSON.stringify(list));
  }, [list]);

  
  // Handle adding/removing of items
  const [name, setName] = useState('');

  function handleAdd() {
    
    if ( (name !== "") && (name !== " ") && !name.match(/[^0-9a-zA-Z&\-'\s]/) ) {
      
      const newList = list.concat({ name, id: uuidv4(), countVal: 1, doneVal: false });
      setList(newList);
      setName('');

    } else {
      console.log('Not a valid name!');
    }

  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
 
    setList(newList);
  }

  
  // Handle decrementing/incrementing quantity of items
  const decrement = (id) => {
    const newList = list.map((item) => {

      if (item.id === id) {
        const updatedItem = {
          ...item,
          countVal: (item.countVal > 1) ? (item.countVal - 1) : item.countVal,
        };
   
        return updatedItem;
      }
   
      return item;
    });
   
    setList(newList);
  }

  const increment = (id) => {
    const newList = list.map((item) => {

      if (item.id === id) {
        const updatedItem = {
          ...item,
          countVal: (item.countVal < 99) ? (item.countVal + 1) : item.countVal,
        };
   
        return updatedItem;
      }
   
      return item;
    });
   
    setList(newList);
  }

  
  // Handle the checking of items as done
  const done = (id) => {
    const newList = list.map((item) => {

      if (item.id === id) {
        const updatedItem = {
          ...item,
          doneVal: !item.doneVal,
        };

        return updatedItem;
      }

      return item;

    });

    setList(newList);
  }

  // prepare data to be downloaded
  const jsonFile = "data:text/json;charset=utf-8," + encodeURIComponent(storList);

  return (
    <div className="item-list">

        {list.map(item =>(
          <Item
            name={item.name}
            key={item.id}
            countVal={item.countVal}
            doneVal={item.doneVal}
            done={() => done(item.id)}
            decrement={() => decrement(item.id)}
            increment={() => increment(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}

        <a href={jsonFile} download="groceryList.json" className="json-dl-btn">
          &darr; Download List as JSON &darr;
        </a>

        <AddItem
          name={name}
          onChange={handleChange}
          onAdd={handleAdd}
        />

    </div>
  );
  
};

export default ItemList;