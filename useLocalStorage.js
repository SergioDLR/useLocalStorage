export const useLocalStorage = () => {
  const getItem = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
      return item
    } else {
      return null
    }
  }

  const setItem = (key, value) => {
    try {
      localStorage.setItem(key, value)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }
  return { getItem, setItem }
}

export default useLocalStorage
