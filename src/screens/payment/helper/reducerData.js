export const ACTIONS = {
  DELIVERYTEXT: "deliveryText",
  COUPONTEXT: "couponText",
  ISLOADING: "isLoading",
  SHOWCOUPON: "showcoupon",
  SHOWDELIVERY: "showdelivery",
  SETCARDINFO: "setcardinfo",
  BTNISLOADING: "btnisloading",
};

export const initialState = {
  isLoading: true,
  cardInfo: "",
  showDelivery: false,
  deliveryText: "",
  showCoupon: false,
  couponText: "",
  btnisloading: false,
};
