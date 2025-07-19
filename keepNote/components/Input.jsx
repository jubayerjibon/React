import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
const Input = (props) => {
    const [notes, setNotes] = useState({
        title:"",
        note:""
    });

    // add note info to the state and show it into the input filed.
    const inputChange = (event) => {
        const {name, value} = event.target;
        setNotes((previous) => {
            return {
                ...previous,
                [name]:value
            };

        });
    }

    // set note to the array through the button click.
    const onSubmit = (event) => {
        event.preventDefault();
        // alert("button clicked");
       if(notes.title !== "" || notes.note !== ""){
            props.addNoteToNotes(notes);
            // clean the state that remove the text from input boxt
            // after adding the text to the note.
            setNotes({
                    title:"",
                    note:"",
                });
       }else{
            alert("Title and Note Could not be empty! please write somthing...");
       }

    }
    return(
        <>
            <div className="noteInput_div">
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder="Title"
                        value={notes.title}
                        name="title"
                        onChange={inputChange}
                    />
                    <textarea 
                        rows="" 
                        cols="" 
                        placeholder="Write a note...."
                        value={notes.note}
                        name="note"
                        onChange={inputChange}
                    ></textarea>
                    <button 
                        className="noteAdd_button">
                        <AddIcon />
                    </button>
                </form>
            </div>
        </>
    );
}

export default Input;