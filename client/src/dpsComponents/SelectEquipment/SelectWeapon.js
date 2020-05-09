import React, { useState, useEffect } from 'react';
import weaponImg from "../../images/Equipment/WeaponSlot.png";
import { Select } from 'react-select-virtualized';
import { customStyles1 } from "./Styles/SelectStyle1";
import useHover from '../../hooks/useHover';
const fetch = require('node-fetch');

export const SelectWeapon = React.memo(({ handleEquipmentChange, equipmentList, equippedGear, setEquippedGear }) => {

	// NEED equipmentList for loading weapon options (contains names + id's)
	// NEED handleEquipmentChange for equippingGear after a select

	// controls a list of all weapons
	const [select, setSelect] = useState({
		name: 'weapon',
		VCWidth: 0,
		VCHeight: 0,
		VCOpacity: 1,
		options: [],
	})

	const [weaponPic, setWeaponPic] = useState(weaponImg);

	// for loading weapon options in state (should only be triggered once)
	useEffect(() => {
		const loadOptions = () => {
			const options = [];
			options.push({
				label: 'None',
				value: null,
			})
			if (equipmentList.weapon) {
				equipmentList.weapon.forEach((weapon) => {
					options.push({
						label: weapon.name,
						value: weapon.id,
					})
				})

				setSelect((prevSelect) => ({
					...prevSelect,
					options: options,
				}))
			}
		}
		loadOptions();
	}, [equipmentList.weapon])

	// equipping "None" in weapon slot when the weapon list loads
	useEffect(() => {
		if (equipmentList.weapon) {
			handleEquipmentChange('weapon', 100000);
		}
	}, [equipmentList.weapon])

	// for fetching image after every select or if equipped weapon changes somehow
	useEffect(() => {
		async function fetchImage() {
			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const url = "https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-icons/";
			let id;
			if (equippedGear.weapon) {
				if (equippedGear.weapon.id === 100000) {
					setWeaponPic(weaponImg);
				} else {
					id = equippedGear.weapon.id;
					const response = await fetch(`${proxyUrl}${url}${id}.png`);
					setWeaponPic(response.url)
				}
			} else {
				setWeaponPic(weaponImg)
			}
		}
		fetchImage();
	}, [equippedGear.weapon])

	const handleWeaponChange = weapon => {
		if (weapon) {
			if (!weapon.value) {
				handleEquipmentChange('weapon', 100000);
			} else {
				handleEquipmentChange('weapon', weapon.value);
			}
		}
	}

	const handleMenuOpen = () => {
		setSelect(prevSelect => ({
			...prevSelect,
			VCWidth: 180,
			VCHeight: "auto",
			VCOpacity: 1,
		}));
	}

	const handleMenuClose = () => {
		setSelect(prevSelect => ({
			...prevSelect,
			VCWidth: 0,
			VCHeight: 0,
			VCOpacity: 0,
		}));
	}

	const [ref, hovered] = useHover();

	return(
		<div className="weapon-slot">
			<img src={weaponPic} alt="selected weapon" ref={ref}/>
			{hovered && equippedGear.weapon &&
				<div className="weapon-hover">
					<h5>{equippedGear.weapon.name}</h5>
					<h6>{equippedGear.weapon.stats.attStab ? `Stab Att: ${equippedGear.weapon.stats.attStab}` : null}</h6>
					<h6>{equippedGear.weapon.stats.attSlash ? `Slash Att: ${equippedGear.weapon.stats.attSlash}` : null}</h6>
					<h6>{equippedGear.weapon.stats.attCrush ? `Crush Att: ${equippedGear.weapon.stats.attCrush}` : null}</h6>
					<h6>{equippedGear.weapon.stats.attMagic ? `Magic Att: ${equippedGear.weapon.stats.attMagic}` : null}</h6>
					<h6>{equippedGear.weapon.stats.attRanged ? `Range Att: ${equippedGear.weapon.stats.attRanged}` : null}</h6>
					<h6>{equippedGear.weapon.stats.strBonus ? `Melee Str: ${equippedGear.weapon.stats.strBonus}` : null}</h6>
					<h6>{equippedGear.weapon.stats.rngStrBonus ? `Range Str: ${equippedGear.weapon.stats.rngStrBonus}` : null}</h6>
					<h6>{equippedGear.weapon.stats.magBonus ? `Magic Dmg: ${equippedGear.weapon.stats.magBonus}` : null}</h6>
					<h6>{equippedGear.weapon.stats.prayBonus ? `Pray Bonus: ${equippedGear.weapon.stats.prayBonus}` : null}</h6>
				</div>
			}
			<Select
				className="weapon-select"
				placeholder="Search for weapon"
				isSearchable
				onChange={(selectedOption) => handleWeaponChange(selectedOption)}
				onMenuOpen={() => handleMenuOpen()}
				onMenuClose={() => handleMenuClose()}
				options={select.options}
				styles={customStyles1(select)}
			/>
		</div>
	)
})