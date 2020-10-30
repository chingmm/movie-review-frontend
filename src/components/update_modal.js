import React from "react"
import  {Modal, Button}  from "react-bootstrap"
import ModalDialog from "react-bootstrap/esm/ModalDialog"
// import AuthLP from "../pages/AuthLP"
import {GlobalCtx} from "../App"
import Updateform from "../pages/updateform"

// const {gState, setGState} = React.useContext(GlobalCtx)
//     const {url, token} = gState;
//     const [movies, setMovies] = React.useState(null)
//     const [updateID, setUpdateID] = React.useState(null)


//         const getMovies = async () => {
//             const response = await fetch (url + "/movie/", {
//             method: "get",
//             headers: {
//                 Authorization: `bearer ` + token
//             }
//         })
//         const json = await response.json()
//         setMovies(json)
//     }
// React.useEffect(()=> {
//     getMovies()}, [])

//     const titleinput = React.useRef(null)
//     const yearreleasedinput = React.useRef(null)
//     const ratedinput = React.useRef(null)
//     const genreinput = React.useRef(null)
//     const directorinput = React.useRef(null)
//     const overallratinginput = React.useRef(null)
//     const posterinput = React.useRef(null)
//     const userreviewinput = React.useRef(null)

//     const titleupdate = React.useRef(null)
//     const yearreleasedupdate = React.useRef(null)
//     const ratedupdate = React.useRef(null)
//     const genreupdate = React.useRef(null)
//     const directorupdate = React.useRef(null)
//     const overallratingupdate = React.useRef(null)
//     const posterupdate = React.useRef(null)
//     const userreviewupdate = React.useRef(null)

//     const handleClick = (event) => {
//         const title = titleinput.current.value
//         const yearreleased = yearreleasedinput.current.value
//         const rated = ratedinput.current.value
//         const genre = genreinput.current.value
//         const director = directorinput.current.value
//         const overallrating = overallratinginput.current.value
//         const poster = posterinput.current.value
//         const userreview = userreviewinput.current.value 

//         // console.log(movie)

//         fetch(url + "/movie/", {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json", 
//                 Authorization: `bearer ` + token
//             },
//             body: JSON.stringify({title, yearreleased, rated, genre, director, overallrating, poster, userreview})

//         })
//         .then(response =>response.json())
//         .then(data=>{
//             titleinput.current.value = ""
//             yearreleasedinput.current.value = ""
//             ratedinput.current.value = ""
//             genreinput.current.value = ""
//             directorinput.current.value = ""
//             overallratinginput.current.value = ""
//             posterinput.current.value = ""
//             userreviewinput.current.value = ""

//             getMovies()
//         })

//     }

//     const handleUpdate =  () => {
//         const title = titleupdate.current.value
//         const yearreleased = yearreleasedupdate.current.value
//         const rated = ratedupdate.current.value
//         const genre = genreupdate.current.value
//         const director = directorupdate.current.value
//         const overallrating = overallratingupdate.current.value
//         const poster = posterupdate.current.value
//         const userreview = userreviewupdate.current.value

//     fetch(url + "/movie/" + updateID, {
//         method: "put",
//         headers: {
//             "Content-Type": "application/json", 
//             Authorization: `bearer ` + token
//         },
//         body: JSON.stringify({title, yearreleased, rated, genre, director, overallrating, poster, userreview})
//     })
//     .then(response =>response.json())
//     .then(data=>{
//         titleupdate.current.value = ""
//         yearreleasedupdate.current.value = ""
//         ratedupdate.current.value = ""
//         genreupdate.current.value = ""
//         directorupdate.current.value = ""
//         overallratingupdate.current.value = ""
//         posterupdate.current.value = ""
//         userreviewupdate.current.value = ""
//         setUpdateID(null)
//         getMovies()
//     })

//     }

function UpdateModal() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="Modal-page">
        <Button className="Modal-btn" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h1>UPDATE MOVIE </h1>
                </Modal.Title>
          </Modal.Header>


          <Modal.Body>
                <Updateform />
        </Modal.Body>




          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
//   render( <UpdateModal />)

  export default UpdateModal