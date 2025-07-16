import React, {useState} from "react";

const List = (props) => {
    return (
        <>
            <li>
                <button 
                className="remove_item_btn" 
                onClick={() => {
                    props.deleteItem(props.id);
                }}>
                    x
                </button>
                {props.text}
            </li>
        </>
    );
}

export default List;