/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#f0fdfa",
                    "100": "#ccfbf1",
                    "200": "#99f6e4",
                    "300": "#5eead4",
                    "400": "#2dd4bf",
                    "500": "#14b8a6",
                    "600": "#0d9488",
                    "700": "#0f766e",
                    "800": "#115e59",
                    "900": "#134e4a",
                    "950": "#042f2e"
                }
            }
        },
        fontFamily: {
            'body': [
                'Source Sans Pro',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'sans': [
                'Source Sans Pro',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        },
        content: [
            './index.html',
            './src//*.{vue,js,ts,jsx,tsx}',
            './node_modules/flowbite//*.js'
        ],
        plugins: [
            require('flowbite/plugin')
        ]
    }
}