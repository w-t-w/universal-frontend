const eslintrc = {
    parser: '@babel/eslint-parser',
    extends: ['airbnb'],
    env: {
        node: true,
        browser: true,
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['error', 4],
        'react/prop-types': 'off',
        'default-param-last': 'off',
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': 'off',
        'prefer-destructuring': 'off',
        'no-proto': 'off',
        'max-len': 'off',
    },
};

module.exports = eslintrc;
