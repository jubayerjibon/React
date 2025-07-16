import React, {useState} from "react";
import "./todolist.css";
import List from "./List";


const TodoList = () => {
    const [inputTxt, setText] = useState("");
    const [data, setData] = useState([]);
    const takeValues = (event) => {
        setText(event.target.value);
    }
    const setItems = () => {
        // alert(inputTxt);
        if(inputTxt !== ""){
            setData((previous) => {
                return [
                    ... previous,
                    inputTxt
                ];
            });
            setText("");
        }else{
            alert("Write somthing first!");
        }
    }
    // delete item function.
    // it will pass as props to the list component.
    const deleteItem = (id) => {
        // alert("delete clicked" + id);
        // delete the item from the array.
        setData((oldData) => {
            // do filter to the array if index of array and
            // the clicked index is match.
            return oldData.filter((arrElem, index) => {
                return index !== id;
            });
        });

        
    }
    return(
        <>
            <div className="todo_main_div">
                <div className="input_div">
                    <input 
                        type="text" 
                        placeholder="Type your thots"
                        value={inputTxt}
                        onChange={takeValues}
                    />
                    <button className="add_list_button" onClick={setItems}>+</button>
                </div>
                <div className="container_div">
                    <ul>
                        {data.map((item, index) => {
                            return <List 
                                    text={item} 
                                    deleteItem={deleteItem}
                                    id={index}
                                    />;
                        })}  
                    </ul>
                </div>
            </div>
            
        </>
    );
}

export default TodoList;