import "../Stylesheets/Component.css";

function Add() {
  const openPopup = () => {
    // Open the popup window
    window.open(
      'http://localhost:3000/popup-form', //to load form
      'popupForm',
      'width=500,height=400' //hight and width
    );
  };

  return (
    <>
      <button id="button" onClick={openPopup}> {/*on user click open form window*/}
        Add Data
      </button>
    </>
  );
}

export default Add;
