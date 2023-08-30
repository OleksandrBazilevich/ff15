export const reduceNumToTens = (num: number): string => {
  if (num > 99) return "99+";

  return String(num);
};
