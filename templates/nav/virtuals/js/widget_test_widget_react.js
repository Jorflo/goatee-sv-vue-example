define([
	'react', 
	'reactDOM', 
	'test_react/components/Test/Test',
], function(
	React,
	ReactDOM,
	Test,
) {

	let component;
	
	component = ReactDOM.render(
		React.createElement(Test.Test, { label: 'Value here', error: false, errorTriggered: exampleHandleActionOutsideReact}), 
		document.querySelector('[data-guid=ed1edf30-80da-4e63-85b1-45eec2b3ef4d]')
	);

	function exampleHandleActionOutsideReact(value) {
		console.log('Error triggered, handle error')
		// Quick change
		component.state.inp = 'Error triggered'
	};

	// Not sure how you load CSS files for components? So dummy here
	let link = document.createElement( "link" );
	link.href = "templates/nav/virtuals/css/test.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName( "head" )[0].appendChild( link );

});