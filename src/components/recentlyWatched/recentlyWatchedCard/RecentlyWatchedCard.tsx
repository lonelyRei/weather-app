import { FC } from 'react'
import useAppStore, { appMetrics, IRecentlyWatched } from '../../../stores/appStore'
import { useFetchingCurrentWeather, useFetchingFiveDaysWeather } from '../../../hooks/weatherFetching'
import './recentlyWatchedCard.css'
import { getCelsius } from '../../../common/common'

// Подсказка при наведении
const hoverTitle = 'Загрузить детальную погоду о населенном пункте'

export const RecentlyWatchedCard: FC<IRecentlyWatchedCardProps> = ({ data }) => {
    const fetchCurrentWeather = useFetchingCurrentWeather()
    const fetchFiveDaysWeather = useFetchingFiveDaysWeather()

    const { metrics } = useAppStore((state) => state)

    const date = new Date(data.dt * 1000)

    const handleCLick = () => {
        fetchCurrentWeather.mutate(data.name)
        fetchFiveDaysWeather.mutate(data.name)
    }

    return (
        <div onClick={handleCLick} className="recently-card" title={hoverTitle}>
            <span className="recently-card__date">
                {date.toLocaleDateString('ru', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </span>
            <span className="recently-card__time">
                {date.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })}
            </span>
            <i className={'owf-5x owf owf-' + data.id}></i>
            <span className="recently-card__name recently-card__text">{data.name}</span>
            <span className="recently-card__description recently-card__text">{data.description}</span>
            <span className="recently-card__degrees recently-card__text">
                {metrics === appMetrics.fahrenheit ? data.degrees + ' °F' : getCelsius(data.degrees) + ' °C'}
            </span>
        </div>
    )
}

interface IRecentlyWatchedCardProps {
    data: IRecentlyWatched
}
