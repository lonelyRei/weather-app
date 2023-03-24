import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { theme } from 'antd'

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

interface IAppStore {
    theme: appThemes
    switchTheme: () => void
    metrics: appMetrics
    switchMetrics: () => void
}

const useAppStore = create<IAppStore>()(
    persist(
        (set, get) => ({
            theme: appThemes.light,
            metrics: appMetrics.celsius,
            switchMetrics: () => {
                set({
                    metrics: get().metrics === appMetrics.celsius ? appMetrics.fahrenheit : appMetrics.celsius,
                })
            },
            switchTheme: () => {
                set({
                    theme: get().theme === appThemes.light ? appThemes.dark : appThemes.light,
                })
            },
        }),
        { name: 'appStore' }
    )
)

export default useAppStore
