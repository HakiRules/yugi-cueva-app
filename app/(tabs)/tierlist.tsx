import { TierListRow } from "@/components/tierlist/TierListRow";
import { useTierlist } from "@/hooks/useTierlist";
import { View } from "react-native";


export default function TierListScreen() {

  const { tierlist } = useTierlist()
  return (
    <View style={{ flexDirection: "column" }}>
      {Object.keys(tierlist).map(tier =>
        <TierListRow
          decks={tierlist[tier]}
          tier={tier}
          key={`tier-${tier}`}
        />
      )}
    </View>
  )
}
