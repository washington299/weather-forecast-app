export const getWeekDay = (weekDay: number) => {
	const daysName: { [key: number]: string } = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thrusday",
		5: "Friday",
		6: "Saturday",
	};

	return daysName[weekDay];
}
