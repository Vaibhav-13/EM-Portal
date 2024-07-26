import "../Stylesheets/Component.css";

function Add() {
  const openPopup = () => {
    // Open the popup window
    window.open(
      'http://localhost:3000/popup-form',
      'popupForm',
      'width=500,height=300'
    );
  };

  return (
    <>
      <button id="button" onClick={openPopup}> 
        Add Data
      </button>
    </>
  );
}

export default Add;
