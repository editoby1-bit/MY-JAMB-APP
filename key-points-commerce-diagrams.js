(function(){'use strict';
const diagrams={
'commerce-occupations':[{title:'Commerce: trade and aids to trade',nodes:['COMMERCE','TRADE|AIDS TO TRADE','Home trade / Foreign trade|Transport / Banking / Insurance / Warehousing / Advertising / Communication'],note:'Trade is buying and selling; aids to trade facilitate exchange.'}],
'production-factors':[{title:'Stages of production: rice',nodes:['PADDY FARMING','RICE MILLING','TRANSPORT AND TRADE','FINAL CONSUMER'],note:'Primary → secondary → tertiary activities → consumption.'},{title:'Division of labour: tailoring workshop',nodes:['MEASURE','CUT','SEW','INSPECT','DELIVER'],note:'Different workers can specialise in successive stages of one production process.'},{title:'Factors and rewards',nodes:['LAND → RENT|LABOUR → WAGES','CAPITAL → INTEREST|ENTERPRISE → PROFIT'],note:'Conventional JAMB associations; actual returns depend on business arrangements.'}],
'enterprise-location':[{title:'Forms of business combination',nodes:['BUSINESS COMBINATIONS','HORIZONTAL|VERTICAL|CONGLOMERATE','Same stage|Different related stages|Unrelated industries'],note:'Distinguish combinations by how the businesses are related.'}],
'sole-trade-partnership':[{title:'Business ownership and liability',nodes:['BUSINESS OWNERSHIP','SOLE TRADER|PARTNERSHIP','One owner|Two or more persons'],note:'Ordinary sole proprietors and general partners commonly face unlimited liability; legal exceptions exist.'}],
'cooperatives-public-enterprises':[{title:'Business reform: what changes?',nodes:['PUBLIC ENTERPRISE REFORM','PRIVATISATION|COMMERCIALISATION','Ownership moves to private investors|Government can retain ownership'],note:'Privatisation changes ownership; commercialisation changes the operating approach.'}],
'business-management':[{title:'Management control cycle',nodes:['SET TARGET','MEASURE ACTUAL RESULTS','COMPARE WITH TARGET','TAKE CORRECTIVE ACTION','REVIEW'],note:'Controlling compares actual performance with standards and corrects deviations.'}],
'business-finance':[{title:'Business finance: source and term',nodes:['BUSINESS FINANCE','INTERNAL|EXTERNAL','Retained earnings / Asset sales|Shares / Loans / Trade credit'],note:'Match the duration of finance to the duration of the need.'}],
'trade-retailing-wholesaling':[{title:'Typical distribution channel',nodes:['PRODUCER','WHOLESALER','RETAILER','FINAL CONSUMER'],note:'Some channels omit intermediaries; this is a common indirect channel.'}],
'trade-documents-payments':[{title:'Buying and selling documents',nodes:['ENQUIRY','QUOTATION','ORDER','DELIVERY NOTE','INVOICE','PAYMENT / RECEIPT'],note:'A common sequence; actual transactions may involve advance payment or different timing.'}],
'discounts-profit-ratios':[{title:'From sales to net profit',nodes:['NET SALES','LESS COST OF GOODS SOLD','GROSS PROFIT','LESS OPERATING EXPENSES','NET PROFIT'],note:'Use the question’s specified other income and expenses when calculating net profit.'}],
'banking-money':[{title:'Banking roles',nodes:['BANKING SYSTEM','CENTRAL BANK|COMMERCIAL BANK','Currency / Monetary policy|Deposits / Payments / Loans'],note:'The central bank and commercial banks perform different roles.'}],
'capital-market':[{title:'Primary and secondary securities markets',nodes:['SECURITIES MARKET','PRIMARY MARKET|SECONDARY MARKET','New securities / Issuer receives funds|Existing securities / Investors trade'],note:'The issuer usually receives proceeds in a primary issue, not in a secondary resale.'}],
'insurance-principles':[{title:'How insurance risk pooling works',nodes:['MANY POLICYHOLDERS','PREMIUMS PAID INTO POOL','COVERED CLAIMS ASSESSED','ELIGIBLE CLAIMS PAID'],note:'Payment depends on coverage, policy conditions and claim assessment.'}],
'transport-logistics':[{title:'Choosing a transport mode',nodes:['TRANSPORT NEED','ROAD|RAIL|SEA|AIR|PIPELINE','Flexible local delivery|Heavy land loads|Bulk overseas cargo|Urgent cargo|Suitable fluids'],note:'Compare cost, speed, accessibility, safety and the nature of the goods.'}],
'warehousing':[{title:'Reorder level: when to buy more stock',nodes:['AVERAGE DAILY DEMAND × LEAD TIME','ADD SAFETY STOCK','REORDER LEVEL'],note:'Example: 10 cartons daily × 5 days + 20 safety cartons = 70 cartons.'}],
'communication-ict':[{title:'The communication process',nodes:['SENDER','ENCODING AND MESSAGE','CHANNEL','RECEIVER DECODES','FEEDBACK TO SENDER'],note:'Noise can interfere at any stage; feedback checks understanding.'}],
'marketing-advertising':[{title:'The four Ps of marketing',nodes:['MARKETING MIX','PRODUCT|PRICE','PLACE|PROMOTION'],note:'Product: what is offered; Price: what is paid; Place: how it reaches buyers; Promotion: how it is communicated.'}],
'foreign-trade-documents':[{title:'Visible trade balance',nodes:['GOODS EXPORTS − GOODS IMPORTS','POSITIVE = SURPLUS|NEGATIVE = DEFICIT'],note:'A goods trade balance is only one component of the wider balance of payments.'}],
'economic-integration':[{title:'Stages of economic integration',nodes:['FREE-TRADE AREA','CUSTOMS UNION','COMMON MARKET','ECONOMIC UNION'],note:'Successive stages generally add external tariff coordination, factor mobility and deeper policy coordination.'}],
'law-contract-agency':[{title:'How a contract is formed',nodes:['OFFER','UNQUALIFIED ACCEPTANCE','CONSIDERATION / INTENTION / CAPACITY / LEGALITY','ENFORCEABLE CONTRACT'],note:'An invitation to treat is not ordinarily the offer itself; all relevant legal requirements must be met.'}],
'consumer-business-environment':[{title:'SWOT: inside and outside the business',nodes:['SWOT ANALYSIS','INTERNAL FACTORS|EXTERNAL FACTORS','Strengths / Weaknesses|Opportunities / Threats'],note:'Strengths and weaknesses are internal; opportunities and threats arise externally.'}],
'tourism':[{title:'Tourism by direction of travel',nodes:['TOURISM','DOMESTIC|INBOUND|OUTBOUND','Residents travel at home|Non-residents visit|Residents travel abroad'],note:'Inbound and outbound are defined from the perspective of the country being studied.'}],
'trade-associations':[{title:'Different business and worker bodies',nodes:['ORGANISATIONS','TRADE ASSOCIATION|CHAMBER OF COMMERCE','One trade or industry|Businesses across trades'],note:'A trade union chiefly represents workers; a professional body focuses on occupational standards.'}],
'business-computing':[{title:'Computer information-processing cycle',nodes:['INPUT','PROCESSING','OUTPUT','STORAGE / FEEDBACK'],note:'Input supplies raw data; processing transforms it into useful output that can be stored.'}],
'office-communication':[{title:'Communication and feedback',nodes:['SENDER ENCODES','MESSAGE VIA CHANNEL','RECEIVER DECODES','FEEDBACK RETURNS'],note:'Noise can disrupt the message; feedback helps confirm understanding.'}],
'securities-capital-calculations':[{title:'Share value distinctions',nodes:['SHARE','NOMINAL VALUE|ISSUE PRICE|MARKET PRICE','Stated face value|New issue price|Investor resale price'],note:'A secondary-market trade does not ordinarily provide new capital to the issuing company.'}],
'banking-policy-payments':[{title:'The three parties to a cheque',nodes:['DRAWER WRITES CHEQUE','DRAWEE BANK IS ORDERED TO PAY','PAYEE RECEIVES PAYMENT'],note:'The drawer is the account holder, the drawee is the bank, and the payee is the recipient.'}],
'external-trade-terms':[{title:'Documentary credit payment flow',nodes:['IMPORTER REQUESTS CREDIT','ISSUING BANK OPENS CREDIT','EXPORTER SHIPS GOODS','DOCUMENTS PRESENTED AND CHECKED','PAYMENT UNDER CREDIT TERMS'],note:'Banks examine stipulated documents rather than physically verifying every item shipped.'}],
'business-legal-protection':[{title:'Intellectual-property categories',nodes:['INTELLECTUAL PROPERTY','COPYRIGHT|TRADEMARK','PATENT|INDUSTRIAL DESIGN'],note:'Expression, identifying signs, inventions and ornamental designs are different forms of protected subject matter.'}],
'companies-liquidation':[{title:'Company financing: shares and debentures',nodes:['COMPANY FINANCE','SHARES|DEBENTURES','Ownership capital|Borrowed capital','Dividend (if declared)|Interest (as agreed)'],note:'Shareholders are owners; debenture holders are creditors.'},{title:'Simplified company winding-up',nodes:['WINDING-UP DECISION','LIQUIDATOR APPOINTED','ASSETS REALISED','CLAIMS PAID IN LEGAL PRIORITY','SURPLUS TO MEMBERS (IF ANY)'],note:'Illustrative sequence only; legal priorities and procedures depend on applicable law.'}]
};
function make(d){
const fig=document.createElement('figure');fig.className='commerce-figure';
const cap=document.createElement('figcaption');cap.textContent=d.title;fig.appendChild(cap);
const rows=d.nodes.map(v=>v.split('|')),ns='http://www.w3.org/2000/svg';
const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 600 '+(rows.length*84+14));svg.setAttribute('role','img');svg.setAttribute('aria-label',d.title+'. '+d.note);
const maxCols=Math.max(...rows.map(r=>r.length));const fontSize=maxCols>2?13:15;
function wrapText(value,max){const words=value.split(' '),out=[''];for(const word of words){let n=out.length-1;if((out[n]+' '+word).trim().length>max&&out[n])out.push(word);else out[n]=(out[n]+' '+word).trim()}return out.slice(0,3)}
rows.forEach((cells,i)=>{const gap=16,usable=560,boxW=(usable-gap*(cells.length-1))/cells.length,y=8+i*84;
cells.forEach((value,j)=>{const x=20+j*(boxW+gap);const rect=document.createElementNS(ns,'rect');for(const [k,v] of Object.entries({x,y,width:boxW,height:62,rx:12,fill:i===0?'#e2edfa':'#eaf6f0',stroke:'#a5bacb','stroke-width':1.5}))rect.setAttribute(k,v);svg.appendChild(rect);
const lines=wrapText(value,Math.floor(boxW/(fontSize*.61)));const t=document.createElementNS(ns,'text');t.setAttribute('x',x+boxW/2);t.setAttribute('y',y+31-(lines.length-1)*9);t.setAttribute('text-anchor','middle');t.setAttribute('font-size',fontSize);t.setAttribute('font-weight','650');t.setAttribute('fill','#183755');lines.forEach((line,k)=>{const span=document.createElementNS(ns,'tspan');span.setAttribute('x',x+boxW/2);span.setAttribute('dy',k===0?'0':'18');span.textContent=line;t.appendChild(span)});svg.appendChild(t)});
if(i<rows.length-1){const arrow=document.createElementNS(ns,'text');arrow.setAttribute('x',300);arrow.setAttribute('y',y+77);arrow.setAttribute('text-anchor','middle');arrow.setAttribute('font-size','17');arrow.setAttribute('fill','#53718b');arrow.textContent='↓';svg.appendChild(arrow)}
});fig.appendChild(svg);const p=document.createElement('p');p.textContent=d.note;fig.appendChild(p);return fig}
const placements={
'commerce-occupations':['1. MEANING AND SCOPE OF COMMERCE'],
'production-factors':['2. STAGES OF PRODUCTION','5. SPECIALISATION AND DIVISION OF LABOUR','3. FACTORS OF PRODUCTION'],
'enterprise-location':['BUSINESS COMBINATION'],
'sole-trade-partnership':['PARTNERSHIP'],
'companies-liquidation':['SHARES','LIQUIDATION'],
'cooperatives-public-enterprises':['7. PRIVATISATION','7. PRIVATISATION'].slice(0,1),
'business-management':['2. FUNCTIONS OF MANAGEMENT'],
'business-finance':['2. INTERNAL AND EXTERNAL SOURCES'],
'trade-retailing-wholesaling':['2. CHANNELS OF DISTRIBUTION'],
'trade-documents-payments':['1. THE NORMAL BUYING AND SELLING PROCEDURE'],
'discounts-profit-ratios':['3. COST PRICE, SELLING PRICE AND GROSS PROFIT'],
'banking-money':['4. CENTRAL BANK VERSUS COMMERCIAL BANK'],
'capital-market':['2. PRIMARY AND SECONDARY MARKETS'],
'insurance-principles':['1. MEANING OF INSURANCE'],
'transport-logistics':['7. FACTORS IN CHOOSING TRANSPORT'],
'warehousing':['5. REORDER LEVEL AND BUFFER STOCK'],
'communication-ict':['2. ELEMENTS OF THE COMMUNICATION PROCESS'],
'marketing-advertising':['3. THE MARKETING MIX'],
'foreign-trade-documents':['3. VISIBLE AND INVISIBLE TRADE'],
'economic-integration':['6. ECONOMIC UNION AND MONETARY UNION'],
'law-contract-agency':['1. MEANING OF CONTRACT'],
'consumer-business-environment':['4. SWOT ANALYSIS'],
'tourism':['2. DOMESTIC, INBOUND AND OUTBOUND TOURISM'],
'trade-associations':['6. TRADE ASSOCIATION VERSUS CHAMBER'],
'business-computing':['2. INFORMATION-PROCESSING CYCLE'],
'office-communication':['2. THE COMMUNICATION PROCESS'],
'securities-capital-calculations':['4. NOMINAL, ISSUE AND MARKET VALUES'],
'banking-policy-payments':['6. CHEQUES: THE THREE PARTIES'],
'external-trade-terms':['7. LETTER OF CREDIT'],
'business-legal-protection':['2. INTELLECTUAL PROPERTY: THE BIG DISTINCTIONS']
};
window.renderCommerceDiagrams=function(id){
const host=document.getElementById('commerce-visuals'),lesson=document.getElementById('newText');
if(host)host.replaceChildren();
if(!lesson||!id||!diagrams[id])return;
const raw=lesson.textContent,lines=raw.split('\n'),items=diagrams[id],targets=placements[id]||[],inserts=new Map();
items.forEach((d,i)=>{
const term=targets[i]||'',needle=term.toUpperCase();
let index=needle?lines.findIndex(l=>l.toUpperCase().includes(needle)):-1;
if(index<0){const fallback=lines.findIndex(l=>/^\d+\. /.test(l));index=fallback>=0?fallback:Math.min(2,lines.length-1)}
const at=Math.min(lines.length,index+1);
if(!inserts.has(at))inserts.set(at,[]);
inserts.get(at).push(make(d));
});
lesson.replaceChildren();
lines.forEach((line,i)=>{const span=document.createElement('span');span.textContent=line+(i<lines.length-1?'\n':'');lesson.appendChild(span);(inserts.get(i+1)||[]).forEach(fig=>lesson.appendChild(fig))});
};
})();