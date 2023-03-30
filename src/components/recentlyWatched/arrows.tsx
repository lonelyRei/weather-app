import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                color: 'black',
                fontSize: '15px',
                lineHeight: '1.5715',
                right: '15px',
                zIndex: '2',
            }}
            onClick={onClick}
        >
            <RightOutlined />
        </div>
    )
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                ...style,
                color: 'black',
                fontSize: '15px',
                lineHeight: '1.5715',
                left: '15px',
                zIndex: '2',
            }}
            onClick={onClick}
        >
            <LeftOutlined />
        </div>
    )
}

export const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
}
