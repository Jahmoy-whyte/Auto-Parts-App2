import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import {
  manipulateAsync,
  FlipType,
  ActionResize,
} from "expo-image-manipulator";
import box from "../../../../assets/images/box.png";

const Advert = ({ image, text, subtext }) => {
  /**
  const { height, width } = useWindowDimensions();
  const [w, w2] = useState();
  const uri =
    "https://firebasestorage.googleapis.com/v0/b/fir-learning-efa3c.appspot.com/o/Frame%2055%20(4).png?alt=media&token=351b82af-6724-48da-bca6-2b4fc7642702";
  useEffect(() => {
    const test = async () => {
      //  const manipResult = await manipulateAsync(image, ActionResize);
    };

    const _rotate90andFlip = async () => {
      const manipResult = await manipulateAsync(
        uri,
        [{ resize: { height: 190, width: width - 30 } }],
        { compress: 1 }
      );
      w2(manipResult);
    };

    _rotate90andFlip();
  }, []);
 */
  return (
    <View style={styles.imageContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Auto Parts</Text>
        <Text style={styles.subText}>
          The One Stop Shop For All Your Car Needs New offering delivery
        </Text>
        <Text style={styles.subTextcolor}> Read More </Text>
      </View>
      <Image source={box} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default Advert;
