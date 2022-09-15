import { getProduct } from "../api";
import { getCartItems } from "../localStorage";
import { parseRequestUrl } from "../utils";

const addToCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find(x => x.product === item.product);
    if(existItem){
        cartItems = cartItems.map((x) => x.product === existItem.product? item: x);
    }
};

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