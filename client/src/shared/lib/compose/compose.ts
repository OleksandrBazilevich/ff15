type ArityOneFn = (arg: any) => any;
export const compose =
  (...fns: ArityOneFn[]) =>
  (p: any) =>
    fns.reduceRight((acc: any, cur: any) => cur(acc), p);
