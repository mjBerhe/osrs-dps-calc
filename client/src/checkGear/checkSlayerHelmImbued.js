export function checkSlayerHelmImbued(equippedGear, checkBonus, setCheckBonus) {
	const allSlayerHelmImbuedID = [19641, 19645, 23075, 21266, 19649, 11865, 21890, 11774, 11775, 11776, 11777, 11778, 11779, 11780, 11781, 11782, 11783, 11784];

	if (equippedGear.helm) {
		if (allSlayerHelmImbuedID.includes(equippedGear.helm.id)) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSlayerHelmImbued: true,
			}))
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isSlayerHelmImbued: false,
			}))
		}
	}

}