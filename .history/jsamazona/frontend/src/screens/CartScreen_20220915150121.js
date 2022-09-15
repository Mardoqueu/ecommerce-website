import { getProduct } from "../api";
// eslint-disable-next-line import/named
import { getCartItems, setCartItems } from '../localStorage';
import { parseRequestUrl } from "../utils";

// eslint-disable-next-line no-unused-vars
const addToCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find(x => x.product === item.product);
    if(existItem){
        cartItems = cartItems.map((x) => 
        x.product === existItem.product? item: x
        );
    } else {
        cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);
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
    return `
    <div class="cart">
        <div class="cart-list>
            <ul class="cart-list-conteiner">
                <li>
                    <h3>Shopping Cart</h3>
                    <div>Price</div>
                </li>
            </ul>
        </div>
    </div>`;

    },
};

export default CartScreen;