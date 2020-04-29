export function checkSmokeStaff(equippedGear, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 12000 || equippedGear.weapon.id === 11998) {
			setCheckBonus(prevCheckBonus => ({
				...prevCheckBonus,
				isSmokeStaff: true,
			}));
		} else {
			setCheckBonus(prevCheckBonus => ({
				...prevCheckBonus,
				isSmokeStaff: false,
			}));
		}
	}
}