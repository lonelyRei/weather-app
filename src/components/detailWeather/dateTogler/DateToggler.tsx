import { FC } from 'react'
import { DateIntervals, TimeToSortEnum } from '../DetailWeather'
import './dateToggler.css'
import { Radio } from 'antd'

export const DateToggler: FC<IDateTogglerProps> = ({ currentInterval, switchInterval, timeToSort, setTimeToSort }) => {
    return (
        <div className="date-toggler">
            <div className="container">
                <div className="date-toggler__outer">
                    <div className="date-toggler__item date-toggler__interval">
                        <span
                            className={'date-toggler__btn' + (currentInterval === DateIntervals.today ? ' active' : '')}
                            onClick={() => switchInterval(DateIntervals.today)}
                        >
                            Сегодня
                        </span>
                        <span
                            className={
                                'date-toggler__btn' + (currentInterval === DateIntervals.five_days ? ' active' : '')
                            }
                            onClick={() => switchInterval(DateIntervals.five_days)}
                        >
                            5 Дней
                        </span>
                    </div>
                    {currentInterval === DateIntervals.five_days && (
                        <div className="date-toggler__item">
                            <Radio.Group
                                name="radiogroup"
                                defaultValue={timeToSort}
                                onChange={(e) => setTimeToSort(e.target.value)}
                            >
                                <Radio value={TimeToSortEnum.twelve}>{TimeToSortEnum.twelve}</Radio>
                                <Radio value={TimeToSortEnum.fifteen}>{TimeToSortEnum.fifteen}</Radio>
                                <Radio value={TimeToSortEnum.eighteen}>{TimeToSortEnum.eighteen}</Radio>
                                <Radio value={TimeToSortEnum.twenty_one}>{TimeToSortEnum.twenty_one}</Radio>
                                <Radio value={TimeToSortEnum.zero}>{TimeToSortEnum.zero}</Radio>
                            </Radio.Group>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

interface IDateTogglerProps {
    switchInterval: (interval: DateIntervals) => void
    currentInterval: DateIntervals
    timeToSort: TimeToSortEnum
    setTimeToSort: (value: TimeToSortEnum) => void
}
