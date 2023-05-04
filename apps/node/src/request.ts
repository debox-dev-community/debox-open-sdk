export interface RequestOptions extends RequestInit {
	responseType?:
		| 'TEXT'
		| 'JSON'
		| 'BLOB'
		| 'ARRAYBUFFER'
		| 'text'
		| 'json'
		| 'blob'
		| 'arraybuffer'
	body?: any
	timeout?: number
}

export interface RequestOtherOptions {
	retryTimes?: number
	requestTimeOut?: number
}

const request = (url: string, config?: RequestOptions, otherOption?: RequestOtherOptions) => {
	let retryTime: number = otherOption?.retryTimes || 1
	const requestTimeOut = otherOption?.requestTimeOut || 10
	console.log('object')
	const retryRequest = (url: string, retryTime: number, config?: RequestOptions): any => {
		retryTime--
		console.log('retryTime', retryTime)
		const inital: RequestOptions = {
			method: 'GET',
			body: null,
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			cache: 'no-cache',
			mode: 'cors',
			responseType: 'JSON',
			timeout: requestTimeOut * 1000,
		}

		const configs: RequestOptions = {
			...inital,
			...config,
		}
		if (config && config.headers) {
			configs.headers = {
				...inital.headers,
				...config.headers,
			}
		}

		const finalConfig: RequestInit = {
			method: configs.method?.toUpperCase(),
			credentials: configs.credentials,
			mode: configs.mode,
			cache: configs.cache,
			headers: configs.headers,
			body: configs.body,
		}

		console.log(finalConfig)

		return fetch(`${url}`, finalConfig)
			.then((response: Response) => {
				const { status } = response

				if (status >= 200 && status < 400) {
					let result: any
					switch (configs.responseType && configs.responseType.toUpperCase()) {
						case 'TEXT':
							result = response.text()
							break
						case 'JSON':
							result = response.json()
							break
						case 'BLOB':
							result = response.blob()
							break
						case 'ARRAYBUFFER':
							result = response.arrayBuffer()
							break
						default:
							result = response.json()
					}
					return result
				}
				return Promise.reject(response)
			})
			.catch((reason: any) => {
				if (typeof window !== 'undefined' && navigator && !navigator.onLine) {
					console.log('Your network is break!')
				}
				if (reason && reason.status) {
					switch (reason.status) {
						case 400:
							console.log('Please verify your info!')
							break
						case 401:
							console.log('Please Login!')
							break
						case 403:
							console.log('You have no access to this')
							break
						case 500:
							console.log("there's something wrong!")
							break
						case 504:
							console.log("there's something wrong!")
							break
						default:
					}
				} else {
					console.log("there's something wrong!")
					if (retryTime) {
						return retryRequest(url, retryTime, config)
					}
				}
				return Promise.reject(reason)
			})
	}
	return retryRequest(url, retryTime, config)
}

export default request
