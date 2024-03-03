

// localStorage needs minimum:
// 1) set item: set data, ensure type safety
// 2) get data
// 3) remove data

// localStorage only supports strings
// if want to store objects/arrays, 
// need to convert with JSON.stringify()
// then parsed back with JSON.parse()

// simple typed wrappers for localStorage,
// unnecessary but adds a thin layer of type safety
function setItem<T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
}

function getItem<T>(key: string, value: T) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}