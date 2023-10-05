import { useUserInfoContext } from "../context/UserInfoContextWarpper";

const useModifyUserInfoState = () => {
  const { userInfo, setUserInfo } = useUserInfoContext();
  //  {"cartId": 9, "productId": 1239, "quantity": 1}

  const setUserInfoState = (userInfo) => {
    setUserInfo(userInfo);
  };

  const setItemInCartState = (items) => {
    setUserInfo((prev) => ({
      ...prev,
      cart: items,
    }));
  };

  const addItemInCartState = (id, productId, quantity) => {
    setUserInfo((prev) => ({
      ...prev,
      cart: [
        ...prev.cart,
        { id: id, productId: productId, quantity: quantity },
      ],
    }));
  };

  const updateItemInCartState = (id, quantity) => {
    setUserInfo((prev) => ({
      ...prev,
      cart: prev.cart.map((item) => {
        return item.id === id ? { ...item, quantity: quantity } : item;
      }),
    }));
  };

  const deleteItemInCartState = (id) => {
    setUserInfo((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== id),
    }));
  };

  return {
    userInfo,
    setUserInfo,
    setUserInfoState,
    addItemInCartState,
    updateItemInCartState,
    deleteItemInCartState,
    setItemInCartState,
  };
};
export default useModifyUserInfoState;
