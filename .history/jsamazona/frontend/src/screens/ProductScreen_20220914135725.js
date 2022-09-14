import { parseRequestUrl } from '../utils';
import { getProduct } from '../api';

const ProductScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    return `
      <div class="content">
        <div class="back-to-result">
      </div>
    `;
  },
};
export default ProductScreen;