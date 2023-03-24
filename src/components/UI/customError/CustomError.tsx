import { FC, ReactNode, useState } from 'react'
import './customError.css'

// todo: Сделать отключение скрола
export const CustomError: FC<ICustomError> = ({ errorText, children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    return (
        <div className="custom-error" style={{ display: isVisible ? 'flex' : 'none' }}>
            <div className="custom-error__outer">
                <span onClick={() => setIsVisible(false)} className="custom-error__close">
                    X
                </span>
                <span className="custom-error__title">Произошла ошибка!</span>
                <p className="custom-error__text" style={{ marginBottom: children ? '40px' : '' }}>
                    {errorText}
                </p>
                <div className="custom-error__children">{children}</div>
            </div>
        </div>
    )
}

interface ICustomError {
    errorText: string
    children?: ReactNode
}
