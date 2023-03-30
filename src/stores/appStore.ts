import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const getUniqueList = (options: IRecentlyWatched[]) => {
    return options.reduce(
        (res: IRecentlyWatched[], cur) => (res.find((find) => find.name === cur.name) ? res : [...res, cur]),
        []
    )
}

// Перечисление тем приложения
export enum appThemes {
    dark = 'dark',
    light = 'light',
}

// Перечисление метрик приложения
export enum appMetrics {
    celsius = 'celsius',

    fahrenheit = 'fahrenheit',
}

// Интерфейс погоды для недавно просмотренного населенного пункта
export interface IRecentlyWatched {
    // Название населенного пункта
    name: string

    // время в миллисекундах
    dt: number

    // Градусы
    degrees: number

    // Погодное описание
    description: string

    // id изображения
    id: number
}

interface IAppStore {
    theme: appThemes
    switchTheme: () => void
    metrics: appMetrics
    switchMetrics: () => void
    recentlyWatchedCities: IRecentlyWatched[]
    addRecentlyWatchedCity: (recentlyWatchedElement: IRecentlyWatched) => void
}

const useAppStore = create<IAppStore>()(
    persist(
        (set, get) => ({
            theme: appThemes.light,
            metrics: appMetrics.celsius,
            switchMetrics: () => {
                set({
                    ...get(),
                    metrics: get().metrics === appMetrics.celsius ? appMetrics.fahrenheit : appMetrics.celsius,
                })
            },
            switchTheme: () => {
                set({
                    ...get(),
                    theme: get().theme === appThemes.light ? appThemes.dark : appThemes.light,
                })
            },
            recentlyWatchedCities: [],
            addRecentlyWatchedCity: (recentlyWatchedElement: IRecentlyWatched) => {
                set({
                    ...get(),
                    recentlyWatchedCities: getUniqueList([recentlyWatchedElement, ...get().recentlyWatchedCities]),
                })
            },
        }),
        { name: 'appStore' }
    )
)

export default useAppStore
