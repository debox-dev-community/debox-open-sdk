module.exports = {
	extends: ['turbo', 'prettier'],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
}
