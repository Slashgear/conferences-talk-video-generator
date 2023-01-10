export const Title:React.FC<{title: string}> = ({ title }) => {
    return <span style={{
        fontFamily: 'Noto Sans,sans-serif',
        fontWeight: 700,
        fontSize: '32px',
        color: 'white',
        position: 'absolute',
        left: '50px',
        bottom: '100px'
    }}>
      {title}
    </span>
}