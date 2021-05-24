import axios from 'axios';

interface pizzaResponse {
    pizza: string;
}

export async function fetchPizza(): Promise<pizzaResponse> {
    return await axios.get('https://order-pizza-api.herokuapp.com/api/orders')
}