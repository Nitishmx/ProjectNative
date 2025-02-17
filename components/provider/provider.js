


  // get item
export const getData = async (key) => {
  console.log('key',key)
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      // value previously stored
      return value;
    }
  } catch(e) {
    // error reading value
  }
}