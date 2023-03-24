import { FC } from 'react'
import './cityNotExists.css'
import { CityInput } from '../../cityInput/CityInput'

export const CityNotExists: FC = () => {
    return (
        <div className="city-not-exists">
            <span className="city-not-exists__text">Введите название города...</span>
            <CityInput />
        </div>
    )
}
