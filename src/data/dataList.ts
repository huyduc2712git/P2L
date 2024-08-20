import { Images } from "@assets/images";
import { Source } from "react-native-fast-image";

export interface IDataList {
  id: number;
  images: Source[];
  title: string;
  description: string;
  price: string;
  salePrice: string;
}

const dataList: IDataList[] = [
  {
    id: 1,
    images: [Images.bg_shoes, Images.bg_login_corgi, Images.ic_heart_focus],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    salePrice: "7,999,000 - 8,999,000",
    price: "6,999,000"
  },
  {
    id: 2,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    salePrice: "7,999,000 - 8,999,000",
    price: "6,999,000"
  },
  {
    id: 3,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    salePrice: "7,999,000 - 8,999,000",
    price: "6,999,000"
  },
  {
    id: 4,
    images: [Images.bg_shoes, Images.bg_shoes, Images.bg_shoes],
    title: "Louis Vuitton x Nike Air Force 1",
    description:
      "Louis Vuitton x Nike Air Force 1 is the final design of designer Virgil Abloh - Artistic Director of Louis Vuitton's men's fashion brand.",
    salePrice: "7,999,000 - 8,999,000",
    price: "6,999,000"
  }
];

export default dataList;
