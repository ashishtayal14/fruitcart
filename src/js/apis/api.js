import { API_URL } from '../constants/constants'

export const getData = () => (
    new Promise(function(resolve, reject) {
        fetch(API_URL+'/products')
        .then((response) => response.json())
        .then((res) => {
            const foodItems = res.foodItems;            
            setTimeout(() => resolve(foodItems), 500);
        })
        .catch((error) => {
            reject(error);
        });
    })
)

