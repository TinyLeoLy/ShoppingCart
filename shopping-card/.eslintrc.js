// https://eslint.org/docs/user-guide/configuring

module.exports = {
    "extends": [
        'plugin:vue/essential',
        'standard'
    ],
    "plugins": [
        'vue'
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "no-var": "warn",
        "arrow-body-style": [
            "warn",
            "always"
        ],
        "arrow-parens": [
            "warn",
            "always"
        ],
        "arrow-spacing": [
            "warn",
            {
                "before": true,
                "after": true
            }
        ],
        "keyword-spacing": [
            "warn",
            {
                "before": true,
                "after": true,
            }
        ],
        "semi-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "curly": "warn",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "space-before-blocks": [
            "warn",
            "always"
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
}
