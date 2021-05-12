import React from "react";
import './ModalWin.css';


const ModalWin = ({modalWinActive, refreshGame}) => {

    return (
        <div className={modalWinActive ? 'modal active' : "modal"}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    </div>
                    <div className="modal-body modal-win">
                        <p>YOU WIN!</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger win-button"
                            onClick={refreshGame}
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWin;