export const BUY_VIDEO = 'BUY_VIDEO';

export function buyVideo(index) {
  return {
    type: BUY_VIDEO,
    payload: index
  }
}