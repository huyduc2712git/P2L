import { Images } from "@assets/images";

export interface ICategoryData {
  id: number;
  imageCategory: string | undefined;
  text: string;
  backgroundColor: string;
}

const dataCategory: ICategoryData[] = [
  {
    id: 1,
    imageCategory: require("../assets/animations/lottie_coffee.json"),
    text: "Coffee",
    backgroundColor: "#c1b19b"
  },
  {
    id: 2,
    imageCategory: "https://cdn-icons-png.flaticon.com/512/4598/4598444.png",
    text: "Drink",
    backgroundColor: "#967555"
  },
  {
    id: 3,
    imageCategory: "https://cdn-icons-png.flaticon.com/512/4598/4598444.png",
    text: "Puma",
    backgroundColor: "#542c04"
  },
  {
    id: 4,
    imageCategory: "https://cdn-icons-png.flaticon.com/512/4598/4598444.png",
    text: "Việt Nam",
    backgroundColor: "#542c04"
  }
];

export default dataCategory;
