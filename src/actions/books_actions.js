export const BUY_BOOK = 'BUY_BOOK';

export function buyBook(index) {
  return {
    type: BUY_BOOK,
    payload: index
  }
}