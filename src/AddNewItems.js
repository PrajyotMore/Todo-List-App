import { useState } from "react";

const AddNewItems = ({onSubmit}) => {
    const [newItem,setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(newItem === "") return
        onSubmit(newItem)
        setNewItem("")
      }
    return (
        <form onSubmit={handleSubmit}> 
        <div className="form-row">
          <label htmlFor='item'>New Item</label>
          <div>
          <input placeholder="Add Todos..." type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
          </div>
          <button>Add</button>
        </div>
        </form>
    )
}

export default AddNewItems;