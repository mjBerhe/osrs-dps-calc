import React from 'react';
import useHover from "../hooks/useHover";
import SlayerHelm from '../images/Misc/Slayer Helmet (i).png';

export const SlayerCheck = ({ userStats, setUserStats, userStats2, setUserStats2 }) => {

	const handleChange = () => {
		setUserStats((userStats) => ({
			...userStats,
			isSlayerTask: !userStats.isSlayerTask,
		}))
		setUserStats2((userStats2) => ({
			...userStats2,
			isSlayerTask: !userStats2.isSlayerTask,
		}))
	}

	const [ref, hovered] = useHover();

	return (
		<div className="slayer-check">
			<img src={SlayerHelm} alt="slayer helm" className="misc-img" ref={ref}/>
			<input type="checkbox" className="checkbox-class" onChange={handleChange}/>
			{hovered && 
				<div className="slayer-hover"><h5>Slayer Task</h5></div>}
		</div>
	)
}