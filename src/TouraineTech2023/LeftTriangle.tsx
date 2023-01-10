import {Easing, interpolate, useCurrentFrame, useVideoConfig} from "remotion";

export const LeftTriangle = () => {
    const { height, width, durationInFrames} = useVideoConfig();
    const frame = useCurrentFrame();

    const top = interpolate(frame, [0, durationInFrames], [300, 100], {extrapolateRight: 'clamp'})

    return <div style={{
        position: 'absolute',
        top,
        height: 3*height,
        width: 2*width,
        backgroundColor: '#6abfad',
        transform: `translateX(-${2*height}px) rotate(-150deg)`
    }}/>
}