define([
	'goatee',
	'vue',
	'test_library/test_component',
	'text!test_widget_template.html'
], function(
	goatee,
	Vue,
	Test,
	template
) {

	// Data guid filled by goatee
	const el = document.querySelector('[data-guid=ed1edf30-80da-4e63-85b1-45eec2b3ef4d]') // {{guid}}

	// I am not sure how you handle this on site
	el.innerHTML = goatee.fill(template);
	// END ^

	// Setup
	// El: Element 
	// Data: Prop's we want to send to the component
	// Components: What component(s) we want to use
	// Methods: If needed setup methods. We can handle it here or call non-vue function

	
	const widget = new Vue({
		el: el,
		data() {
			return {
				variant : "primary", // Goatee variables
				label : "Value here" ,
				error: false
			}
		},
		components: {
			// Include component
			'Test': Test.default
		},
		methods: {

			// If we want to get data from component we can use methods to catch emits from component
			// Example for input, if we want to fill a form, we want to get value of the user input
			handleAction(value) {
				this.label = value; // This will re-render the component with new value
			},
			handleError(err) {
				exampleHandleActionOutsideVue(this.label)
			}
		}
	});

	function exampleHandleActionOutsideVue(value) {
		// Example to show you can modify vue data from outside vue
		widget.error = true;
		widget.label = 'Error trigged';
	};

});