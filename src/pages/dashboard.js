import React from "react"
import {GlobalCtx} from "../App"

const Dashboard = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState;
    const [notes, setNotes] = React.useState(null)
    const [updateID, setUpdateID] = React.useState(null)


        const getNotes = async () => {
            const response = await fetch (url + "/note/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const json = await response.json()
        setNotes(json)
    }
     
    React.useEffect(()=> {
        getNotes()}, [])

        const input = React.useRef(null)
        const update = React.useRef(null)

        const handleClick = (event) => {
            const note = input.current.value

        fetch(url + "/note/", {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ` + token
            },
            body: JSON.stringify({note})
        })
        .then(response =>response.json())
        .then(data=>{
            input.current.value = ""
            getNotes()
        })

        }

        const handleUpdate =  () => {
            const note = update.current.value

        fetch(url + "/note/" + updateID, {
            method: "put",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ` + token
            },
            body: JSON.stringify({note})
        })
        .then(response =>response.json())
        .then(data=>{
            update.current.value = ""
            setUpdateID(null)
            getNotes()
        })

        }
        const handleDelete = (id) => {

        fetch(url + "/note/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + token
            },
        })
        .then(response =>response.json())
        .then(data=>{
            getNotes()
        })
    }
    return (
        <div>
            <form> 
            
            <input type = "text" placeholder = "Website" name = "note" ref = {input}/>
            <input type = "text" placeholder = "Address" name = "url" ref = {input}/>
            </form>
            <button onClick = {handleClick}>ADD!</button>
            <h2>Update Info Here!</h2>
            <form>
            <input type = "text" name = "note" ref = {update}/>
            <input type = "text" name = "url" ref = {update}/>
            </form>
           

            <button onClick = {handleUpdate}>Update</button>
            <ul>
               {notes ? notes.map((note)=> (
               <div className = "outputtxt">
                   <li key = {note._id} >{note.note}</li>

                   <button onClick={()=> handleDelete(note._id)}>Delete</button><button onClick={()=>{
                   setUpdateID(note._id)
                   update.current.value = note.note}}>Edit</button></div>)) : null} 
               
            </ul>

           
        </div>
    );
    }

    

export default Dashboard 