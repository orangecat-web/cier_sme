// Tab 中小企業重要統計指標長條圖
$(document).ready(function () {
	var $tabs = $('#horizontalTab');
	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,
		click: function(e, tab) {
			$('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
		},
		activate: function(e, tab) {
			$('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
		},
		activateState: function(e, state) {
			//console.log(state);
			$('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
		}
	});

	$('#start-rotation').on('click', function() {
		$tabs.responsiveTabs('startRotation', 1000);
	});
	$('#stop-rotation').on('click', function() {
		$tabs.responsiveTabs('stopRotation');
	});
	$('#start-rotation').on('click', function() {
		$tabs.responsiveTabs('active');
	});
	$('#enable-tab').on('click', function() {
		$tabs.responsiveTabs('enable', 3);
	});
	$('#disable-tab').on('click', function() {
		$tabs.responsiveTabs('disable', 3);
	});
	$('.select-tab').on('click', function() {
		$tabs.responsiveTabs('activate', $(this).val());
	});

});