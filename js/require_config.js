requirejs.config({
    baseUrl: './',
    paths: {
        vue: './js/vue',
        goatee: '../node_modules/goatee/index',
        text: './js/text',
        test_widget: '../templates/nav/virtuals/js/widget_test_widget',
        test_widget_template: '../templates/nav/virtuals/templates/widget_test_widget',
        test_widget_react: '../templates/nav/virtuals/js/widget_test_widget_react',
        test_widget_template_react: '../templates/nav/virtuals/templates/widget_test_widget_react',
        react: 'https://unpkg.com/react@17.0.2/umd/react.production.min',
        reactDOM: 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min',
    },
    packages: [
        {
			"name": "test_library",
			"location": "../node_modules/test_library/dist",
            "main": "index"
		},
        {
            // Load each component from unpkg, just easier for me this way now
			"name": "test_react",
			"location": "../node_modules/test_react/dist",
            "main": "index"
		}
    ]
});