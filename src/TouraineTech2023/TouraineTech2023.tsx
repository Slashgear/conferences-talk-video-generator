import {
    AbsoluteFill,
} from 'remotion';
import { Logo } from './Logo'
import {LeftTriangle} from "./LeftTriangle";
import {RightTriangle} from "./RightTriangle";
import {Title} from "./Title";

export const TouraineTech2023: React.FC<{ title: string }> = ({ title}) => {

    return (
        <AbsoluteFill style={{backgroundColor: 'white'}}>
            <Logo />
            <RightTriangle/>
            <LeftTriangle/>
            <Title title={title}/>
        </AbsoluteFill>
    );
};
