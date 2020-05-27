import React, { useEffect } from 'react';
import { calcHitChance } from '../formulas/accuracy';
import useHover from '../hooks/useHover';
import SpecImg from '../images/Misc/Special Attack.png'

export const SpecialAttack = ({ setSpecialAttack, setSpecialAttack2, equippedGear, equippedGear2, finalOutput, finalOutput2, userStats, userStats2 }) => {

	const handleChange = () => {
		setSpecialAttack(prevSpec => ({
			...prevSpec,
			table: !prevSpec.table,
		}))
	}

	useEffect(() => {
		if (equippedGear.weapon && finalOutput.maxHit && !userStats.isMagic) {
			// abyssal dagger
			if (equippedGear.weapon.id === 13265 || equippedGear.weapon.id === 13267 || equippedGear.weapon.id === 13269 || equippedGear.weapon.id === 13271) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*0.85)*2,
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// abyssal bludgeon
			} else if (equippedGear.weapon.id === 13263) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.495),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// abyssal whip
			} else if (equippedGear.weapon.id === 4151 || equippedGear.weapon.id === 4178 || equippedGear.weapon.id === 20405 || equippedGear.weapon.id === 12774 || equippedGear.weapon.id === 12773) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// armadyl godsword
			} else if (equippedGear.weapon.id === 11802 || equippedGear.weapon.id === 20593 || equippedGear.weapon.id === 22665 || equippedGear.weapon.id === 20368) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(Math.floor(finalOutput.maxHit*1.1)*1.25),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// bandos godsword
			} else if (equippedGear.weapon.id === 11804 || equippedGear.weapon.id === 20370) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(Math.floor(finalOutput.maxHit*1.1)*1.1),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// barrelchest anchor
			} else if (equippedGear.weapon.id === 10887) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// brine sabre
			} else if (equippedGear.weapon.id === 11037) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// dinh's bulwark
			} else if (equippedGear.weapon.id === 21015) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.2, finalOutput.maxDefRoll),
				}));
			// dragon claws
			// } else if (equippedGear.weapon.id === 13652 || equippedGear.weapon.id === 20784) {
			// 	setSpecialAttack(prevSpec => ({
			// 		...prevSpec,
			// 		maxHit: Math.floor((finalOutput.maxHit-1)),
			//      accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
			// 	}));
			// dragon dagger
			} else if (equippedGear.weapon.id === 1215 || equippedGear.weapon.id === 20407 || equippedGear.weapon.id === 1231 || equippedGear.weapon.id === 5680 || equippedGear.weapon.id === 5698) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.15)*2,
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.15, finalOutput.maxDefRoll),
				}));
			// dragon/crystal halberd
			} else if (equippedGear.weapon.id === 3204 || equippedGear.weapon.id === 23987 || equippedGear.weapon.id === 24125 || equippedGear.weapon.id === 13080) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1)*2,
					accuracy: calcHitChance(finalOutput.maxAttRoll*0.75, finalOutput.maxDefRoll),
				}));
			// dragon hasta
			} else if (equippedGear.weapon.id === 22731 || equippedGear.weapon.id === 22743 || equippedGear.weapon.id === 22734 || equippedGear.weapon.id === 22737 || equippedGear.weapon.id === 22740) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.5),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// dragon longsword
			} else if (equippedGear.weapon.id === 1305) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.15),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// dragon mace
			} else if (equippedGear.weapon.id === 1434) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.5),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// dragon scimitar
			} else if (equippedGear.weapon.id === 4587 || equippedGear.weapon.id === 20406 || equippedGear.weapon.id === 20000) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.5, finalOutput.maxDefRoll),
				}));
			// dragon sword
			} else if (equippedGear.weapon.id === 21009 || equippedGear.weapon.id === 21206) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.25),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// dragon warhammer
			} else if (equippedGear.weapon.id === 13576 || equippedGear.weapon.id === 20785) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.5),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// granite hammer
			} else if (equippedGear.weapon.id === 21742) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit+5),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.5, finalOutput.maxDefRoll),
				}));
			// rune claws
			} else if (equippedGear.weapon.id === 3101) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// saradomin godsword
			} else if (equippedGear.weapon.id === 11806 || equippedGear.weapon.id === 20372) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// saradomin sword
			} else if (equippedGear.weapon.id === 11838) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1) + 16,
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// saradomin's blessed sword
			} else if (equippedGear.weapon.id === 12809) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.25),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// zamorak godsword
			} else if (equippedGear.weapon.id === 11808 || equippedGear.weapon.id === 20374) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.1),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// armadyl crossbow
			} else if (equippedGear.weapon.id === 11785 || equippedGear.weapon.id === 23611) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*2, finalOutput.maxDefRoll),
				}));
			// heavy & light ballista
			} else if (equippedGear.weapon.id === 19478 || equippedGear.weapon.id === 19481 || equippedGear.weapon.id === 23630) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.25),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// dark bow
			} else if (equippedGear.weapon.id === 11235 || equippedGear.weapon.id === 12767 || equippedGear.weapon.id === 12768 || equippedGear.weapon.id === 12766 || equippedGear.weapon.id === 12765 || equippedGear.weapon.id === 20408) {
				if (equippedGear.ammo) {
					// if using dragon arrows
					if (equippedGear.ammo.id === 11212 || equippedGear.ammo.id === 20389 || equippedGear.ammo.id === 11227 || equippedGear.ammo.id === 11228 || equippedGear.ammo.id === 11229) {
						setSpecialAttack(prevSpec => ({
							...prevSpec,
							maxHit: Math.floor(finalOutput.maxHit*1.5)*2,
							accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
						}));
					// else using any other arrows
					} else {
						setSpecialAttack(prevSpec => ({
							...prevSpec,
							maxHit: Math.floor(finalOutput.maxHit*1.3)*2,
							accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
						}));
					}
				}
			// dragon crossbow
			} else if (equippedGear.weapon.id === 21902) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.2),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			// dragon thrownaxe
			} else if (equippedGear.weapon.id === 20849 || equippedGear.weapon.id === 21207) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit),
					accuracy: calcHitChance(finalOutput.maxAttRoll*1.25, finalOutput.maxDefRoll),
				}));
			// toxic blowpipe
			} else if (equippedGear.weapon.id === 12926) {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput.maxHit*1.5),
					accuracy: calcHitChance(finalOutput.maxAttRoll, finalOutput.maxDefRoll),
				}));
			} else  {
				setSpecialAttack(prevSpec => ({
					...prevSpec,
					maxHit: finalOutput.maxHit,
					accuracy: finalOutput.accuracy,
				}));
			}
		} else {
			setSpecialAttack(prevSpec => ({
				...prevSpec,
				maxHit: finalOutput.maxHit,
				accuracy: finalOutput.accuracy,
			}));
		}
	}, [finalOutput])

	useEffect(() => {
		if (equippedGear2.weapon && finalOutput2.maxHit && !userStats2.isMagic) {
			// abyssal dagger
			if (equippedGear2.weapon.id === 13265 || equippedGear2.weapon.id === 13267 || equippedGear2.weapon.id === 13269 || equippedGear2.weapon.id === 13271) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*0.85)*2,
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// abyssal bludgeon
			} else if (equippedGear2.weapon.id === 13263) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.495),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// abyssal whip
			} else if (equippedGear2.weapon.id === 4151 || equippedGear2.weapon.id === 4178 || equippedGear2.weapon.id === 20405 || equippedGear2.weapon.id === 12774 || equippedGear2.weapon.id === 12773) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// armadyl godsword
			} else if (equippedGear2.weapon.id === 11802 || equippedGear2.weapon.id === 20593 || equippedGear2.weapon.id === 22665 || equippedGear2.weapon.id === 20368) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(Math.floor(finalOutput2.maxHit*1.1)*1.25),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// bandos godsword
			} else if (equippedGear2.weapon.id === 11804 || equippedGear2.weapon.id === 20370) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(Math.floor(finalOutput2.maxHit*1.1)*1.1),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// barrelchest anchor
			} else if (equippedGear2.weapon.id === 10887) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// brine sabre
			} else if (equippedGear2.weapon.id === 11037) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// dinh's bulwark
			} else if (equippedGear2.weapon.id === 21015) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.2, finalOutput2.maxDefRoll),
				}));
			// dragon claws
			// } else if (equippedGear2.weapon.id === 13652 || equippedGear2.weapon.id === 20784) {
			// 	setSpecialAttack2(prevSpec => ({
			// 		...prevSpec,
			// 		maxHit: Math.floor((finalOutput2.maxHit-1)),
			//      accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
			// 	}));
			// dragon dagger
			} else if (equippedGear2.weapon.id === 1215 || equippedGear2.weapon.id === 20407 || equippedGear2.weapon.id === 1231 || equippedGear2.weapon.id === 5680 || equippedGear2.weapon.id === 5698) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.15)*2,
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.15, finalOutput2.maxDefRoll),
				}));
			// dragon/crystal halberd
			} else if (equippedGear2.weapon.id === 3204 || equippedGear2.weapon.id === 23987 || equippedGear2.weapon.id === 24125 || equippedGear2.weapon.id === 13080) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1)*2,
					accuracy: calcHitChance(finalOutput2.maxAttRoll*0.75, finalOutput2.maxDefRoll),
				}));
			// dragon hasta
			} else if (equippedGear2.weapon.id === 22731 || equippedGear2.weapon.id === 22743 || equippedGear2.weapon.id === 22734 || equippedGear2.weapon.id === 22737 || equippedGear2.weapon.id === 22740) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.5),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// dragon longsword
			} else if (equippedGear2.weapon.id === 1305) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.15),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// dragon mace
			} else if (equippedGear2.weapon.id === 1434) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.5),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// dragon scimitar
			} else if (equippedGear2.weapon.id === 4587 || equippedGear2.weapon.id === 20406 || equippedGear2.weapon.id === 20000) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.5, finalOutput2.maxDefRoll),
				}));
			// dragon sword
			} else if (equippedGear2.weapon.id === 21009 || equippedGear2.weapon.id === 21206) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.25),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// dragon warhammer
			} else if (equippedGear2.weapon.id === 13576 || equippedGear2.weapon.id === 20785) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.5),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// granite hammer
			} else if (equippedGear2.weapon.id === 21742) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit+5),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.5, finalOutput2.maxDefRoll),
				}));
			// rune claws
			} else if (equippedGear2.weapon.id === 3101) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// saradomin godsword
			} else if (equippedGear2.weapon.id === 11806 || equippedGear2.weapon.id === 20372) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// saradomin sword
			} else if (equippedGear2.weapon.id === 11838) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1) + 16,
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// saradomin's blessed sword
			} else if (equippedGear2.weapon.id === 12809) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.25),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// zamorak godsword
			} else if (equippedGear2.weapon.id === 11808 || equippedGear2.weapon.id === 20374) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.1),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// armadyl crossbow
			} else if (equippedGear2.weapon.id === 11785 || equippedGear2.weapon.id === 23611) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*2, finalOutput2.maxDefRoll),
				}));
			// heavy & light ballista
			} else if (equippedGear2.weapon.id === 19478 || equippedGear2.weapon.id === 19481 || equippedGear2.weapon.id === 23630) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.25),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// dark bow
			} else if (equippedGear2.weapon.id === 11235 || equippedGear2.weapon.id === 12767 || equippedGear2.weapon.id === 12768 || equippedGear2.weapon.id === 12766 || equippedGear2.weapon.id === 12765 || equippedGear2.weapon.id === 20408) {
				if (equippedGear2.ammo) {
					// if using dragon arrows
					if (equippedGear2.ammo.id === 11212 || equippedGear2.ammo.id === 20389 || equippedGear2.ammo.id === 11227 || equippedGear2.ammo.id === 11228 || equippedGear2.ammo.id === 11229) {
						setSpecialAttack2(prevSpec => ({
							...prevSpec,
							maxHit: Math.floor(finalOutput2.maxHit*1.5)*2,
							accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
						}));
					// else using any other arrows
					} else {
						setSpecialAttack2(prevSpec => ({
							...prevSpec,
							maxHit: Math.floor(finalOutput2.maxHit*1.3)*2,
							accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
						}));
					}
				}
			// dragon crossbow
			} else if (equippedGear2.weapon.id === 21902) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.2),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			// dragon thrownaxe
			} else if (equippedGear2.weapon.id === 20849 || equippedGear2.weapon.id === 21207) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit),
					accuracy: calcHitChance(finalOutput2.maxAttRoll*1.25, finalOutput2.maxDefRoll),
				}));
			// toxic blowpipe
			} else if (equippedGear2.weapon.id === 12926) {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: Math.floor(finalOutput2.maxHit*1.5),
					accuracy: calcHitChance(finalOutput2.maxAttRoll, finalOutput2.maxDefRoll),
				}));
			} else  {
				setSpecialAttack2(prevSpec => ({
					...prevSpec,
					maxHit: finalOutput2.maxHit,
					accuracy: finalOutput2.accuracy,
				}));
			}
		} else {
			setSpecialAttack2(prevSpec => ({
				...prevSpec,
				maxHit: finalOutput2.maxHit,
				accuracy: finalOutput2.accuracy,
			}));
		}
	}, [finalOutput2])

	const [ref, hovered] = useHover();

	return (
		<div className='special-attack'>
			<img src={SpecImg} alt="" className="misc-img" ref={ref}/>
			<input type="checkbox" className="checkbox-class" onChange={handleChange}/>
			{hovered && 
				<div className="special-attack-hover">
					<h5>Show Special Attack</h5>
				</div>
			}
		</div>
	)
}