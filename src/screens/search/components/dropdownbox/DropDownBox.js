import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { ACTIONS } from "../../helper/reducerActions";
import { useAuthContext } from "../../../../context/UserAuthContextWarpper";

const DropDownBox = ({
  text,
  state,
  dispatch,
  modelOptionsKey,
  dropDownBoxKey,
  getOptionsFunc,
  nextDropDownkey,
}) => {
  const value = state[dropDownBoxKey].selectedValue;
  const isDisabled = state[dropDownBoxKey].isDisabled;
  const disableAllDropdown = state.disableAllDropdown;
  const { accessToken, setAuthData } = useAuthContext();
  return (
    <TouchableOpacity
      disabled={isDisabled ? true : disableAllDropdown ? true : false}
      onPress={() => {
        dispatch({
          type: ACTIONS.SHOW_MODEL,
          payload: {
            modelShow: true,
            modelTitle: text,
            modelOptionsKey: modelOptionsKey,
            modelSelectedDropDownKey: dropDownBoxKey,
            modelNextDropDownKey: nextDropDownkey,
          },
        });
        getOptionsFunc(state, dispatch, accessToken, setAuthData);
      }}
    >
      <View
        style={[
          styles.container,
          isDisabled
            ? { backgroundColor: "#EBEBEB" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.searchiconandtext}>
          <AntDesign name="search1" size={20} color="black" />
          <Text style={value !== "" ? styles.textbold : styles.text}>
            {value !== "" ? value : text}
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default DropDownBox;
