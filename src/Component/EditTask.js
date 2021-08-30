import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { edittask } from "../Redux/Action/Action";

const EditTask = (todo) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch()
  const [editedtext, setEditedtext] = useState(todo.name)
  const edit = () => {
    dispatch(edittask(todo.id , editedtext))
    closeModal()
}
  return (
    <div>
      <button onClick={openModal}>Edit Task</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        
          <input onChange={(e)=>setEditedtext(e.target.value)} type="text" value={editedtext} />
          
          <button onClick={closeModal}>Cancel</button>
          <button onClick={edit}>Edit</button>
        
      </Modal>
    </div>
  );
};

export default EditTask;
