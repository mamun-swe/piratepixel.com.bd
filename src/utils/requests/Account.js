import Axios from 'axios'
import { UserAPI } from '../Api'

// Profile index
const Profile = async () => {
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }

    return await Axios.get(`${UserAPI}me`, header)
}

// Update profile 
const UpdateProfile = async (data) => {
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }

    return await Axios.put(`${UserAPI}me`, data, header)
}

// Update profile image
const UpdateProfileImage = async (data) => {
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }

    return await Axios.post(`${UserAPI}me/upload-profile-image`, data, header)
}

// My uploaded index
const MyMedia = async () => {
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }

    return await Axios.get(`${UserAPI}media`, header)
}

// Upload new media
const UploadMedia = async (data) => {
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    }

    return await Axios.post(`${UserAPI}media`, data, header)
}

export const Account = {
    Profile,
    UpdateProfile,
    UpdateProfileImage,
    MyMedia,
    UploadMedia
}