import { create } from 'zustand'
import { IFiveDaysResponse } from '../API/types'

interface IFiveDaysStore {
    isLoading: boolean
    isError: boolean
    data: undefined | IFiveDaysResponse
    setIsLoading: () => void
    setIsError: () => void
    setData: (data: IFiveDaysResponse) => void
}

const useFiveDaysWeatherStore = create<IFiveDaysStore>((set) => ({
    isLoading: false,
    isError: false,
    data: undefined,
    setIsLoading: () => {
        return set({
            isError: false,
            isLoading: true,
        })
    },
    setIsError: () => {
        return set({
            isLoading: false,
            isError: true,
        })
    },
    setData: (data: IFiveDaysResponse) => {
        return set({
            isError: false,
            isLoading: false,
            data: data,
        })
    },
}))

export default useFiveDaysWeatherStore
