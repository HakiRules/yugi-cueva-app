import { useDeckStore } from "@/store/useDecksStore";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Button, Modal, Portal, Text } from "react-native-paper"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tables } from "@/types/database.types";

type DeckSelectorProps = {
  align: 'left' | 'right'
  selectedDeck?: string
  onChangeDeck: (deck: Tables<'deck'>) => void
}

export const DeckSelector = ({ align, onChangeDeck, selectedDeck }: DeckSelectorProps) => {
  const { decks } = useDeckStore()
  const [visible, setVisible] = useState(false);

  const toggleModal = () => setVisible(prev => !prev);

  const onDeckClick = (deck: Tables<'deck'>) => {
    onChangeDeck(deck)
    toggleModal()
  }
  return (
    <>
      <Portal>
        <Modal
          contentContainerStyle={{ backgroundColor: 'white', padding: 20, maxWidth: 200, alignSelf: align === 'left' ? 'flex-start' : 'flex-end' }}
          visible={visible}
          onDismiss={toggleModal}
        >
          <ScrollView>
            {decks.map(deck =>
              <TouchableOpacity key={`${align}-${deck.id}`} onPress={() => onDeckClick(deck)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>{deck.name}</Text>
                {selectedDeck === deck.id && <AntDesign name="check" size={12} color="black" />}
              </TouchableOpacity>
            )}
          </ScrollView>
        </Modal>
      </Portal>
      <Button onPress={toggleModal}>
        Show
      </Button>
    </>
  )
}