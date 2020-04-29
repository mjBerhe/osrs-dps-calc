export function checkObbyNeck(equippedGear, checkBonus, setCheckBonus) {
	if (equippedGear.neck) {
		if (equippedGear.neck.id === 11128 || equippedGear.neck.id === 23240) {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbyNeck: true,
			}));
		} else {
			setCheckBonus((checkBonus) => ({
				...checkBonus,
				isObbyNeck: false,
			}));
		}
	}
}