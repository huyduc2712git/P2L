import Colors from "@constants/Colors";

interface Item {
  imageUrl: string;
  title: string;
}

interface ISection {
  title: string;
  item: Item[];
}

export interface SectionData {
  avatar: string;
  name: string;
  phone: string | number;
  sectionList: ISection[];
}

const dataSection: SectionData = {
  avatar: "https://i.ibb.co/PC4pWSn/avatar.png",
  name: "Nguyễn M Poul",
  phone: "0349751001",
  sectionList: [
    {
      title: "Cài đặt",
      item: [
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Quản lý tài khoản/thẻ",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Cài đặt tài khoản",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Đăng nhập và bảo mật",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Cài đặt thông báo",
        },
      ],
    },
    {
      title: "Tiện ích",
      item: [
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Điểm tin cậy ATHome",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Quản lý đặt chỗ",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Thanh toán hóa đơn",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Quản lý chi tiêu",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Quản lý thẻ thành viên",
        },
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Quản lý hợp đồng bảo hiểm",
        },
      ],
    },
    {
      title: "Ưu đãi và tích điểm",
      item: [
        {
          imageUrl: "https://i.ibb.co/GxsRCwD/notification.png",
          title: "Thẻ quà tặng",
        },
      ],
    },
  ],
};

export default dataSection;
