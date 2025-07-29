export type TagType = {
  id: string; // UUID
  name: string; // Learning, Mastered, Review
};

export type ExpandVocabularyType = {
  favorite: boolean;
  tags: TagType[];
};

export type VocabularyType = {
  id: string; // UUID
  word: string;
  pronunciation: string;
  meaning: string;
  examples: ExampleType[];
  partsOfSpeech: PartsOfSpeechType[];
  synonyms: VocabularyType[]; // List of synonyms vocabularies
  antonyms: VocabularyType[]; // List of antonyms vocabularies
  image: string[]; // List of image urls
  audio: string | null; // Audio url
  createdAt: string; // ISO Date
  updatedAt: string; // ISO Date
} & ExpandVocabularyType;

export type ExampleType = {
  sentence: string;
  translation: string;
};

export type PartsOfSpeechType = {
  id: string; // UUID
  name: string; // Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Interjection
  description: string;
};
