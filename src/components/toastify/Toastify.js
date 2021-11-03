
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
    autoClose: 2000,
    transition: Slide,
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
})

// Success toast message
const Success = (message) => { return toast.success(message) };

// Info toast message
const Info = message => { return toast.info(message) };

// Warning toast message
const Warning = message => { return toast.error(message) };

// Error toast message
const Error = message => { return toast.error(message) };

export const Toastify = {
    Success,
    Info,
    Warning,
    Error
}