requirejs.config({
    baseUrl: './',
    paths: {
        vue: './js/vue',
        goatee: '../node_modules/goatee/index',
        text: './js/text',
        test_widget: '../templates/nav/virtuals/js/widget_test_widget',
        test_widget_template: '../templates/nav/virtuals/templates/widget_test_widget',
        test_widget_sfc: '../templates/nav/virtuals/js/widget_test_widget_sfc',
        test_widget_template_sfc: '../templates/nav/virtuals/templates/widget_test_widget_sfc'
    },
    packages: [
        {
			"name": "test_library",
			"location": "../node_modules/test_library/dist",
            "main": "index"
		},
        {
			"name": "test_library_sfc",
			"location": "../node_modules/test_library/src/components",
            "main": "index"
		}
    ]
});