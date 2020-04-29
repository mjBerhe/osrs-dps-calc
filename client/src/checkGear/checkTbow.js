export function checkTbow(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 20997) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isTbow: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isTbow: false,
			}));
		}
	}
}