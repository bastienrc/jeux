export function removeItem (itemToRemove) {
  window.localStorage.removeItem(itemToRemove)
}

export function getItem (item) {
  return window.localStorage.getItem(item)
}

export function addItem (localeStorageName, newItem) {
  window.localStorage.setItem(localeStorageName, newItem)
}
