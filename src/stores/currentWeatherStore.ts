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

export const useCurrentWeatherStore = create<ICurrentWeather>((set) => ({
    isLoading: false,
    isError: false,
    data: undefined,
    setIsLoading: () => {
        return set(() => ({
            isLoading: true,
            isError: false,
        }))
    },
    setIsError: () => {
        return set(() => ({
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
