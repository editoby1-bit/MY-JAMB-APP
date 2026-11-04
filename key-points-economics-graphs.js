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
"market-structures":[["Competitive firm: P = AR = MR","Quantity","Price / revenue",[[0,55],[100,55]],"An individual perfectly competitive firm faces a horizontal price line."],["Monopoly: AR and MR","Quantity","Price / revenue",[[0,95],[100,20]],"With a downward-sloping demand (AR), marginal revenue generally lies below it.",[[0,85],[65,0]]]]
};
function graph(spec){
const [title,xlab,ylab,first,note,second]=spec;
const xy=([x,y])=>[44+x*2.45,216-y*1.75];
const pts=arr=>arr.map(p=>xy(p).map(v=>v.toFixed(1)).join(",")).join(" ");
const line=(arr,color)=>'<polyline fill="none" stroke="'+color+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="'+pts(arr)+'"/>';
const text=(x,y,value,color="#263e5d")=>'<text x="'+x+'" y="'+y+'" font-size="12" font-weight="700" fill="'+color+'">'+value+'</text>';
const dot=(x,y,label,dx=9,dy=-9)=>{const [px,py]=xy([x,y]);return '<circle cx="'+px+'" cy="'+py+'" r="4.5" fill="white" stroke="#1a416c" stroke-width="2"/>'+text(px+dx,py+dy,label);};
const guide=(x,y)=>{const [px,py]=xy([x,y]);return '<path d="M'+px+' '+py+' V216 M'+px+' '+py+' H44" stroke="#7489a2" stroke-width="1.3" stroke-dasharray="5 4" fill="none"/>';};
let extraNote="";if(title==="Production possibility frontier")extraNote="  A — ON THE CURVE: efficient production. B — INSIDE THE CURVE: underutilised resources. C — OUTSIDE THE CURVE: currently unattainable production.";if(title==="Elastic and inelastic demand")extraNote=" At their common price–quantity point, D₁ (blue, flatter) is relatively more elastic and D₂ (orange, steeper) is relatively less elastic. Slope alone does not establish elasticity at different points; elasticity uses percentage changes.";const ticks=[0,25,50,75,100].map(n=>'<text x="'+(44+n*2.45)+'" y="231" text-anchor="middle" font-size="10" fill="#66748b">'+n+'</text><text x="35" y="'+(220-n*1.75)+'" text-anchor="end" font-size="10" fill="#66748b">'+n+'</text>').join('');
let annotations="";
if(title==="Production possibility frontier"){
annotations+=dot(40,84,"A",-17,-12)+dot(35,38,"B",9,18)+dot(77,85,"C",9,-10);
annotations+='<circle cx="'+xy([35,38])[0]+'" cy="'+xy([35,38])[1]+'" r="3" fill="#1763a6"/><circle cx="'+xy([77,85])[0]+'" cy="'+xy([77,85])[1]+'" r="3" fill="#d28a36"/>';
}
if(title==="Demand curve"||title==="Supply curve"){
annotations+=dot(30,title==="Demand curve"?70:30,"A")+dot(70,title==="Demand curve"?30:70,"B");
annotations+=text(276,title==="Demand curve"?185:48,title==="Demand curve"?"D":"S");
}
if(title==="Market equilibrium"){
annotations+=guide(50,50)+dot(50,50,"E",10,-12)+text(48,121,"Pe")+text(167,214,"Qe");
annotations+=text(270,185,"D")+text(270,53,"S");
}
if(title==="Elastic and inelastic demand"){
annotations+=text(271,184,"D₁","#1763a6")+text(195,45,"D₂","#b26b17");
}
if(title==="Total and marginal utility"){
annotations+=dot(80,91,"Maximum TU",-91,-12)+text(268,86,"TU");
}
if(title==="Budget line"){
annotations+=dot(0,100,"Y-intercept",8,15)+dot(100,0,"X-intercept",-110,-12)+text(200,116,"BL");
}
if(title==="Total product"){
annotations+=dot(83,100,"TP maximum",-113,20)+text(282,42,"TP");
}
if(title==="Marginal product"){
annotations+=dot(40,85,"MP peak",9,-11)+dot(100,0,"MP = 0",-65,-12);
}
if(title==="Average and marginal cost"){
annotations+=dot(55,37,"AC minimum",-94,-12)+text(194,161,"MC crosses AC")+text(277,84,"MC","#b26b17")+text(279,140,"AC");
}
if(title==="Total cost and revenue"){
annotations+=text(276,52,"TR","#b26b17")+text(275,93,"TC");
annotations+=text(172,117,"Profit = TR − TC");
}
if(title==="Competitive firm: P = AR = MR"){
annotations+=text(224,109,"P = AR = MR");
}
if(title==="Monopoly: AR and MR"){
annotations+=text(265,166,"AR")+text(165,183,"MR","#b26b17");
}
return '<figure class="econ-figure"><figcaption>'+title+'</figcaption><svg viewBox="0 0 320 260" role="img" aria-label="'+title+'. '+note+'"><path d="M44 30 V216 H300" fill="none" stroke="#58677d" stroke-width="1.7"/>'+ticks+line(first,"#1763a6")+(second?line(second,"#d28a36"):"")+annotations+'<text x="170" y="250" text-anchor="middle" font-size="12" fill="#253e60">'+xlab+'</text><text x="6" y="16" font-size="12" fill="#253e60">'+ylab+'</text></svg><p>'+note+extraNote+'</p></figure>';
}
window.renderEconomicsGraphs=function(id){
const host=document.getElementById("economics-visuals"),lesson=document.getElementById("newText");
if(!host||!lesson)return;
host.replaceChildren();
if(!C[id])return;
const figures=C[id].map(spec=>{const el=document.createElement("div");el.className="econ-inline-visual";el.innerHTML=graph(spec);return el;});
const visuals=[];
if(id==="tools-analysis"){
const table=document.createElement("div");table.className="econ-inline-visual econ-data-tables";
table.innerHTML='<h4>Demand schedule</h4><table><thead><tr><th>Price (₦)</th><th>Quantity demanded</th></tr></thead><tbody><tr><td>100</td><td>30</td></tr><tr><td>200</td><td>20</td></tr><tr><td>300</td><td>10</td></tr></tbody></table>';
visuals.push({section:"1. TABLES AND SCHEDULES",element:table});
const charts=document.createElement("div");charts.className="econ-inline-visual";
charts.innerHTML='<h4>Bar chart and histogram</h4><div class="econ-graph-grid"><figure class="econ-figure"><figcaption>Bar chart — separate categories</figcaption><svg viewBox="0 0 320 220" role="img" aria-label="Bar chart of three categories"><path d="M35 20V190H305" fill="none" stroke="#58677d" stroke-width="2"/><rect x="58" y="110" width="47" height="80" fill="#1763a6"/><rect x="140" y="60" width="47" height="130" fill="#1763a6"/><rect x="222" y="20" width="47" height="170" fill="#1763a6"/><g font-size="10" text-anchor="middle"><text x="82" y="207">Agriculture</text><text x="164" y="207">Industry</text><text x="246" y="207">Services</text></g></svg><p>Bars have gaps for separate categories.</p></figure><figure class="econ-figure"><figcaption>Histogram — continuous classes</figcaption><svg viewBox="0 0 320 220" role="img" aria-label="Histogram with adjacent bars"><path d="M35 20V190H305" fill="none" stroke="#58677d" stroke-width="2"/><rect x="45" y="150" width="80" height="40" fill="#1763a6"/><rect x="125" y="110" width="80" height="80" fill="#1763a6"/><rect x="205" y="50" width="80" height="140" fill="#1763a6"/><g font-size="10" text-anchor="middle"><text x="85" y="207">0–9</text><text x="165" y="207">10–19</text><text x="245" y="207">20–29</text></g></svg><p>Histogram bars touch for adjacent intervals of equal width.</p></figure></div>';
visuals.push({section:"3. CHOOSING THE RIGHT CHART",element:charts});
const pie=document.createElement("div");pie.className="econ-inline-visual";
pie.innerHTML='<h4>Pie chart — household expenditure</h4><figure class="econ-figure"><div role="img" aria-label="Pie chart: food 40 percent, housing 30 percent, transport 15 percent and other 15 percent" style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center"><div style="width:190px;height:190px;flex:none;border-radius:50%;background:conic-gradient(#1763a6 0% 40%,#d28a36 40% 70%,#48a59a 70% 85%,#9275b9 85% 100%)"></div><div style="font-size:13px;line-height:2"><div>🔵 Food: 40% = 144°</div><div>🟠 Housing: 30% = 108°</div><div>🟢 Transport: 15% = 54°</div><div>🟣 Other: 15% = 54°</div></div></div><p>Sector angle = percentage × 360° ÷ 100. The four sectors total 100% and 360°.</p></figure>';
visuals.push({section:"3. CHOOSING THE RIGHT CHART",element:pie});
const freq=document.createElement("div");freq.className="econ-inline-visual econ-data-tables";
freq.innerHTML='<h4>Frequency and cumulative frequency</h4><table><thead><tr><th>Score</th><th>Frequency</th><th>Cumulative frequency</th></tr></thead><tbody><tr><td>0–9</td><td>2</td><td>2</td></tr><tr><td>10–19</td><td>3</td><td>5</td></tr><tr><td>20–29</td><td>5</td><td>10</td></tr></tbody></table>';
visuals.push({section:"10. FREQUENCY DISTRIBUTIONS",element:freq});
visuals.push({section:"2. GRAPHS: WHAT THE AXES MEAN",element:figures[0]});
}else{
const sections={
"nature-concepts":["PRODUCTION POSSIBILITY","PRODUCTION POSSIBILITY"],
"demand-supply":["1. DEMAND:","3. SUPPLY:","EQUILIBRIUM"],
"elasticity":["PRICE ELASTICITY","PRICE ELASTICITY"],
"consumer-behaviour":["TOTAL UTILITY","BUDGET LINE"],
"production":["TOTAL PRODUCT","MARGINAL PRODUCT"],
"costs-revenue":["AVERAGE COST","TOTAL REVENUE"],
"market-structures":["PERFECT COMPETITION","MONOPOLY"]
};
const terms=sections[id]||[];
figures.forEach((el,i)=>visuals.push({section:terms[i]||"",element:el}));
}
const raw=lesson.textContent;
const lines=raw.split("\n");
const placements=new Map();
for(const item of visuals){
const index=lines.findIndex(l=>l.toUpperCase().includes(item.section.toUpperCase()));
if(index<0){host.appendChild(item.element);continue;}
const target=Math.min(lines.length,index+3);
if(!placements.has(target))placements.set(target,[]);
placements.get(target).push(item.element);
}
lesson.replaceChildren();
lines.forEach((line,i)=>{
const span=document.createElement("span");span.textContent=line+(i<lines.length-1?"\n":"");lesson.appendChild(span);
const attached=placements.get(i+1)||[];
attached.forEach(el=>lesson.appendChild(el));
});
};
})();