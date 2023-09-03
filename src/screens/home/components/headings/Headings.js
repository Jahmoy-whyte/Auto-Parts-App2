import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
const Headings = ({ image, text, subText, func, showShowall }) => {
  console.log("had");
  return (
    <View style={styles.subHeadingContainer}>
      <View style={styles.subHeadingIconAndTextContainer}>
        <Image source={image} style={styles.subHeadingIcon} />
        <View style={styles.subHeadingTextContainer}>
          <Text style={styles.subHeadingTitle}>{text}</Text>
          <Text style={styles.subHeadingSubText}>{subText}</Text>
        </View>
      </View>
      {showShowall ? (
        <TouchableOpacity onPress={func}>
          <Text style={styles.showAllText}>ShowAll</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Headings;
