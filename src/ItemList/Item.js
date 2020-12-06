import React, { useState } from "react";
import ReactModal from "react-modal";


const Item = ({ name, countVal, doneVal, done, decrement, increment, onRemove }) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
  	<React.Fragment>

      <section className={(doneVal === true) ? 'done item' : 'item'}>
        <button type="button" className="done-btn" onClick={done}>done</button>

	    <h3>{name}</h3>

	    <div className="quantity">
	      <button onClick={decrement}>-</button>
		  <p>{countVal}</p>
		  <button onClick={increment}>+</button>

		  <div className="trash">
		    <button type="button" onClick={toggleModal}>
		      remove
		    </button>
	      </div>	    
	    </div>
	  </section>

      <ReactModal
	  	isOpen={isOpen}
	  	onRequestClose={toggleModal}
	  	contentLabel={"Remove Item Confirmation"}
	  	parentSelector={() => document.getElementById("root")}
	  	appElement={document.getElementById('root')}
	  	style={{
	  	  overlay: { backgroundColor: 'rgba(0, 0, 0, .75)' },
	      content: {
	      	textAlign: 'center',
	      	display: 'grid',
	      	alignItems: 'center',
	      	inset: '20% 10%'
	      }
	    }}
	  >
	    <div className="modal-content">
	      <p>Are you sure you want to remove the {name} (x{countVal})?</p>
		  <button type="button" onClick={onRemove}>
		    Yes
		  </button>
		  <button type="button" className="ghost" onClick={toggleModal}>
		    No
		  </button>
		</div>
	  </ReactModal>

	</React.Fragment>
  );

};

export default Item;