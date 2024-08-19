import { Images } from "@assets/images";
import { Source } from "react-native-fast-image";

export interface IDataList {
  id: number;
  images: any[];
  title: string;
  description: string;
  price: string;
}

const dataList: IDataList[] = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    ],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    price: "6,999,000"
  },
  {
    id: 2,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    price: "6,999,000"
  },
  {
    id: 3,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    price: "6,999,000"
  },
  {
    id: 4,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    price: "6,999,000"
  }
];

export default dataList;
