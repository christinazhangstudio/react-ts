// demoing ts interfaces (not inherently related to sessionStorage)

//https://google.github.io/styleguide/tsguide.html#prefer-interfaces
export interface Preferences {
  lang: string;
  // also see note on useState in changeLanguage.tsx
}

export function setSessionStItem<Preferences>(
  key: string,
  value: Preferences
): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStItem<Preferences>(key: string): Preferences | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as Preferences) : null;
}
