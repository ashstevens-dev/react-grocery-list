import React from 'react';
import ItemList from '../ItemList/ItemList';
import './App.css'


const initialList = [
  { name: 'Kale', id: 1, countVal: 1, doneVal: false },
  { name: 'Bananas', id: 2, countVal: 1, doneVal: false },
  { name: 'Sausage', id: 3, countVal: 1, doneVal: false },
];

const App = () => {

  return (
    <article className="app">
      <section className="wrapper">
        
        <h1>Grocery List</h1>

        <ItemList initialList={initialList} />

      </section>
    </article>
  );
  
};

export default App;