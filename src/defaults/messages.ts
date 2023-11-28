interface WelcomeMessage {
	greeting: string;
	message: string;
}

export const welcomeMessage: { [key: string]: WelcomeMessage } = {
	morning: { greeting: "Good Morning!", message: "Break out the v60!" },
	afternoon: { greeting: "Good Afternoon!", message: "How about another pourover?" },
	evening: { greeting: "Good Evening!", message: "Never to late for a pourover!" },
};
