import { FC } from 'react'
import { IFiveDaysListElement } from '../../../API/types'
import { DateIntervals } from '../DetailWeather'
import { getCelsius, getCorrectPressure } from '../../../common/common'
import useAppStore, { appMetrics } from '../../../stores/appStore'
import './detailWeatherCard.css'

export const DetailWeatherCard: FC<IDetailWeatherCardProps> = ({ data, interval, country }) => {
    const metrics = useAppStore((state) => state.metrics)
    if (interval === DateIntervals.today) {
        return (
            <div className="detail-card detail-card-today">
                <i className={'owf-5x owf owf-' + data.weather[0].id}></i>
                <div className="detail-card__row detail-card__row-date">
                    <span className="detail-card__row-element">{getRuDate(data.dt_txt)}</span>
                    <span className="detail-card__row-element">{getRuTime(data.dt_txt)}</span>
                </div>
                <div className="detail-card__row detail-card__row-temp">
                    <span className="detail-card__row-element">
                        {metrics === appMetrics.celsius ? getCelsius(data.main.temp) + '°C' : data.main.temp + '°F'}{' '}
                    </span>
                    <span className="detail-card__row-element">
                        (
                        {metrics === appMetrics.celsius
                            ? getCelsius(data.main.feels_like) + '°C'
                            : data.main.feels_like + '°F'}
                        )
                    </span>
                </div>
                <div className="detail-card__row detail-card__row-info">
                    <div className="detail-card__row-info-block">
                        <div className="detail-card__row-element">
                            <span className="detail-card__row-element-image" id="detail-card-wind"></span>
                            <span className="detail-card__row-element-text">{data.wind.speed} км/ч</span>
                        </div>
                        <div className="detail-card__row-element">
                            <span className="detail-card__row-element-image" id="detail-card-pressure"></span>
                            <span className="detail-card__row-element-text">
                                {getCorrectPressure(data.main.pressure)} мм. рт. ст.
                            </span>
                        </div>
                    </div>
                    <div className="detail-card__row-info-block">
                        <div className="detail-card__row-element">
                            <span className="detail-card__row-element-text detail-card__row-element-text-description">
                                {data.weather[0].description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="detail-card detail-card-five-days">
                <i className={'owf-5x owf owf-' + data.weather[0].id}></i>
                <div className="detail-card__row detail-card__row-date">
                    <span className="detail-card__row-element">{getRuDate(data.dt_txt)}</span>
                    <span className="detail-card__row-element">{getWeekdayByMilliseconds(country, data.dt)}</span>
                </div>
                <div className="detail-card__row detail-card__row-temp">
                    <span className="detail-card__row-element">
                        {metrics === appMetrics.celsius ? getCelsius(data.main.temp) + '°C' : data.main.temp + '°F'}{' '}
                    </span>
                    <span className="detail-card__row-element">
                        (
                        {metrics === appMetrics.celsius
                            ? getCelsius(data.main.feels_like) + '°C'
                            : data.main.feels_like + '°F'}
                        )
                    </span>
                </div>
            </div>
        )
    }
}

const getRuDate = (date: string) => {
    return date.split(' ')[0].split('-').slice(1, 3).reverse().join('.')
}

const getRuTime = (time: string) => {
    return time.split(' ')[1].split(':').slice(0, 2).join(':')
}

const getWeekdayByMilliseconds = (country: string, date: number) => {
    return new Date(date * 1000).toLocaleString(country, { weekday: 'long' })
}

interface IDetailWeatherCardProps {
    data: IFiveDaysListElement
    interval: DateIntervals
    country: string
}
