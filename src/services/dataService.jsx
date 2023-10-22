import axios from 'axios'


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}


const headerConfig = {
    headers:{
    'x-access-token':localStorage.getItem('token')
    }
};
const token = getCookie('token');
if (token) {
    console.log('Token:', token);
} else {
    console.log('Token not found.');
}



export const getBooks = async() =>{
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    console.log(response)
    return response
    
}

export const addCartItem = async(data) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`,data,headerConfig)
    return response
}

export const getCartItems = async() => {
    let response = await axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',headerConfig)
    return response
}
