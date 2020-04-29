export function checkTomeOfFire(equippedGear, setCheckBonus) {
	if (equippedGear.shield) {
		if (equippedGear.shield.id === 20714 || equippedGear.shield.id === 20716) {
			setCheckBonus(prevBonus => ({
				...prevBonus,
				isTomeOfFire: true,
			}));
		} else {
			setCheckBonus(prevBonus => ({
				...prevBonus,
				isTomeOfFire: false,
			}));
		}
	}
}