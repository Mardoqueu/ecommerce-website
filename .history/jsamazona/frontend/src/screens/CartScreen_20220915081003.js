import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render:() => {},
    render: () => {
    const request = parseRequestUrl();
    if(request.id){
        const product = getProduct(request.id);
    }
    return '<div>Cart screen</div>';}
};

export default CartScreen;