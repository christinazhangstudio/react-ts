// demoing type wrappers (not inherently related to localStorage)

// localStorage needs minimum:
// 1) set item: set data, ensure type safety
// 2) get data
// 3) remove data

// localStorage only supports strings
// if want to store objects/arrays,
// need to convert with JSON.stringify()
// then parsed back with JSON.parse()

// simple typed wrappers for localStorage,
// just for demo for <Type>, as we might rather
// "avoid return type only generics"
// https://www.typescriptlang.org/docs/handbook/2/generics.html
export function setLocalStItem<Type>(key: string, value: Type): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStItem<Type>(key: string, value: Type): Type | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as Type) : null;
}
