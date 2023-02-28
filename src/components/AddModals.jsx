
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function AddModals({
    show,
    handleClose,
    pName,
    transferList,
    setTransferList
  }) {
const [teamName, setTeamName] = useState("")

   const handleSubmit=(e)=>{
    e.preventDefault()
setTransferList([...transferList , {
    id:transferList.length+1,
    team:teamName,
    consulted:false,
    player:pName,
    
}])

    handleClose()
   }

   console.log(transferList)
  
  return (
    <>
     

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer for {pName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your team name"
                onChange={(e) => setTeamName(e.target.value.toLocaleUpperCase())}
              />
            </Form.Group>

         

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

