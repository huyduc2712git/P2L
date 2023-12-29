import { Images } from "@assets/images";
import { AnimationObject } from "lottie-react-native";

export interface IDataBusines {
  id?: number;
  field?: string;
}

export const dataBusiness: IDataBusines[] = [
  {
    field: "Trải nghiệm văn hóa",
    id: 1,
  },
  {
    field: "Khách sạn, nhà hàng",
    id: 2,
  },
  {
    id: 3,
    field: "Chăm sóc sức khỏe",
  },
  {
    id: 4,
    field: "Dịch vụ y tế",
  },
  {
    id: 5,
    field: "Dịch vụ tư vấn",
  },
  {
    id: 6,
    field: "Kinh doanh online",
  },
  {
    id: 7,
    field: "Vận tải, lữ hành",
  },
  {
    id: 8,
    field: "Dịch vụ tài chính",
  },
  {
    id: 9,
    field: "Lĩnh vực thông tin",
  },
];
