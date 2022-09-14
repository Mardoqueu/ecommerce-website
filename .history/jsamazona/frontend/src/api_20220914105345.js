/* eslint-disable import/prefer-default-export */
import axios from "axios";
import apiUrl from "./config"

export const getProduct = async (id) => {
    try {
        const response = await axios({
            url: `${apiUrl  }/api/products/${  id}`,
            method: 'GET',
            headers: { 
                'Content-Type':'application/json',
            },
        });
    } catch (err) {

    }
}