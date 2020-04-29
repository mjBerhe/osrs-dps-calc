export function checkSlayerHelm(equippedGear, checkBonus, setCheckBonus) {
	const allSlayerHelmID = [19641, 19645, 23075, 21266, 19649, 11865, 21890, 11783, 11774, 11782, 11781, 11780, 11779, 11778, 11777, 11776, 11775, 11784, 19639, 19643, 23073, 21264, 19647, 11864, 21888, 24370, 8921, 8919, 8901, 8917, 8915, 8913, 8911, 8909, 8907, 8905, 8903];

	if (equippedGear.helm) {
		if (allSlayerHelmID.includes(equippedGear.helm.id)) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSlayerHelm: true,
			}))
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSlayerHelm: false,
			}))
		}
	}

}