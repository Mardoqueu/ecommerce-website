import apiUrl from "./config"

export const getProduct = async (id) => {
    try {
        const response = wait axios({
            url: apiUrl + '/api/products/' + id
        })
    } catch (err) {

    }
}