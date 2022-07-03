import React from "react";
import "./modal.css";

export default class Modal extends React.Component {

  state = {
    isOpen: false,
  };


  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          open modal
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h2>modal title</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <button
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
