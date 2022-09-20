import { getUserInfo } from "../localStorage";

const Header = {
    render: () => {
    const {name} = getUserInfo();
    return `        
    <div class="brand">
        <a href="/#/">JS Store</a>
      </div>
      <div>
      ${name ? `<a href="/#/profile">${name}</a>`: 
      `<a href="/#/signin">Signin</a>`}
        
        <a href="/#/cart">Cart</a>
      </div>`;
    },
    after_render: () => {},
};
export default Header;
