import { welcomeMessage } from "@/defaults/messages";

const getGreeting = () => {
	const date = new Date();
	const hours = date.getHours();

	if (hours < 12) {
		return welcomeMessage.morning;
	} else if (hours < 18) {
		return welcomeMessage.afternoon;
	} else {
		return welcomeMessage.evening;
	}
};

export default getGreeting;
