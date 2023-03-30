import { FC } from 'react'
import { ICurrentWeatherResponse } from '../../../API/types'
import './currentWeatherDisplay.css'
import useAppStore, { appMetrics } from '../../../stores/appStore'
import { getCelsius, getCorrectPressure } from '../../../common/common'

// todo: Сделать темную тему
export const CurrentWeatherDisplay: FC<ICurrentWeatherDisplayProps> = ({ data }) => {
    const metrics = useAppStore((state) => state.metrics)
    const date = new Date(data.dt * 1000)
    return (
        <div className="current-display">
            <div className="current-display__column">
                <span className="current-display__title">{data.name}</span>
                <div className="current-display__date">
                    <span className="current-display__date-info">
                        {date.toLocaleString(data.sys.country, {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                        })}
                    </span>
                    <span className="current-display__date-info">
                        Обновлено: {date.toLocaleTimeString(data.sys.country)}
                    </span>
                </div>
                <div className="current-display__description">
                    <div className="current-display__description-row">
                        <div className="current-display__description-element">
                            <span className="current-display__description-image" id="current-display-wind"></span>
                            <span className="current-display__description-text">Ветер {data.wind.speed} км/ч</span>
                        </div>
                        <div className="current-display__description-element">
                            <span className="current-display__description-image" id="current-display-pressure"></span>
                            <span className="current-display__description-text">
                                Давление {getCorrectPressure(data.main.pressure)} мм. рт. ст.
                            </span>
                        </div>
                    </div>
                    <div className="current-display__description-row">
                        <div className="current-display__description-element">
                            <span className="current-display__description-image" id="current-display-sunrise"></span>
                            <span className="current-display__description-text">
                                Восход {new Date(data.sys.sunrise * 1000).toLocaleTimeString(data.sys.country)}
                            </span>
                        </div>
                        <div className="current-display__description-element">
                            <span className="current-display__description-image" id="current-display-sunset"></span>
                            <span className="current-display__description-text">
                                Закат {new Date(data.sys.sunset * 1000).toLocaleTimeString(data.sys.country)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="current-display__column">
                <div className="current-display__card">
                    <span className="current-display__card__today">
                        {date.toLocaleString(data.sys.country, {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                        })}
                    </span>
                    <i className={'owf-5x owf owf-' + data.weather[0].id}></i>
                    <div className="current-display__card__info">
                        <span className="current-display__card__text">
                            Температура:{' '}
                            {metrics === appMetrics.celsius
                                ? getCelsius(data.main.temp) + ' °C'
                                : data.main.temp + ' °F'}
                        </span>
                        <span className="current-display__card__text">
                            По ощущениям:{' '}
                            {metrics === appMetrics.celsius
                                ? getCelsius(data.main.feels_like) + ' °C'
                                : data.main.feels_like + ' °F'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ICurrentWeatherDisplayProps {
    data: ICurrentWeatherResponse
}
