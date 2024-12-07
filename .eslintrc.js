module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	overrides: [
		{
			files: ['test/**/*.ts', '**/*.js'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/consistent-type-assertions': 'off',
			},
		},
		{
			files: ['test/**/*.ts'],
			rules: {
				'no-magic-numbers': 'off',
				'@typescript-eslint/no-magic-numbers': 'off',
			},
		},
	],
	ignorePatterns: [
		'dist/**',
		'build/**',
		'bin/**',
		'templates/**',
		'docs/**',
		'*.py',
		'.eslintrc.js',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['tsconfig.json'],
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'unused-imports'],
	rules: {
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'@typescript-eslint/semi': ['error', 'always'],
		camelcase: 'error',
		'comma-dangle': ['error', 'always-multiline'],
		complexity: [
			'off',
			{
				max: 11,
			},
		],
		curly: ['error', 'multi-line'],
		'default-case': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'id-blacklist': 'error',
		'id-match': 'error',
		'linebreak-style': ['error', 'unix'],
		'max-classes-per-file': ['off', 1],
		'max-lines': ['off', 300],
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'off',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'off',
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, -1],
				ignoreEnums: true,
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
			},
		],
		'no-new-wrappers': 'error',
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': ['error'],
		'no-regex-spaces': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'off',
		'no-unsafe-finally': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports-ts': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never',
			},
		],
		'unused-imports/no-unused-vars-ts': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
			},
		],
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/'],
			},
		],
		'use-isnan': 'error',
	},
};
