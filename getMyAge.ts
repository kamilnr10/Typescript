const getMyAge = (input: Date | number | string): number => {
    const currentYear: number = new Date().getFullYear()
    const year: number = new Date(input.toString()).getFullYear()
    return currentYear - year
  }