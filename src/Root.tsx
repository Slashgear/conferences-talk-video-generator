import {Composition} from 'remotion';
import {TouraineTech2023} from "./TouraineTech2023/TouraineTech2023";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="TouraineTech2023"
				component={TouraineTech2023}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					title: 'Remotion : le 7ème art à porté de composants web et d\'API 🎬'
				}}
			/>
		</>
	);
};
