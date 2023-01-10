import {Img} from 'remotion'
import logo from './touraineTech.svg'
export const Logo = () => {
    return <Img src={logo} width={200} height="auto" style={{
        position: 'absolute',
        top: 10,
        right: 10,
    }} />
}