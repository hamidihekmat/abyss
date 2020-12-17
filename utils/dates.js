// Getting the date

const currentYear = new Date().getFullYear();

const currentMonth = String(new Date().getMonth() + 1).padStart(2, 0);

const currentDay = String(new Date().getDate());

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

export const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

export const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
