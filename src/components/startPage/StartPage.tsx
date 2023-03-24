import { FC } from 'react'
import { Header } from '../header/Header'
import { CurrentWeather } from '../currentWeather/CurrentWeather'

export const StartPage: FC = () => {
    return (
        <>
            <Header />
            <CurrentWeather />
        </>
    )
}
