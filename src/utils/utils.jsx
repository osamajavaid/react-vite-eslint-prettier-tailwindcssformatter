export const getLocalStorateItem = (item) => {
	return JSON.parse(localStorage.getItem(item));
};

export const convertToLocalString = (num = 0, maximumFractionDigits = 0) => {
	return num.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits,
	});
};

export function getCookie(cookieName) {
	const name = cookieName + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(";");

	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i].trim();
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}

	return null; // Return null if the cookie is not found
}

export const getTokenExp = () => {
	const token = getCookie("SESSION_COOKIE");
	if (token) {
		const [header] = token.split(".");
		const decodedPayload = JSON.parse(atob(header));

		if (decodedPayload.exp) {
			const currentTimestamp = Math.floor(Date.now() / 1000);
			if (decodedPayload.exp > currentTimestamp) {
				return true;
			} else {
				clearStorage();
				window.location.href = "/login";
				return false;
			}
		}
	} else {
		return false;
	}
};

export const clearStorage = () => {
	window.localStorage.clear();
	window.sessionStorage.clear();
	document.cookie =
		"SESSION_COOKIE" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const loginSession = (sessionId, userInfo, email) => {
	if (userInfo) localStorage.setItem("userInfo", JSON.stringify(userInfo));
	if (sessionId) {
		localStorage.setItem("AuthToken", sessionId);
		document.cookie = `SESSION_COOKIE=${sessionId}; path=/;`;
	}
	if (email) localStorage.setItem("Currentemail", email);
};

export function getItem(label, key, icon, children, type) {
	return {
		key,
		children,
		label,
		icon,
		type,
	};
}
