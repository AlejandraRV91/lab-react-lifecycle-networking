/** @format */

import PetList from "./PetList";
import "./Employee.css";

import { useState, useEffect } from "react";

export const Employee = (props) => {
	let [pets, setPets] = useState([]);
	let [showPets, setShowPets] = useState(false);

	useEffect(() => {
		if (showPets) {
			fetch(
				`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${props.employee.id}`
			)
				.then((res) => res.json())
				.then((data) => setPets(data))
				.catch((error) => console.log(error));
		}
	}, [showPets, props.employee.id]);

	function togglePets() {
		setShowPets((prevState) => !prevState);
	}

	return (
		<article className="employee">
			<h3>{ `${props.employee.prefix==="Dr."? "Dr.": ""} ${props.employee.firstName} ${props.employee.lastName}${props.employee.postfix==="CVPM"? ", CVPM": ""}` }</h3>
			<h4>{props.employee.title}</h4>
			<button onClick={togglePets}>
				{showPets ? "Hide Pets" : "Show Pets"}
			</button>
			{showPets ? (
				<div>
					<PetList pets={pets} />
				</div>
			) : (
				<></>
			)}
		</article>
	);
};

export default Employee;
