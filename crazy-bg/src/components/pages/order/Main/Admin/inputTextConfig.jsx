import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
  },
];
