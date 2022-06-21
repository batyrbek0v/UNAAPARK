import React from 'react'
import { handleLoginWithGoogle } from '../../firebase/firebase'

const FormButtons = ({ title, handleSubmit }) => {
    return (
        <div>
            <button onClick={() => {
                handleSubmit()
            }}>
                {title}
            </button>
        </div>
    )
}

export default FormButtons
