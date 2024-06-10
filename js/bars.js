// 中小企業家數 / 比率
am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("barGraph01", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		// Add a legend
		chart.legend = new am4charts.Legend();

		// Add data
		chart.data = [{
			Year: '2015',
			Quantity: 1383981,
			Percentage: 97.69
		}, {
			Year: '2016',
			Quantity: 1408313,
			Percentage: 97.73
		}, {
			Year: '2017',
			Quantity: 1437616,
			Percentage: 97.7
		}, {
			Year: '2018',
			Quantity: 1466209,
			Percentage: 97.64
		}, {
			Year: '2019',
			Quantity: 1491420,
			Percentage: 97.65
		}];

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Year";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.tooltip.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.min = 0;
		valueAxis.cursorTooltipEnabled = false;

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "Quantity";
		series.dataFields.categoryX = "Year";
		series.tooltipText = "[bold]{categoryX}年 中小企業家數:{valueY}家[/]";
		series.name = '家數';
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		})


		var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		paretoValueAxis.renderer.opposite = true;
		paretoValueAxis.min = 95;
		paretoValueAxis.max = 100;
		paretoValueAxis.strictMinMax = true;
		paretoValueAxis.renderer.grid.template.disabled = true;
		paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
		paretoValueAxis.numberFormatter.numberFormat = "#'%'"
		paretoValueAxis.cursorTooltipEnabled = false;

		var paretoSeries = chart.series.push(new am4charts.LineSeries())
		paretoSeries.dataFields.valueY = "Percentage";
		paretoSeries.dataFields.categoryX = "Year";
		paretoSeries.yAxis = paretoValueAxis;
		paretoSeries.tooltipText = "{categoryX}年 中小企業家數比率: {valueY.formatNumber('#.0')}%[/]";
		paretoSeries.name = '家數比率';
		paretoSeries.bullets.push(new am4charts.CircleBullet());
		paretoSeries.strokeWidth = 2;
		paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
		paretoSeries.strokeOpacity = 0.5;

		// Cursor
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panX";
		chart.responsive.enabled = true;

	}); // end am4core.ready()

// 中小企業銷售額 / 比率
am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("barGraph02", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		// Add a legend
		chart.legend = new am4charts.Legend();

		// Add data
		chart.data = [{
			Year: '2015',
			Quantity: 11803115,
			Percentage: 30.36
		}, {
			Year: '2016',
			Quantity: 11764677,
			Percentage: 30.71
		}, {
			Year: '2017',
			Quantity: 12139513,
			Percentage: 30.22
		}, {
			Year: '2018',
			Quantity: 12624472,
			Percentage: 29.59
		}, {
			Year: '2019',
			Quantity: 12712963,
			Percentage: 29.58
		}];

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Year";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.tooltip.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.min = 0;
		valueAxis.cursorTooltipEnabled = false;

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "Quantity";
		series.dataFields.categoryX = "Year";
		series.tooltipText = "[bold]{categoryX}年 銷售額:{valueY}百萬元[/]";
		series.name = "銷售額";
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		})


		var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		paretoValueAxis.renderer.opposite = true;
		paretoValueAxis.min = 25;
		paretoValueAxis.max = 35;
		paretoValueAxis.strictMinMax = true;
		paretoValueAxis.renderer.grid.template.disabled = true;
		paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
		paretoValueAxis.numberFormatter.numberFormat = "#'%'"
		paretoValueAxis.cursorTooltipEnabled = false;

		var paretoSeries = chart.series.push(new am4charts.LineSeries())
		paretoSeries.dataFields.valueY = "Percentage";
		paretoSeries.dataFields.categoryX = "Year";
		paretoSeries.yAxis = paretoValueAxis;
		paretoSeries.tooltipText = "{categoryX}年 銷售額比率: {valueY.formatNumber('#.0')}%[/]";
		paretoSeries.name = "銷售額比率";
		paretoSeries.bullets.push(new am4charts.CircleBullet());
		paretoSeries.strokeWidth = 2;
		paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
		paretoSeries.strokeOpacity = 0.5;

		// Cursor
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panX";
		chart.responsive.enabled = true;

	}); // end am4core.ready()

// 中小企業內銷額 / 比率
am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("barGraph03", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		// Add a legend
		chart.legend = new am4charts.Legend();

		// Add data
		chart.data = [{
			Year: '2015',
			Quantity: 10325260,
			Percentage: 35.41
		}, {
			Year: '2016',
			Quantity: 10340886,
			Percentage: 35.85
		}, {
			Year: '2017',
			Quantity: 10717138,
			Percentage: 35.52
		}, {
			Year: '2018',
			Quantity: 11171567,
			Percentage: 34.86
		}, {
			Year: '2019',
			Quantity: 11299248,
			Percentage: 34.83
		}];

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Year";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.tooltip.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.min = 0;
		valueAxis.cursorTooltipEnabled = false;

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "Quantity";
		series.dataFields.categoryX = "Year";
		series.tooltipText = "[bold]{categoryX}年 內銷額:{valueY}百萬元[/]";
		series.name = "內銷額";
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		})


		var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		paretoValueAxis.renderer.opposite = true;
		paretoValueAxis.min = 30;
		paretoValueAxis.max = 40;
		paretoValueAxis.strictMinMax = true;
		paretoValueAxis.renderer.grid.template.disabled = true;
		paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
		paretoValueAxis.numberFormatter.numberFormat = "#'%'"
		paretoValueAxis.cursorTooltipEnabled = false;

		var paretoSeries = chart.series.push(new am4charts.LineSeries())
		paretoSeries.dataFields.valueY = "Percentage";
		paretoSeries.dataFields.categoryX = "Year";
		paretoSeries.yAxis = paretoValueAxis;
		paretoSeries.tooltipText = "{categoryX}年 內銷額比率: {valueY.formatNumber('#.0')}%[/]";
		paretoSeries.name = "內銷額比率";
		paretoSeries.bullets.push(new am4charts.CircleBullet());
		paretoSeries.strokeWidth = 2;
		paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
		paretoSeries.strokeOpacity = 0.5;

		// Cursor
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panX";
		chart.responsive.enabled = true;

	}); // end am4core.ready()

// 中小企業出口額 / 比率
am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("barGraph04", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		// Add a legend
		chart.legend = new am4charts.Legend();

		// Add data
		chart.data = [{
			Year: '2015',
			Quantity: 1477855,
			Percentage: 15.21
		}, {
			Year: '2016',
			Quantity: 1423791,
			Percentage: 15.04
		}, {
			Year: '2017',
			Quantity: 1422375,
			Percentage: 14.23
		}, {
			Year: '2018',
			Quantity: 1452905,
			Percentage: 13.68
		}, {
			Year: '2019',
			Quantity: 1413715,
			Percentage: 13.42
		}];

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Year";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.tooltip.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.min = 0;
		valueAxis.cursorTooltipEnabled = false;

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "Quantity";
		series.dataFields.categoryX = "Year";
		series.tooltipText = "[bold]{categoryX}年 出口額:{valueY}百萬元[/]";
		series.name = "出口額";
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		})


		var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		paretoValueAxis.renderer.opposite = true;
		paretoValueAxis.min = 10;
		paretoValueAxis.max = 20;
		paretoValueAxis.strictMinMax = true;
		paretoValueAxis.renderer.grid.template.disabled = true;
		paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
		paretoValueAxis.numberFormatter.numberFormat = "#'%'"
		paretoValueAxis.cursorTooltipEnabled = false;

		var paretoSeries = chart.series.push(new am4charts.LineSeries())
		paretoSeries.dataFields.valueY = "Percentage";
		paretoSeries.dataFields.categoryX = "Year";
		paretoSeries.yAxis = paretoValueAxis;
		paretoSeries.tooltipText = "{categoryX}年 出口額比率: {valueY.formatNumber('#.0')}%[/]";
		paretoSeries.name = "出口額比率";
		paretoSeries.bullets.push(new am4charts.CircleBullet());
		paretoSeries.strokeWidth = 2;
		paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
		paretoSeries.strokeOpacity = 0.5;

		// Cursor
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panX";
		chart.responsive.enabled = true;

	}); // end am4core.ready()

// 中小企業就業人數 / 比率
am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("barGraph05", am4charts.XYChart);
		chart.scrollbarX = new am4core.Scrollbar();
		// Add a legend
		chart.legend = new am4charts.Legend();

		// Add data
		chart.data = [{
			Year: '2015',
			Quantity: 8759,
			Percentage: 78.22
		}, {
			Year: '2016',
			Quantity: 8810,
			Percentage: 78.19
		}, {
			Year: '2017',
			Quantity: 8904,
			Percentage: 78.44
		}, {
			Year: '2018',
			Quantity: 8965,
			Percentage: 78.41
		}, {
			Year: '2019',
			Quantity: 9054,
			Percentage: 78.73
		}];

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Year";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 60;
		categoryAxis.tooltip.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.minWidth = 50;
		valueAxis.min = 0;
		valueAxis.cursorTooltipEnabled = false;

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.sequencedInterpolation = true;
		series.dataFields.valueY = "Quantity";
		series.dataFields.categoryX = "Year";
		series.tooltipText = "[bold]{categoryX}年 就業人數:{valueY}千人[/]";
		series.name = "就業人數";
		series.columns.template.strokeWidth = 0;

		series.tooltip.pointerOrientation = "vertical";

		series.columns.template.column.cornerRadiusTopLeft = 10;
		series.columns.template.column.cornerRadiusTopRight = 10;
		series.columns.template.column.fillOpacity = 0.8;

		// on hover, make corner radiuses bigger
		var hoverState = series.columns.template.column.states.create("hover");
		hoverState.properties.cornerRadiusTopLeft = 0;
		hoverState.properties.cornerRadiusTopRight = 0;
		hoverState.properties.fillOpacity = 1;

		series.columns.template.adapter.add("fill", function(fill, target) {
			return chart.colors.getIndex(target.dataItem.index);
		})


		var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		paretoValueAxis.renderer.opposite = true;
		paretoValueAxis.min = 75;
		paretoValueAxis.max = 80;
		paretoValueAxis.strictMinMax = true;
		paretoValueAxis.renderer.grid.template.disabled = true;
		paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
		paretoValueAxis.numberFormatter.numberFormat = "#'%'"
		paretoValueAxis.cursorTooltipEnabled = false;

		var paretoSeries = chart.series.push(new am4charts.LineSeries())
		paretoSeries.dataFields.valueY = "Percentage";
		paretoSeries.dataFields.categoryX = "Year";
		paretoSeries.yAxis = paretoValueAxis;
		paretoSeries.name = '就業人數';
		paretoSeries.tooltipText = "{categoryX}年 就業人數比率: {valueY.formatNumber('#.0')}%[/]";
		paretoSeries.bullets.push(new am4charts.CircleBullet());
		paretoSeries.strokeWidth = 2;
		paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
		paretoSeries.strokeOpacity = 0.5;

		// Cursor
		chart.cursor = new am4charts.XYCursor();
		chart.cursor.behavior = "panX";
		chart.responsive.enabled = true;

	}); // end am4core.ready()