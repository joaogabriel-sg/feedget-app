import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../theme";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />

          <Trash
            size={22}
            weight="fill"
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} weight="bold" color={theme.colors.text_secondary} />
      )}
    </TouchableOpacity>
  );
}
