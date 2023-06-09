import { FC } from 'react'
import { CityNotExists } from './cityNotExists/CityNotExists'
import './currentWeather.css'
import { useCurrentWeatherStore } from '../../stores/currentWeatherStore'
import { Spin } from 'antd'
import { CurrentWeatherDisplay } from './currentWeatherDisplay/CurrentWeatherDisplay'
import { CustomError } from '../UI/customError/CustomError'

const errorText: string = 'Не удалось получить данные о населенном пункте, попробуйте ввести данные снова.'
export const CurrentWeather: FC = () => {
    const isLoading = useCurrentWeatherStore((state) => state.isLoading)
    const isError = useCurrentWeatherStore((state) => state.isError)
    const data = useCurrentWeatherStore((state) => state.data)
    return (
        <div className="current-weather">
            <div className="container">
                <div className="current-weather__outer">
                    {isLoading ? (
                        <Spin size={'large'} />
                    ) : isError ? (
                        <>
                            <CustomError errorText={errorText} />
                            <CityNotExists />
                        </>
                    ) : data ? (
                        <CurrentWeatherDisplay data={data} />
                    ) : (
                        <CityNotExists />
                    )}
                </div>
            </div>
        </div>
    )
}
