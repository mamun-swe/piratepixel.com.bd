import Axios from 'axios'
import { WebAPI } from '../Api'

// Home 
const Home = async () => {
    return await Axios.get(`${WebAPI}home`)
}

// Category index
const Category = async () => {
    return await Axios.get(`${WebAPI}category`)
}

// Tag index
const Tags = async () => {
    return await Axios.get(`${WebAPI}tags`)
}

// Search
const Search = async (query) => {
    return await Axios.get(`${WebAPI}search-results?query=${query}`)
}

// Photos 
const Photos = async (page) => {
    return await Axios.get(`${WebAPI}photos?page=${page}`)
}

// Photo show
const PhotoShow = async (id) => {
    return await Axios.get(`${WebAPI}photos/${id}`)
}

// User show
const UserShow = async (id) => {
    return await Axios.get(`${WebAPI}user/${id}`)
}

// User show
const UserUploads = async (id) => {
    return await Axios.get(`${WebAPI}user/uploads/${id}`)
}

// Category show
const CategoryShow = async (id) => {
    return await Axios.get(`${WebAPI}category/${id}`)
}

export const Web = {
    Home,
    Category,
    Tags,
    Search,
    Photos,
    PhotoShow,
    UserShow,
    UserUploads,
    CategoryShow
}