// master reduce
  
const mapFun = <T>(array: T[], callback: (item: T, index: number, array: T[]) => T): T[] => {
    const initialArray: T[] = [];
    return array.reduce((accumulator, currentItem, index, array) => {
      accumulator.push(callback(currentItem, index, array));
      return accumulator;
    }, initialArray);
  }
  
  const filterFun = <T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean): T[] => {
    const initialArray: T[] = [];
    return array.reduce((filteredArray, currentItem, index, array) => {
      const filteredItem = callback(currentItem, index, array);
      if (filteredItem) {
        filteredArray.push(currentItem);
      }
      return filteredArray;
    }, initialArray);
  }
  
  const everyFun = <T>(array: T[], callback: (item: T) => boolean): boolean => {
    // how to break reduce
    return array.reduce((accumulator, currentItem, index, array) => {
      if (accumulator === false) {
        array.splice(index);
      }
      return accumulator && callback(currentItem);
    }, true);
  }
  
  const someFun = <T>(array: T[], callback: (item: T) => boolean): boolean => {
    return array.reduce((accumulator, currentItem, index, array) => {
      if (accumulator === false) {
        array.splice(index);
      }
      return accumulator || callback(currentItem);
    }, false);
  }
  
  