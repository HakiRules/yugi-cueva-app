import { CardInDeck, CardPosition } from "@/types/Card";
import { Deck, Tierlist } from "@/types/Deck";
import { Match, MatchData, MatchType } from "@/types/Match";
import { Profile } from "@/types/Profile";

export const UserDecks: Deck[] = [
  {
    "id":"4331b756-24d5-45f7-8d40-e2cf838be474",
    "name":"Virtual World",
    "tierlist": Tierlist.META,
    "tier":2,
    "points":222,
    "owner":"56cf938e-3099-4dcf-a70c-e5de9258973d"
  },
  {
    "id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "name": "Magickey",
    "tierlist": Tierlist.META,
    "tier": -10,
    "points": 0,
    "owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
  }
]

export const CardsInDeck: CardInDeck[] = [
  {
    "card_id": 49966326,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 86483512,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 49088914,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 8736823,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 12571621,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 14558127,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 59438930,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 97268402,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 14886190,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 35261759,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 35726888,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 83764719,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 24224830,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 67723438,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 50275295,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 13364097,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 18249921,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 82732705,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.MAIN
  },
  {
    "card_id": 42632209,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 1686814,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 92519087,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 66698383,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 50954680,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 35252119,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 64880894,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 42566602,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 21521304,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 27069566,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 35103106,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 45935145,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 38495396,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 16259549,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 71166481,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.EXTRA
  },
  {
    "card_id": 18144507,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.SIDE
  },
  {
    "card_id": 54693926,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.SIDE
  },
  {
    "card_id": 8267140,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.SIDE
  },
  {
    "card_id": 43898403,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 2,
    "position": CardPosition.SIDE
  },
  {
    "card_id": 83326048,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 3,
    "position": CardPosition.SIDE
  },
  {
    "card_id": 58921041,
    "deck_id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "quantity": 1,
    "position": CardPosition.SIDE
  }
]


export const Matches: Match[] = [
	{
		"id": "9daf3cb9-2f9c-425b-8d86-a29fe66325a3",
		"date": "2025-01-12T18:27:34.953605+00:00",
		"type": MatchType["1VS1"],
		"side_deck": false
	},
	{
		"id": "4e3c237a-18cd-4c2d-bda8-e89d137b8005",
		"date": "2025-01-12T17:50:48.987247+00:00",
		"type": MatchType["1VS1"],
		"side_deck": false
	}
]

export const MatchesResult: MatchData[] = [
	{
		"match_id": "4e3c237a-18cd-4c2d-bda8-e89d137b8005",
		"deck": "07ce94c6-5162-4482-9a15-962c1342e8df",
		"player": "7a7c2836-56a7-437e-a12e-38b42c264bff",
		"score": 2,
		"winner": true,
		"deck_point_changes": "+7"
	},
	{
		"match_id": "4e3c237a-18cd-4c2d-bda8-e89d137b8005",
		"deck": "4331b756-24d5-45f7-8d40-e2cf838be474",
		"player": "56cf938e-3099-4dcf-a70c-e5de9258973d",
		"score": 0,
		"winner": false,
		"deck_point_changes": "-7"
	},
	{
		"match_id": "9daf3cb9-2f9c-425b-8d86-a29fe66325a3",
		"deck": "51d36c16-f842-4e41-b89c-0e3532a20584",
		"player": "7a7c2836-56a7-437e-a12e-38b42c264bff",
		"score": 0,
		"winner": false,
		"deck_point_changes": "-4"
	},
	{
		"match_id": "9daf3cb9-2f9c-425b-8d86-a29fe66325a3",
		"deck": "4331b756-24d5-45f7-8d40-e2cf838be474",
		"player": "56cf938e-3099-4dcf-a70c-e5de9258973d",
		"score": 2,
		"winner": true,
		"deck_point_changes": "+4"
	}
]

export const Decks: Deck[] = [
	{
		"id": "07ce94c6-5162-4482-9a15-962c1342e8df",
		"name": "Constellar",
		"tierlist": Tierlist.META,
		"tier": 1,
		"points": 282,
		"owner": "7a7c2836-56a7-437e-a12e-38b42c264bff"
	},
	{
		"id": "51d36c16-f842-4e41-b89c-0e3532a20584",
		"name": "Venemerita cyberponk",
		"tierlist": Tierlist.META,
		"tier": 4,
		"points": 121,
		"owner": "7a7c2836-56a7-437e-a12e-38b42c264bff"
	},
	{
		"id": "4331b756-24d5-45f7-8d40-e2cf838be474",
		"name": "Virtual World",
		"tierlist": Tierlist.META,
		"tier": 2,
		"points": 222,
		"owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
	}
]

export const Profiles: Profile[] = [
	{
		"id": "7a7c2836-56a7-437e-a12e-38b42c264bff",
		"username": "AdriGon55",
		"display_name": "Adripro",
		"master_duel_ref": null
	},
	{
		"id": "56cf938e-3099-4dcf-a70c-e5de9258973d",
		"username": "HakiRules",
		"display_name": "HakiRules",
		"master_duel_ref": "979-980-555"
	}
]