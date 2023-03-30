import { FC, useState } from 'react'
import { IFiveDaysResponse } from '../../../API/types'
import './detailWeatherDisplay.css'
import { DateIntervals } from '../DetailWeather'
import { DetailWeatherCard } from '../detailWeatherCard/DetailWeatherCard'

export const DetailWeatherDisplay: FC<IDetailWeathersDisplayProps> = ({ data, interval }) => {
    const [slider, setSlider] = useState<ISlider>({ startPosition: 0, endPosition: 3 })

    const handleNextSlide = () => {
        if (slider.endPosition < data!.list.length) {
            setSlider({ startPosition: slider.startPosition + 1, endPosition: slider.endPosition + 1 })
        }
    }

    const handlePreviousSlide = () => {
        if (slider.startPosition > 0) {
            setSlider({ startPosition: slider.startPosition - 1, endPosition: slider.endPosition - 1 })
        }
    }

    return (
        <div className="detail-weather__display">
            <div className="container">
                <div className="detail-weather__display-outer">
                    <div className="detail-weather__display-slider">
                        <span className="date-toggler__slider-action" onClick={handlePreviousSlide}>
                            <svg className="arrow arrow-left" viewBox="0 0 100 85">
                                <polygon points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"></polygon>
                            </svg>
                        </span>
                        <span className="date-toggler__slider-action" onClick={handleNextSlide}>
                            <svg className="arrow arrow-right" viewBox="0 0 100 85">
                                <polygon points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"></polygon>
                            </svg>
                        </span>
                    </div>
                    <div className="detail-weather__display-list">
                        {data.list.slice(slider.startPosition, slider.endPosition).map((element) => {
                            return (
                                <DetailWeatherCard
                                    data={element}
                                    interval={interval}
                                    key={element.dt}
                                    country={data.city.country}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IDetailWeathersDisplayProps {
    data: IFiveDaysResponse
    interval: DateIntervals
}

interface ISlider {
    startPosition: number
    endPosition: number
}
