import {
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { ACTIONS } from "../../helper/reducerActions";
import styles from "./styles";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import GlobalStyles from "../../../../assets/styles/GlobalStyles";
import Loading from "../../../../components/loading/Loading";
import Toast from "react-native-toast-message";
import toastConfig from "../../../../helper/toastConfig";

const SearhModel = ({ state, dispatch }) => {
  const close = () =>
    dispatch({
      type: ACTIONS.SHOW_MODEL,
      payload: { modelShow: false, modelTitle: "", modelOptionsKey: "" },
    });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state.modelShow}
      onRequestClose={() => close()}
    >
      <SafeAreaView style={styles.model}>
        <View style={styles.modelview}>
          <View style={styles.modelheading}>
            <Text style={styles.modelheadingtext}>{state.modelTitle}</Text>
            <TouchableOpacity onPress={() => close()}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {state.modelIsLoading ? (
            <Loading />
          ) : (
            <View style={styles.container}>
              <FlatList
                data={state.modelOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.optionscontainer}
                      onPress={() => {
                        //modelOptionsSelectFunc takes in id , item name , disptach
                        dispatch({
                          type: ACTIONS.SELECTED_VALUE,
                          payload: {
                            selectedValue: item[state.modelOptionsKey],
                            selectedValueId: item.id,
                            dropDownBoxKey: state.modelSelectedDropDownKey,
                            nextDropDownKey: state.modelNextDropDownKey,
                          },
                        });
                      }}
                    >
                      <AntDesign name="search1" size={20} color="black" />
                      <Text style={styles.optiontext}>
                        {item[state.modelOptionsKey]}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
      <Toast config={toastConfig} />
    </Modal>
  );
};

export default SearhModel;
/*
   <View style={styles.searchmodelview}>
                <AntDesign name="search1" size={20} color="#B3B3B3" />
                <TextInput
                  style={styles.searchmodeltext}
                  placeholder="Search"
                />
              </View>

*/
