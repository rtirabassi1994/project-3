import React from 'react';
import CreateModal from "./createmodal";
import toggleModal from './togglemodal';
import "./index.css";

const CreateButton = () => {
  const {isShowing, toggle} = toggleModal();
  return (
    <div className="create-pop">
      <button className="button-create" onClick={toggle}>Create Account</button>
      <CreateModal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default CreateButton;