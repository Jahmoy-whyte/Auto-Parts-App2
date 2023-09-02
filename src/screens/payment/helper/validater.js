const validater = (userInfo, state) => {
  let bool = false;
  let message = "";
  if (userInfo?.userStatus != "user") {
    bool = true;
    message = "Please Sign Up";
  } else if (userInfo.firstName == "") {
    bool = true;
    message = "Please Enter Name";
  } else if (userInfo.lastName == "") {
    bool = true;
    message = "Please Enter Name";
  } else if (userInfo.phone == "") {
    bool = true;
    message = "Please Enter Phone Number";
  } else if (userInfo.address == "" || !userInfo.address) {
    bool = true;
    message = "Please Enter address";
  } else if (state.cardInfo == "") {
    bool = true;
    message = "Please Enter Payment method";
  } else if (state.showDelivery && state.deliveryText == "") {
    bool = true;
    message = "Please Enter Delivery  Instructions";
  } else if (state.showCoupon) {
    bool = true;
    message = "Invalid Coupon";
  }
  return { bool, message };
};

export default validater;
