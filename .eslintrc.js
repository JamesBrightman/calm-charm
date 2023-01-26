module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'jest'
	],
	'rules': {
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'warn',
			'always'
		]
	},
	'ignorePatterns': [
		'public',
		'jest.config.js',
		'README.md',
		'*.css'	
	]
};
