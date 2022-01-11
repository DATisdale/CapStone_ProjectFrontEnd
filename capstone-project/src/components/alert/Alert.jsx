import React from 'react';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#App');

function Alert({ isOpen, setIsOpen, setIsPrompt, copyExercises }) {








    const handleYesClicked = () => {
        setIsOpen(false)
        setIsPrompt(false)
        localStorage.setItem('prompt', false)
        copyExercises();
    }
    const handleNoClicked = () => {
        setIsOpen(false)
        setIsPrompt(false)
        localStorage.setItem('prompt', false)

    }

    return (
        <div>

            <Modal
                isOpen={isOpen}

                onRequestClose={handleNoClicked}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div>Copy over last week's exercises and increase the weight by 5lbs?</div>
                <form>
                    <input />
                    <button onClick={handleYesClicked}>Yes</button>
                    <button onClick={handleNoClicked}>No</button>

                </form>
            </Modal>
        </div>
    );
}

export default Alert;