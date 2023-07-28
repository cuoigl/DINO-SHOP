import axios from "axios";

export const uploadImagesApiRequest = async (images, productId) => {
  const formData = new FormData();
  Array.from(images).forEach((image) => {
    formData.append("images", image);
  });
  const { data } = await axios.post(
    "http://localhost:3000/api/products/admin/upload?productId=" + productId,
    formData,
    { withCredentials: true }
  );
  return data;
};

export const uploadImagesCloudinaryApiRequest = (images, productId) => {
  const url = "https://api.cloudinary.com/v1_1/dqqkpaowz/image/upload";
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    let file = images[i];
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        axios.post(
          "http://localhost:3000/api/products/admin/upload?cloudinary=true&productId=" +
            productId,
          data,
          { withCredentials: true }
        );
      });
  }
};
