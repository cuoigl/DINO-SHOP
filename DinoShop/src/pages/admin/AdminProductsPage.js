import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";

const fetchProducts = async (abctrl) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/products/admin",
    { withCredentials: true },
    {
      signal: abctrl.signal,
    }
  );
  return data;
};

const deleteProduct = async (productId) => {
  const { data } = await axios.delete(
    `http://localhost:3000/api/products/admin/${productId}`,
    { withCredentials: true }
  );
  return data;
};

const AdminProductsPage = () => {
  return (
    <ProductsPageComponent
      fetchProducts={fetchProducts}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsPage;
