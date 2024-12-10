import { SafeAreaView, View } from "react-native";
import { Button, Card, Text } from "tamagui";

export default function Tab() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#382929"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button>ccsdc</Button>
      <Card bordered padded width={200}>
        <Text color={'$color12'}>dcdc</Text>
      </Card>
    </View>
  );
}
