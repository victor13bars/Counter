 export type CacheType = {
    x: number
    y: number
}

// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}
// saveState<CacheType>("test", x: start, y: max);

// и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

