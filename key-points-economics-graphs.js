(function(){
"use strict";
const C={
"nature-concepts":[["Production possibility frontier","Food","Machines",[[0,100],[20,96],[40,84],[60,64],[80,36],[100,0]],"Points on the frontier use available resources efficiently; a point inside shows underutilisation."]],
"tools-analysis":[["Interpreting a line graph","Time","Price index",[[0,20],[20,28],[40,24],[60,48],[80,55],[100,70]],"An illustrative price index over time. Read the axis labels and scale before drawing conclusions."]],
"demand-supply":[["Demand curve","Quantity demanded","Price",[[10,90],[30,70],[50,50],[70,30],[90,10]],"Each point is a quantity demanded at one price. The whole curve represents demand."],["Supply curve","Quantity supplied","Price",[[10,10],[30,30],[50,50],[70,70],[90,90]],"Each point is a quantity supplied at one price. The whole curve represents supply."],["Market equilibrium","Quantity","Price",[[10,90],[30,70],[50,50],[70,30],[90,10]],"Demand and supply intersect at the equilibrium price and quantity.",[[10,10],[30,30],[50,50],[70,70],[90,90]]]],
"elasticity":[["Elastic and inelastic demand","Quantity demanded","Price",[[12,90],[34,70],[56,50],[78,30],[96,14]],"Flatter and steeper demand curves illustrate different responsiveness. Elasticity must be calculated from percentage changes.",[[42,90],[46,70],[50,50],[54,30],[58,10]]]],
"consumer-behaviour":[["Total and marginal utility","Units consumed","Utility",[[0,0],[20,35],[40,64],[60,82],[80,91],[100,86]],"Total utility can rise at a decreasing rate and eventually fall when marginal utility becomes negative."],["Budget line","Good X","Good Y",[[0,100],[100,0]],"The line shows affordable combinations when the whole budget is spent; a price change rotates the line."]],
"production":[["Total product","Labour","Total output",[[0,0],[17,16],[33,42],[50,69],[67,87],[83,100],[100,100]],"Total output rises while marginal product is positive; it levels off when marginal product reaches zero."],["Marginal product","Labour","Marginal output",[[0,25],[20,60],[40,85],[60,65],[80,30],[100,0]],"Diminishing marginal returns begin when marginal product starts falling, not when total output falls."]],
"costs-revenue":[["Average and marginal cost","Output","Cost per unit",[[10,85],[25,54],[40,40],[55,37],[70,48],[90,80]],"Illustrative U-shaped average cost.",[[10,70],[25,35],[40,20],[55,38],[70,70],[90,100]]],["Total cost and revenue","Output","Naira (relative scale)",[[0,25],[20,38],[40,51],[60,64],[80,77],[100,90]],"The gap between total revenue and total cost represents profit or loss.",[[0,0],[20,20],[40,40],[60,60],[80,80],[100,100]]]],
"market-structures":[["Competitive firm: P = AR = MR","Quantity","Price / revenue",[[0,55],[100,55]],"An individual perfectly competitive firm faces a horizontal price line."],["Monopoly: AR and MR","Quantity","Price / revenue",[[0,95],[100,20]],"With a downward-sloping demand (AR), marginal revenue generally lies below it.",[[0,85],[65,0]]]],
"business-organisations":[["Illustrative financing mix","Finance source","Share (%)",[[0,35],[33,70],[66,45],[100,25]],"Illustrative values only: business finance may combine owners' funds, loans, retained earnings and trade credit."]],
"distributive-trade":[["Distribution chain","Stage","Goods moving to consumers",[[0,15],[33,40],[66,70],[100,95]],"Illustrative flow from producer to wholesaler, retailer and consumer; not a numerical economic relationship."]]
};
function graph(spec){
const [title,xlab,ylab,first,note,second]=spec;
const pts=arr=>arr.map(([x,y])=>(44+x*2.45).toFixed(1)+","+(216-y*1.75).toFixed(1)).join(" ");
const line=(arr,color)=>'<polyline fill="none" stroke="'+color+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="'+pts(arr)+'"/>';
const ticks=[0,25,50,75,100].map(n=>'<text x="'+(44+n*2.45)+'" y="231" text-anchor="middle" font-size="10" fill="#66748b">'+n+'</text><text x="35" y="'+(220-n*1.75)+'" text-anchor="end" font-size="10" fill="#66748b">'+n+'</text>').join('');
return '<figure class="econ-figure"><figcaption>'+title+'</figcaption><svg viewBox="0 0 320 260" role="img" aria-label="'+title+'. '+note+'"><path d="M44 30 V216 H300" fill="none" stroke="#58677d" stroke-width="1.7"/>'+ticks+line(first,"#1763a6")+(second?line(second,"#d28a36"):"")+'<text x="170" y="250" text-anchor="middle" font-size="12" fill="#253e60">'+xlab+'</text><text x="6" y="16" font-size="12" fill="#253e60">'+ylab+'</text></svg><p>'+note+'</p></figure>';
}
window.renderEconomicsGraphs=function(id){
const host=document.getElementById("economics-visuals");if(!host)return;
host.replaceChildren();
if(!C[id])return;
const heading=document.createElement("h3");heading.textContent="Visual learning";host.appendChild(heading);
const intro=document.createElement("p");intro.textContent="Schematic teaching diagrams. Axis values are illustrative and should not be treated as observed economic data.";host.appendChild(intro);
const grid=document.createElement("div");grid.className="econ-graph-grid";grid.innerHTML=C[id].map(graph).join("");host.appendChild(grid);
};
})();