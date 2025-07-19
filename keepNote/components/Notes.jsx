import React, {useState} from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Notes = ({id, title, text, removeNote}) => {
    return(
        <>
            
            <div className="noteCard_div">
                <h4 className="note_title">{title}</h4>
                <div className="note_text_div">
                    <p>{text}</p>
                </div>
                <button 
                    className="noteDelete_btn"
                    onClick={() => {removeNote(id)}}
                >
                    <DeleteForeverIcon />
                </button>
            </div>
            
        </>
    );
}

export default Notes;