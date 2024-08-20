export const formatCurrency = (amount: string | number): string => {
  // Chuyển đổi chuỗi thành số nếu cần
  const numericAmount = typeof amount === "string" ? Number(amount.replace(/,/g, "")) : amount;

  return "₫" + new Intl.NumberFormat("vi-VN").format(numericAmount);
};

export const formatSalePrice = (salePrice: string): string => {
  const [minPrice, maxPrice] = salePrice
    .split(" - ")
    .map((price) => new Intl.NumberFormat("vi-VN").format(Number(price.replace(/,/g, ""))));

  return `₫${minPrice} - ${maxPrice}`;
};
