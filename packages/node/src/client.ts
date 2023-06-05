import request from './request'

class Client {
	endpoint: string // IP or hostname of SLS endpoint
	apiKey: string
	userAgent: string // default defaultLogUserAgent
	requestTimeOut: number // seconds to wait
	retryTimes: number // retry times to retry
	authVersion: string // AuthVersionType

	constructor(config: {
		endpoint: string
		apiKey: string
		userAgent?: string
		requestTimeOut?: number
		retryTimes?: number
		authVersion?: string
	}) {
		this.endpoint = config.endpoint
		this.apiKey = config.apiKey
		this.userAgent = config.userAgent || 'debox-open-sdk'
		this.requestTimeOut = config.requestTimeOut || 30
		this.retryTimes = config.retryTimes || 3
		this.authVersion = config.authVersion || '0.6.0'
	}
	init() {
		console.log(this.endpoint)
	}
	async registerCallbakUrl(body: {
		registerUrl?: string
		httpMethod?: string
	}) {
		try {
			const apiUrl = '/openapi/register_callbak_url'
			const req = { url: body.registerUrl || '', http_method: body.httpMethod || 'POST' }
			const res = await request(this.endpoint + apiUrl, {
				method: 'POST',
				body: JSON.stringify(req),
				headers: {
					'X-Chat-Bodyrawsize': JSON.stringify(req).length.toString(),
					'User-Agent': this.userAgent,
					'Content-Type': 'application/json',
					'Accept-Encoding': 'deflate',
					'X-Api-Key': this.apiKey,
					'X-Chat-Apiversion': this.authVersion,
				},
			}, {
				retryTimes: this.retryTimes,
				requestTimeOut: this.requestTimeOut,
			})
			return res
		} catch (error) {
			console.log(error)
			return
		}
	}
	async sendChatMsg(body: {
		toUserId?: string
		groupId?: string
		message?: string
	}) {
		try {
			const apiUrl = '/openapi/send_chat_message'
			const req = { to_user_id: body.toUserId || 'DeBox&Love', group_id: body.groupId || '', message: body.message || '' }
			const res = await request(this.endpoint + apiUrl, {
				method: 'POST',
				body: JSON.stringify(req),
				headers: {
					'X-Chat-Bodyrawsize': JSON.stringify(req).length.toString(),
					'User-Agent': this.userAgent,
					'Content-Type': 'application/json',
					'Accept-Encoding': 'deflate',
					'X-Api-Key': this.apiKey,
					'X-Chat-Apiversion': this.authVersion,
				},
			}, {
				retryTimes: this.retryTimes,
				requestTimeOut: this.requestTimeOut,
			})
			return res
		} catch (error) {
			console.log(error)
			return
		}
	}
	async getGroupId({ inviteUrl }: { inviteUrl: string }) {
		try {
			const apiUrl = 'https://debox.love/api/openapi/group_id'
			const res = await request(`${apiUrl}?inviteUrl=${inviteUrl}`, {
				method: 'GET',
				headers: {
					'User-Agent': this.userAgent,
					'Content-Type': 'application/json',
					'Accept-Encoding': 'deflate',
					'X-Api-Key': this.apiKey,
					'X-Chat-Apiversion': this.authVersion,
				},
			}, {
				retryTimes: this.retryTimes,
				requestTimeOut: this.requestTimeOut,
			})
			return res
		} catch (error) {
			console.log(error)
			return false
		}
	}
}

export default Client
