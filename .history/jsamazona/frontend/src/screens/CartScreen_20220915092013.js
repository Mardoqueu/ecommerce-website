import { getProduct } from "../api";
import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render:() => {},
    render: async () => {
    const request = parseRequestUrl();
    if(request.id){
        const product = await getProduct(request.id);
        addToCart({
            // eslint-disable-next-line no-underscore-dangle
            product: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            contInStock: product.contInStock,
            qty: 1,            
        })
    }
    return '<div>Cart screen</div>';}
};

export default CartScreen;