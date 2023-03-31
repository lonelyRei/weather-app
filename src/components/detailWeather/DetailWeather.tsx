import { FC, useState } from 'react'
import useFiveDaysWeatherStore from '../../stores/fiveDaysWeatherStore'
import { Spin } from 'antd'
import { CityNotExists } from '../currentWeather/cityNotExists/CityNotExists'
import { DateToggler } from './dateTogler/DateToggler'
import './detailWeather.css'
import { DetailWeatherDisplay } from './detailWetherDisplay/DetailWeatherDisplay'
import { IFiveDaysResponse } from '../../API/types'

export enum DateIntervals {
    today = 'today',
    five_days = 'five_days',
}

export enum TimeToSortEnum {
    twelve = '12:00',
    fifteen = '15:00',
    eighteen = '18:00',
    twenty_one = '21:00',
    zero = '00:00',
}

// TODO: Доработать логику container
export const DetailWeather: FC = () => {
    const [dateInterval, setDateInterval] = useState<DateIntervals>(DateIntervals.today)
    const [timeToSort, setTimeToSort] = useState<TimeToSortEnum>(TimeToSortEnum.fifteen)

    const isLoading = useFiveDaysWeatherStore((state) => state.isLoading)
    const isError = useFiveDaysWeatherStore((state) => state.isError)
    const data = useFiveDaysWeatherStore((state) => state.data)

    return (
        <div className="detail-display">
            <div className="container">
                <h3 className="detail-display__title">Детальный обзор погоды</h3>
            </div>
            {isLoading ? (
                <Spin size={'large'} />
            ) : isError ? (
                <div className="container">
                    <span className="detail-display__error">Произошла ошибка загрузки данных погоды :(</span>
                </div>
            ) : data ? (
                <div className="detail-display-info">
                    <DateToggler
                        currentInterval={dateInterval}
                        switchInterval={setDateInterval}
                        timeToSort={timeToSort}
                        setTimeToSort={setTimeToSort}
                    />
                    <DetailWeatherDisplay
                        data={getDataWithInterval(data, dateInterval, timeToSort)}
                        interval={dateInterval}
                    />
                </div>
            ) : (
                <CityNotExists />
            )}
        </div>
    )
}

// Сортирует данные на: прогноз на пять дней или подробный прогноз на сегодня
const getDataWithInterval = (
    data: IFiveDaysResponse,
    interval: DateIntervals,
    time: string = '15:00'
): IFiveDaysResponse => {
    // Если выбран алгоритм показа сегодняшней даты
    if (interval === DateIntervals.today) {
        // Генерируем сегодняшную дату (обязательно в формате en!!!)
        const today = new Date()
            .toLocaleDateString('en', { day: '2-digit', month: '2-digit', year: 'numeric' })
            .split('/')

        const fixedDate = today[2] + '-' + today[0] + '-' + today[1]

        // Фильтруем массив данных
        return { city: data.city, list: data.list.filter((element) => element.dt_txt.includes(fixedDate)) }
    } else {
        // Иначе отдаем только данные на 15:00
        return { city: data.city, list: data.list.filter((element) => element.dt_txt.includes(time)) }
    }
}
