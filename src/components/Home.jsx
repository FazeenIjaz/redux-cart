import React from "react";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/beauty.jpg"
import img4 from "../assets/infinix.jpg"
import img5 from "../assets/perfume.jpg"
import img6 from "../assets/lenove-ideapad.jpg"
import img7 from "../assets/dell.jpg"
import img8 from "../assets/glasses.jpg"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// const img1 =
//   "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
// const img2 =
// "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0575%2F2982%2F7496%2Ffiles%2FAttitudist-Handcrafted-Oxford-Black-Formal-Laceup-Derby-Shoes-With-Textured-Upper-Material-For-Men-MTOBSF-1694597331468.jpg%3Fv%3D1694597332%26width%3D2000&tbnid=2Ay7Mp0TwRA-PM&vet=12ahUKEwiH-qjp_b-BAxWfUKQEHVU5A-EQMygzegUIARC-AQ..i&imgrefurl=https%3A%2F%2Fattitudist.com%2Fproducts%2Fblack-loafers-attitudist-shoes-for-men-sp8a&docid=gHO8kwr41wLgGM&w=2000&h=2000&itg=1&q=black%20shoes%20image%20%20shopify&ved=2ahUKEwiH-qjp_b-BAxWfUKQEHVU5A-EQMygzegUIARC-AQ"
const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "2",
    },
    {
      name: "Beauty Products",
      price: 1200,
      imgSrc: img3,
      id: "3",
    },
    {
      name: "infinix",
      price: 4900,
      imgSrc: img4,
      id: "4",
    },
    {
      name: "perfumes",
      price: 80,
      imgSrc: img5,
      id: "5",
    },
    {
      name: "Lenove Ideapad",
      price: 490,
      imgSrc: img6,
      id: "6",
    },
    {
      name: "Shoes",
      price: 120,
      imgSrc: img2,
      id: "7",
    },
    {
      name: "Sun Glasses",
      price: 490,
      imgSrc: img8,
      id: "8",
    },
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "9",
    },
    {
      name: "Dell",
      price: 490,
      imgSrc: img7,
      id: "10",
    },
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "11",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "12",
    },
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "13",
    },
   
  ];
const dispatch = useDispatch()
  const addToCartHandler = ( options ) => {
    dispatch({type:"addToCart", payload:options})
    toast.success ("Added To Cart");
  };
  return (
    <div className="home" id="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <dir className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </dir>
);

export default Home;
