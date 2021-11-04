import Axios from 'axios'
import { WebAPI } from '../Api'

// Category index
const Category = async () => {
    return await Axios.get(`${WebAPI}category`)
}

// Tag index
const Tags = async () => {
    return await Axios.get(`${WebAPI}tags`)
}

export const Web = {
    Category,
    Tags
}