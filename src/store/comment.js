import { atom } from 'nanostores';

const initialValue = [];

export const comments = atom(initialValue);

export const addComment = (comment) => {
  comments.set((state) => [...state, comment]);
}

export const readComments = () => {
  return comments.get();
}
