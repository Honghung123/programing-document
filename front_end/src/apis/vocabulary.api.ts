import { myAxios } from "./axios";
import { VocabularyType } from "@/types/vocabulary.type";

export const getAllVocabularies = async (page: number = 1, limit: number = 10, searchTerm: string = "") => {
    console.log(page + " " + limit) 
  const vocabss = [
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs,
    ...vocabs
  ];
  return vocabss.slice((page - 1) * limit, page * limit);
  // const res = await myAxios.get<VocabularyType[]>(`/vocabularies?page=${page}&limit=${limit}&searchTerm=${searchTerm}`);
  // return res.data;
};

export const getVocabularyById = async (id: string) => {
  const res = await myAxios.get(`/vocabularies/${id}`);
  return res.data;
};

const vocabs = [
  {
    id: "1",
    word: "Serendipity",
    pronunciation: "/ˌserənˈdipədē/",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way",
    examples: [
      {
        sentence: "A fortunate stroke of serendipity brought the two old friends together.",
        translation: "Un golpe afortunado de serendipia reunió a los dos viejos amigos."
      }
    ],
    partsOfSpeech: [
      {
        id: "pos1",
        name: "Noun",
        description: "A person, place, thing, or idea"
      }
    ],
    synonyms: [],
    antonyms: [],
    image: [],
    audio: null,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:45:00Z",
    favorite: true,
    tags: [{ id: "tag1", name: "Learning" }]
  },
  {
    id: "2",
    word: "Ephemeral",
    pronunciation: "/əˈfem(ə)rəl/",
    meaning: "Lasting for a very short time; transitory",
    examples: [
      {
        sentence: "The beauty of cherry blossoms is ephemeral, lasting only a few weeks.",
        translation: "La belleza de las flores de cerezo es efímera, dura solo unas pocas semanas."
      }
    ],
    partsOfSpeech: [
      {
        id: "pos2",
        name: "Adjective",
        description: "A word that describes a noun"
      }
    ],
    synonyms: [],
    antonyms: [],
    image: [],
    audio: null,
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-18T16:20:00Z",
    favorite: false,
    tags: [{ id: "tag2", name: "Mastered" }]
  },
  {
    id: "3",
    word: "Ubiquitous",
    pronunciation: "/yo͞oˈbikwədəs/",
    meaning: "Present, appearing, or found everywhere",
    examples: [
      {
        sentence: "Smartphones have become ubiquitous in modern society.",
        translation: "Los teléfonos inteligentes se han vuelto omnipresentes en la sociedad moderna."
      }
    ],
    partsOfSpeech: [
      {
        id: "pos3",
        name: "Adjective",
        description: "A word that describes a noun"
      }
    ],
    synonyms: [],
    antonyms: [],
    image: [],
    audio: null,
    createdAt: "2024-01-05T11:00:00Z",
    updatedAt: "2024-01-22T13:30:00Z",
    favorite: true,
    tags: [{ id: "tag3", name: "Review" }]
  },
  {
    id: "4",
    word: "Mellifluous",
    pronunciation: "/məˈliflo͞oəs/",
    meaning: "Sweet or musical; pleasant to hear",
    examples: [
      {
        sentence: "Her mellifluous voice captivated the entire audience.",
        translation: "Su voz meliflua cautivó a toda la audiencia."
      }
    ],
    partsOfSpeech: [
      {
        id: "pos4",
        name: "Adjective",
        description: "A word that describes a noun"
      }
    ],
    synonyms: [],
    antonyms: [],
    image: [],
    audio: null,
    createdAt: "2024-01-12T15:45:00Z",
    updatedAt: "2024-01-19T10:15:00Z",
    favorite: false,
    tags: [{ id: "tag1", name: "Learning" }]
  }
];
