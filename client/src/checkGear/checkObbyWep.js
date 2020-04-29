export function checkObbyWep(equippedGear, checkBonus, setCheckBonus) {
	const ids = [6525, 6523, 6527, 6528, 23235];

	if (equippedGear.weapon) {
		if (ids.includes(equippedGear.weapon.id)) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbyWep: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbyWep: false,
			}));
		}
	}
}