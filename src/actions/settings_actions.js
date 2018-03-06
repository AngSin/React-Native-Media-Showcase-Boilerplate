export const SET_VISIBILITY = 'SET_VISIBILITY';
export const TOGGLE_ARABIC = 'TOGGLE_ARABIC'

export function setSettingsVisibility(visibility) {
  console.log("Action received: setting visibility to", visibility);
  return {
    type: SET_VISIBILITY,
    payload: visibility
  }
} 

export function toggleArabic() {
  console.log("Action received: toggling Arabic");
  return {
    type: TOGGLE_ARABIC
  }
}