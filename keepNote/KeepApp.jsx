import React, { useState } from "react";
import './KeepApp.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Notes from "./components/Notes";

const KeepApp = () => {
    const [notes, setNotes] = useState([]);
    const addNoteToNotes = (note) => {
        // alert(note.title);
        // alert(note.note);
        setNotes((previous) => {
            return [
                ...previous,
                note
            ];
        });
        // notes.push(note);
        // console.log(notes);
    }

    const removeNote = (noteId) => {
        // alert("delete button clicked: " + noteId);
        setNotes((old) => {
            return old.filter((element, index) => {
                return index !== noteId;
            });
        });
    }
    return(
        <>
            <div>
                <Header />
                <Input addNoteToNotes={addNoteToNotes}/>
                <div className="note_container">
                {notes.map((note, index) => {
                    return <Notes 
                                id={index} 
                                title={note.title} 
                                text={note.note} 
                                removeNote={removeNote}
                            />;
                })}
                </div>
                
                
                <Footer />
            </div>

        </>
    );
}

export default KeepApp;