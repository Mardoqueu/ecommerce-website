import apiUrl from "./config"

export const getProduct = async (id) => {
    try {
        const response = await axios({
            url: `${apiUrl  }/api/products/${  id}`
        })
    } catch (err) {

    }
}