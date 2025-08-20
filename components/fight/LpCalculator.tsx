import { StyleSheet, View } from "react-native"
import { Button, Modal, Portal, Text } from "react-native-paper"

type LpCalculatorModalProps = {
  open: boolean,
  onClose: () => void
  currentLp: number
}

export const LpCalculatorModal = ({ open, onClose, currentLp }: LpCalculatorModalProps) => {

  return (
    <Portal>
      <Modal
        contentContainerStyle={{ backgroundColor: 'white', flex: 1 }}
        visible={open}
        onDismiss={onClose}
      >
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>{currentLp}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.fila}>
              {["1", "2", "3"].map((n) => (
                <Button key={n} onPress={() => { }} >{n}</Button>
              ))}
              <Button onPress={() => { }} >+</Button>
            </View>

            <View style={styles.fila}>
              {["4", "5", "6"].map((n) => (
                <Button key={n} onPress={() => { }} >{n}</Button>
              ))}
              <Button onPress={() => { }} >-</Button>
            </View>

            <View style={styles.fila}>
              {["7", "8", "9"].map((n) => (
                <Button key={n} onPress={() => { }} >{n}</Button>
              ))}
              <Button onPress={() => { }} >÷</Button>
            </View>

            <View style={styles.fila}>
              <Button onPress={() => { }} >0</Button>
              <Button onPress={() => { }} >=</Button>
              <Button onPress={() => { }} >C</Button>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  }
});