export function checkScythe(equippedGear, setCheckBonus) {
	if (equippedGear.weapon) {
		if (equippedGear.weapon.id === 22325 || equippedGear.weapon.id === 22486) {
			setCheckBonus(prevBonus => ({
				...prevBonus,
				isScythe: true,
			}));
		} else {
			setCheckBonus(prevBonus => ({
				...prevBonus,
				isScythe: false,
			}));
		}
	}
}