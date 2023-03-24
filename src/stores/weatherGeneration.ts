import { create } from 'zustand'
import { ICurrentWeatherResponse } from '../API/types'

interface ICurrentWeather {
    isLoading: boolean
    isError: boolean
    data: undefined | ICurrentWeatherResponse
    setIsLoading: () => void
    setIsError: () => void
    setData: (data: ICurrentWeatherResponse) => void
}

export const useCurrentWeatherStore = create<ICurrentWeather>((set, get) => ({
    isLoading: false,
    isError: false,
    data: undefined,
    setIsLoading: () => {
        return set((state) => ({
            isLoading: true,
            isError: false,
        }))
    },
    setIsError: () => {
        return set((state) => ({
            isError: true,
            isLoading: false,
        }))
    },
    setData: (data: ICurrentWeatherResponse) => {
        return set({
            isLoading: false,
            isError: false,
            data: data,
        })
    },
}))
