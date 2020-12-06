import React from 'react';


const AddItem = ({ name, onChange, onAdd }) => (

  <div className="add-item">

    <input type="text" value={name} onChange={onChange} maxLength="24" />
    
    <button type="button" onClick={onAdd}>
      Add Item
    </button>

  </div>

);

export default AddItem;