import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { ACTIONS } from "../../helper/reducerActions";
import { ActivityIndicator } from "react-native";
const SearchBox = ({
  text,
  state,
  dispatch,
  dataKeyName,
  dropDownBoxKeyName,
  func,
}) => {
  const value = state[dropDownBoxKeyName].selectedValue;
  const isDisabled = state[dropDownBoxKeyName].isDisabled;
  const isLoading = state[dropDownBoxKeyName].isLoading;
  const disableAllDropdown = state.disableAllDropdown;
  const options = [
    { id: 0, [dataKeyName]: text },
    ...state[dropDownBoxKeyName].options,
  ];

  return (
    <TouchableOpacity
      disabled={isDisabled ? true : disableAllDropdown ? true : false}
      onPress={() => {
        dispatch({
          type: ACTIONS.CLOSE_ALL,
        });
        dispatch({
          type: ACTIONS.SHOW_OPTIONS,
          payload: {
            dropDownBox: dropDownBoxKeyName,
            show: !state[dropDownBoxKeyName].show,
          },
        });
      }}
    >
      <View
        style={[
          styles.container,
          isDisabled
            ? { backgroundColor: "#B3B3B3" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.searchiconandtext}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <AntDesign name="search1" size={20} color="black" />
          )}

          <Text style={styles.text}>{value !== "" ? value : text}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>

      {state[dropDownBoxKeyName].show
        ? options?.map((data) => {
            return (
              <TouchableOpacity
                key={data.id}
                style={styles.optionscontainer}
                onPress={() => func(data.id, data[dataKeyName], dispatch)}
              >
                <Octicons name="dot-fill" size={24} color="#F47A00" />
                <Text style={styles.optiontext}>{data[dataKeyName]}</Text>
              </TouchableOpacity>
            );
          })
        : null}
    </TouchableOpacity>
  );
};

export default SearchBox;
