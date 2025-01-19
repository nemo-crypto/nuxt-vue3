export const Server = {
	API: {
		// mainnet: "https://api.nubit.io/v1",
		// mocha: "https://api-mocha-4.nubit.io/v1",
		// arabica: "https://api-arabica-11.nubit.io/v1",
		// dev: "https://api.nubit.io/v1",
		// dev: "https://api-dev.nubit.io/v1",
		// dev: "http://34.214.158.10:9876/v1",
		// dev: "https://dev-api.nubit.network/v1",
		dev: "https://alphatestnet-api.nubit.org/v1",
	},
	WSS: {
		// mainnet: "wss://api.nubit.io/v1/ws",
		// mocha: "wss://api-mocha-4.nubit.io/v1/ws",
		// arabica: "wss://api-arabica-11.nubit.io/v1/ws",
		// dev: "wss://api.nubit.io/v1/ws",
		// dev: "wss://api-dev.nubit.io/v1/ws",
		// dev: "ws://34.214.158.10:9876/v1/ws",
		// dev: "wss://dev-api.nubit.network/v1/ws",
		dev: "wss://alphatestnet-api.nubit.org/v1/ws",
	},
}

export const useServerURL = () => {
	const requestURL = useRequestURL()

	switch (requestURL.hostname) {
		case "nubit.io":
			return Server.API.mainnet

		case "mocha-4.nubit.io":
			return Server.API.mocha

		case "mocha.nubit.io":
			return Server.API.mocha

		case "arabica.nubit.io":
			return Server.API.arabica

		case "dev.nubit.io":
			return Server.API.dev

		default:
			return Server.API.dev
	}
}

export const useSocketURL = () => {
	const requestURL = useRequestURL()

	switch (requestURL.hostname) {
		case "nubit.io":
			return Server.WSS.mainnet

		case "mocha-4.nubit.io":
			return Server.WSS.mocha

		case "mocha.nubit.io":
			return Server.WSS.mocha

		case "arabica.nubit.io":
			return Server.WSS.arabica

		case "dev.nubit.io":
			return Server.WSS.dev

		default:
			return Server.WSS.dev
	}
}
