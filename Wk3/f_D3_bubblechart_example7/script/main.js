/// Modified source copyright
// Copyright 2022 Takanori Fujiwara.
// Released under the BSD 3-Clause 'New' or 'Revised' License

/// Original source copyright
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/bubble-map

import {
  bubbleChart
} from './chart.js';

import {
  swatches
} from './legend.js';

const flare = await d3.csv('./data/CityData_WUP2025_top200.csv', d3.autoType);
const files = flare.filter(d => d.value !== null); // just the leaves

const chart = bubbleChart(files, {
  label: d => d.Name + '\n' + d.pop2050,
  value: d => d.pop2050,
  group: d => d.Region,
  title: d => `${d.Name}\n${d.pop2050.toLocaleString('en')}`,
  width: 1152
});

const chartSwatches = swatches(chart.scales.color, {
  textWidth: 60
});

d3.select('body').append(() => chart);
d3.select('body').append(() => chartSwatches);