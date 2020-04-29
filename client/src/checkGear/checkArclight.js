export function checkArclight(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 19675) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isArclight: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isArclight: false,
			}));
		}
	}
}