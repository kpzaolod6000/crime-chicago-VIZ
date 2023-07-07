var svg = d3.select(".map1legend")
    .append("svg")
    .attr('width', 500)
    .attr('height', 100);

svg.append('text')
    .attr('x', 10)
    .attr('y', 10)
    .text('2009')
    .style('font-size', '16px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

    alert(1)