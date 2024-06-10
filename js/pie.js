// pieChart01
am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	var chart = am4core.create("pieChart01", am4charts.PieChart);

	// Add and configure Series
	var pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "litres";
	pieSeries.dataFields.category = "country";

	// Let's cut a hole in our Pie chart the size of 30% the radius
	chart.innerRadius = am4core.percent(30);
	chart.responsive.enabled = true;
	chart.responsive.rules.push({
		relevant: function(target) {
			if (target.pixelWidth <= 316) {
				return true;
			}
			return false;
		},
		state: function(target, stateId) {
			if (target instanceof am4charts.PieSeries) {
				var state = target.states.create(stateId);
				var labelState = target.labels.template.states.create(stateId);
				labelState.properties.disabled = true;

				var tickState = target.ticks.template.states.create(stateId);
				tickState.properties.disabled = true;
				return state;
			}

			return null;
		}
	});

	// Put a thick white border around each Slice
	pieSeries.slices.template.stroke = am4core.color("#fff");
	pieSeries.slices.template.strokeWidth = 2;
	pieSeries.slices.template.strokeOpacity = 1;
	pieSeries.slices.template
		// change the cursor on hover to make it apparent the object can be interacted with
		.cursorOverStyle = [{
			"property": "cursor",
			"value": "pointer"
		}];

	pieSeries.alignLabels = false;
	pieSeries.labels.template.bent = true;
	pieSeries.labels.template.radius = 3;
	pieSeries.labels.template.padding(0, 0, 0, 0);

	pieSeries.ticks.template.disabled = true;
	pieSeries.slices.template.tooltipText = "{country} : {litres}%";

	// Create a base filter effect (as if it's not there) for the hover to return to
	var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
	shadow.opacity = 0;

	// Create hover state
	var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

	// Slightly shift the shadow and make it more prominent on hover
	var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
	hoverShadow.opacity = 0.7;
	hoverShadow.blur = 5;

	// Add a legend
	chart.legend = new am4charts.Legend();

	chart.data = [{
		"country": "中小企業",
		"litres": 97.6
	}, {
		"country": "大企業",
		"litres": 2.4
	}];
}); // end am4core.ready()


// pieChart02
am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	var chart = am4core.create("pieChart02", am4charts.PieChart);

	// Add and configure Series
	var pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "litres";
	pieSeries.dataFields.category = "country";

	// Let's cut a hole in our Pie chart the size of 30% the radius
	chart.innerRadius = am4core.percent(30);
	chart.responsive.enabled = true;
	chart.responsive.rules.push({
		relevant: function(target) {
			if (target.pixelWidth <= 316) {
				return true;
			}
			return false;
		},
		state: function(target, stateId) {
			if (target instanceof am4charts.PieSeries) {
				var state = target.states.create(stateId);
				var labelState = target.labels.template.states.create(stateId);
				labelState.properties.disabled = true;

				var tickState = target.ticks.template.states.create(stateId);
				tickState.properties.disabled = true;
				return state;
			}

			return null;
		}
	});

	// Put a thick white border around each Slice
	pieSeries.slices.template.stroke = am4core.color("#fff");
	pieSeries.slices.template.strokeWidth = 2;
	pieSeries.slices.template.strokeOpacity = 1;
	pieSeries.slices.template
		// change the cursor on hover to make it apparent the object can be interacted with
		.cursorOverStyle = [{
			"property": "cursor",
			"value": "pointer"
		}];

	pieSeries.alignLabels = false;
	pieSeries.labels.template.bent = true;
	pieSeries.labels.template.radius = 3;
	pieSeries.labels.template.padding(0, 0, 0, 0);

	pieSeries.ticks.template.disabled = true;
	pieSeries.slices.template.tooltipText = "{country} : {litres}%";

	// Create a base filter effect (as if it's not there) for the hover to return to
	var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
	shadow.opacity = 0;

	// Create hover state
	var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

	// Slightly shift the shadow and make it more prominent on hover
	var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
	hoverShadow.opacity = 0.7;
	hoverShadow.blur = 5;

	// Add a legend
	chart.legend = new am4charts.Legend();

	chart.data = [{
		"country": "中小企業",
		"litres": 78.7
	}, {
		"country": "大企業",
		"litres": 12.4
	}, {
		"country": "政府僱用",
		"litres": 8.9
	}];

}); // end am4core.ready()


// pieChart03
am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	var chart = am4core.create("pieChart03", am4charts.PieChart);

	// Add and configure Series
	var pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "litres";
	pieSeries.dataFields.category = "country";

	// Let's cut a hole in our Pie chart the size of 30% the radius
	chart.innerRadius = am4core.percent(30);
	chart.responsive.enabled = true;
	chart.responsive.rules.push({
		relevant: function(target) {
			if (target.pixelWidth <= 316) {
				return true;
			}
			return false;
		},
		state: function(target, stateId) {
			if (target instanceof am4charts.PieSeries) {
				var state = target.states.create(stateId);
				var labelState = target.labels.template.states.create(stateId);
				labelState.properties.disabled = true;

				var tickState = target.ticks.template.states.create(stateId);
				tickState.properties.disabled = true;
				return state;
			}

			return null;
		}
	});

	// Put a thick white border around each Slice
	pieSeries.slices.template.stroke = am4core.color("#fff");
	pieSeries.slices.template.strokeWidth = 2;
	pieSeries.slices.template.strokeOpacity = 1;
	pieSeries.slices.template
		// change the cursor on hover to make it apparent the object can be interacted with
		.cursorOverStyle = [{
			"property": "cursor",
			"value": "pointer"
		}];

	pieSeries.alignLabels = false;
	pieSeries.labels.template.bent = true;
	pieSeries.labels.template.radius = 3;
	pieSeries.labels.template.padding(0, 0, 0, 0);

	pieSeries.ticks.template.disabled = true;
	pieSeries.slices.template.tooltipText = "{country} : {litres}%";

	// Create a base filter effect (as if it's not there) for the hover to return to
	var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
	shadow.opacity = 0;

	// Create hover state
	var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

	// Slightly shift the shadow and make it more prominent on hover
	var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
	hoverShadow.opacity = 0.7;
	hoverShadow.blur = 5;

	// Add a legend
	chart.legend = new am4charts.Legend();

	chart.data = [{
		"country": "新創 ( 經營未滿 5 年 ) 中小企業",
		"litres": 29.6
	}, {
		"country": "非新創 ( 經營 5 年以上 ) 中小企業",
		"litres": 70.4
	}];

}); // end am4core.ready()