# React + Vite

My docs: https://programing-document.vercel.app/

---

NextJS, typescript, shadcn, lucide react.
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
Design and create a beautiful vocabulary page with a search bar in the center, and a list of vocabularies under the search bar. A filter button in the left top corner. A button to add new vocabulary in the right top corner.
Each vocabulary item in the list has word, pronunciation, meaning, list of parts of speech badges, updated at, a favorite button, a tag button, a delete button, and a edit button.

---
