var outerRadius = 650 / 2,
    innerRadius = outerRadius - 120;

var fill = d3.scale.category20c();

var chord = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(innerRadius + 20);

var svg = d3.select('body').append('svg')
    .attr('width', outerRadius * 2)
    .attr('height', outerRadius * 2)
  .append('g')
    .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');

svg.append('g')
  .attr('transform', 'translate(' + (-outerRadius + 30) + ',' + (-outerRadius + 10) + ')')
  .attr('class', 'title')
.append('text')
  .attr("dy", "1em")
  .text('Selection of things to Fret over');

svg.append('g')
  .attr('transform', 'translate(' + (-outerRadius + 30) + ',' + (-outerRadius + 35) + ')')
  .attr('class', 'sub')
.append('text')
  .attr("dy", "1em")
  .text('Taken from Tool\'s Aenima');

d3.json('lyrics.json', function(error, imports) {
  var indexByName = d3.map(),
      nameByIndex = d3.map(),
      matrix = [],
      n = 0;

  // Compute a unique index for each package name.
  imports.forEach(function(d) {
    if (!indexByName.has(d = d.name)) {
      nameByIndex.set(n, d);
      indexByName.set(d, n++);
    }
  });

  // Construct a square matrix counting package imports.
  imports.forEach(function(d) {
    var source = indexByName.get(d.name),
        row = matrix[source];
    if (!row) {
     row = matrix[source] = [];
     for (var i = -1; ++i < n;) row[i] = 0;
    }
    d.followedBy.forEach(function(d) { row[indexByName.get(d)]++; });
  });

  chord.matrix(matrix);

  var g = svg.selectAll('.group')
      .data(chord.groups)
    .enter().append('g')
      .attr('class', 'group');

  g.append('path')
      .style('fill', function(d) { return fill(d.index); })
      .style('stroke', function(d) { return fill(d.index); })
      .attr('d', arc);

  g.append('text')
      .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
      .attr('dy', '.35em')
      .attr('transform', function(d) {
        return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')'
            + 'translate(' + (innerRadius + 26) + ')'
            + (d.angle > Math.PI ? 'rotate(180)' : '');
      })
      .style('text-anchor', function(d) { return d.angle > Math.PI ? 'end' : null; })
      .text(function(d) { return nameByIndex.get(d.index); });

  svg.selectAll('.chord')
      .data(chord.chords)
    .enter().append('path')
      .attr('class', 'chord')
      .style('stroke', function(d) { return d3.rgb(fill(d.source.index)).darker(); })
      .style('fill', function(d) { return fill(d.source.index); })
      .attr('d', d3.svg.chord().radius(innerRadius));

});

d3.select(self.frameElement).style('height', outerRadius * 2 + 'px');