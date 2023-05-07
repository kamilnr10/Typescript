const forEachFunc = <T>(array: T[], callback: (item: T, index: number, array: T[]) => void): void => {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };
  
  const mapFunc = <T>(array: T[], callback: (item: T, index: number, array: T[]) => T): T[] => {
    const mapArray: T[] = [];
  
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i], i, array);
      mapArray.push(result);
    }
  
    return mapArray;
  };
  
  
  const entriesFunc = <T>(array: T[]): [number, T][] => {
   
    const newArray: [number, T][] = [];
    for (let i = 0; i < array.length; i++) {
        const tuple: [number, T] = [i, array[i]];
        newArray.push(tuple);
      
    }
    return newArray;
  };
  
  
  const filterFunc = <T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean): T[] => {
    const filterArr: T[] = [];
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i], i, array);
      if (result) filterArr.push(array[i]);
    }
    return filterArr;
  };
  
  const reduceFunc = <T>(array:T[], callback: (accumulator: T,item: T, index: number, array: T[]) => T, initial?: T): T => {
    let accumulator: T[] | T = initial === undefined ? array[0] : initial;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  };
  
  const everyFunc = <T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean): boolean => {
    for (let i = 0; i < array.length; i += 1) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  };
  
  const someFunc = <T>(array:T[], callback: (item: T, index: number, array: T[]) => boolean): boolean => {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  };
  
  