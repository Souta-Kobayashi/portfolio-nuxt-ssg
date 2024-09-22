export const useColor = () => {
  return  useState<string>('color', () => 'pink')
  // return {
  //   color
  // }
}