/* Shared Mathematics lesson renderer — identical preview/live DOM output. */
(function(){
function appendMathText(target,value){
 if(value.includes('[[frac:')){
  const tokens=/\[\[frac:([^|]+)\|([^\]]+)\]\]/g;
  let pos=0,match;
  while((match=tokens.exec(value))!==null){
   if(match.index>pos)appendMathText(target,value.slice(pos,match.index));
   const fraction=document.createElement('span');
   fraction.className='math-stacked-fraction';
   fraction.setAttribute('aria-label',match[1]+' divided by '+match[2]);
   const numerator=document.createElement('span');numerator.textContent=match[1];
   const denominator=document.createElement('span');denominator.textContent=match[2];
   fraction.append(numerator,denominator);target.appendChild(fraction);
   pos=tokens.lastIndex;
  }
  if(pos>0){if(pos<value.length)appendMathText(target,value.slice(pos));return;}
 }
 const re=/(^|[^\d])([1-9]\d*)\s+([1-9]\d*)\/([1-9]\d*)(?!\d)/g;
 let last=0,m;
 while((m=re.exec(value))!==null){
  target.appendChild(document.createTextNode(value.slice(last,m.index)+m[1]));
  const mixed=document.createElement('span');mixed.className='math-mixed-number';mixed.setAttribute('aria-label',m[2]+' and '+m[3]+' over '+m[4]);
  const whole=document.createElement('span');whole.textContent=m[2];mixed.appendChild(whole);
  const fraction=document.createElement('span');fraction.className='math-stacked-fraction';
  const top=document.createElement('span');top.textContent=m[3];
  const bottom=document.createElement('span');bottom.textContent=m[4];
  fraction.append(top,bottom);mixed.appendChild(fraction);target.appendChild(mixed);
  last=re.lastIndex;
 }
 target.appendChild(document.createTextNode(value.slice(last)));
}
function appendMathFormatted(target,source){
 const lines=source.split('\n');let i=0;
 while(i<lines.length){
  const line=lines[i];
  if(/^Example \([ivxlcdm]+\):/i.test(line)){
   const block=document.createElement('div');block.className='math-worked-example';
   const question=document.createElement('div');question.className='math-example-question';appendMathText(question,line);block.appendChild(question);
   let j=i+1;const solution=[];if(lines[j]?.trim()==='Solution')j++;
   while(j<lines.length&&!/^Example \([ivxlcdm]+\):/i.test(lines[j])&&!/^\d+\. [A-Z]/.test(lines[j])&&!/^(COMMON ERRORS|PRACTISE AND CHECK|ANSWERS WITH REASONS|FINAL UNDERSTANDING CHECK|ADDITIONAL FULLY WORKED JAMB EXAMPLES|WHAT YOU WILL LEARN|VISUAL CHECK)$/.test(lines[j].trim())){if(lines[j].trim()||solution.length)solution.push(lines[j]);j++;}
   if(solution.length){const answer=document.createElement('div');answer.className='math-example-solution';const tag=document.createElement('strong');tag.textContent='Solution';answer.appendChild(tag);const steps=document.createElement('div');appendMathText(steps,solution.join('\n'));answer.appendChild(steps);block.appendChild(answer);}
   else{question.classList.add('math-example-inline');}
   target.appendChild(block);i=j;continue;
  }
  const ordinary=[];while(i<lines.length&&!/^Example \([ivxlcdm]+\):/i.test(lines[i])){ordinary.push(lines[i]);i++;}
  if(ordinary.length){const span=document.createElement('span');appendMathText(span,ordinary.join('\n')+(i<lines.length?'\n':''));target.appendChild(span);}
 }
}

function renderSharedMathematicsLesson(revisedText,content,lessonId,diagramLibrary){
  const pattern=/\[LESSON_DIAGRAM(?::([a-z0-9-]+))?\]/g;
  // Parse the complete lesson first. Splitting at a diagram marker previously
  // ended a worked example before its Solution and leaked steps into plain text.
  const frag=document.createDocumentFragment();
  appendMathFormatted(frag,content);
  revisedText.textContent='';
  revisedText.appendChild(frag);
  let inserted=0;
  const walker=document.createTreeWalker(revisedText,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())if(walker.currentNode.nodeValue.includes('[LESSON_DIAGRAM'))nodes.push(walker.currentNode);
  for(const node of nodes){
    const pieces=node.nodeValue.split(pattern);
    // Split using match positions to preserve multiple diagrams in one text node.
    const original=node.nodeValue;
    const matches=Array.from(original.matchAll(/\[LESSON_DIAGRAM(?::([a-z0-9-]+))?\]/g));
    const holder=document.createDocumentFragment();
    let cursor=0;
    for(const match of matches){
      if(match.index>cursor)holder.appendChild(document.createTextNode(original.slice(cursor,match.index)));
      const diagram=diagramLibrary[match[1]||lessonId];
      if(diagram){
        const box=document.createElement('div');
        if(false && ['stats-table','stats-hist','stats-ogive'].includes(match[1])){
          const tag=document.createElement('div');tag.className='math-diagram-review-tag';tag.textContent='● Pending verification';box.appendChild(tag);
        }
        box.insertAdjacentHTML('beforeend',diagram);
        const visual=document.createElement('div');visual.className='math-example-visual';
        if(lessonId==='equations'&&match[1]==='equations-lines'){
          const caption=document.createElement('div');caption.className='math-example-diagram-caption';
          caption.textContent='GRAPH FOR EXAMPLE (x) — Intersection at (1, 3)';
          visual.appendChild(caption);
        }
        visual.appendChild(box);
        holder.appendChild(visual);
        inserted++;
      }
      cursor=match.index+match[0].length;
    }
    if(cursor<original.length)holder.appendChild(document.createTextNode(original.slice(cursor)));
    node.replaceWith(holder);
  }
  // Keep the worked graphical example in teaching order, with a real table.
  if(lessonId==='equations'){
    const blocks=Array.from(revisedText.querySelectorAll('.math-worked-example'));
    const example=blocks.find(b=>b.querySelector('.math-example-question')?.textContent.includes('Example (x): Solve y=2x+1'));
    const answer=example?.querySelector('.math-example-solution');
    if(answer){
      const graph=answer.querySelector('.math-example-visual');
      const heading=answer.querySelector('strong');
      answer.replaceChildren();
      if(heading)answer.appendChild(heading);
      const addStep=(value)=>{const p=document.createElement('p');p.textContent=value;p.style.margin='9px 0';answer.appendChild(p);};
      addStep('Step 1 — Choose x-values for the table. The question does not supply x-values, so we choose 0, 1 and 2 ourselves. They give simple whole-number y-values and convenient points to plot. These values do not come from the numbers appearing in the equations.');
      addStep('Rule: For a straight line, two distinct points are sufficient, but a third point helps check accuracy. Choose any permitted x-values that give manageable y-values and fit the graph scale. If a question specifies a range, choose values within that range.');
      addStep('Substitute x = 0, 1 and 2 into each equation to complete the table.');
      const table=document.createElement('table');table.className='math-values-table';
      [['x','0','1','2'],['y = 2x + 1','1','3','5'],['y = −x + 4','4','3','2']].forEach((cells,i)=>{
        const tr=document.createElement('tr');
        cells.forEach(v=>{const c=document.createElement(i===0?'th':'td');c.textContent=v;tr.appendChild(c);});
        table.appendChild(tr);
      });
      answer.appendChild(table);
      addStep('For y = 2x + 1, the points are (0,1), (1,3) and (2,5). For y = −x + 4, the points are (0,4), (1,3) and (2,2).');
      addStep('Step 2 — Plot each set of points and join them with a straight line, using the same scale on both axes.');
      addStep('Step 3 — Read the point where the lines intersect.');
      if(graph)answer.appendChild(graph);
      addStep('The lines meet at (1,3), so x = 1 and y = 3.');
      addStep('Check: 2(1) + 1 = 3 and −1 + 4 = 3. Both equations are satisfied.');
      // Follow-up example: x-values supplied by the question, not selected by the student.
      if(!example.parentElement.querySelector('[data-supplied-x-example]')){
        const supplied=document.createElement('div');
        supplied.className='math-worked-example';
        supplied.setAttribute('data-supplied-x-example','true');
        const q=document.createElement('div');q.className='math-example-question';
        q.textContent='Example (x-b): Given x = −1, 0, 1 and 2, complete a table of values for y = 2x + 1 and y = −x + 4. Hence find the solution of the simultaneous equations graphically.';
        const sol=document.createElement('div');sol.className='math-example-solution';
        const sh=document.createElement('strong');sh.textContent='Solution';sol.appendChild(sh);
        const p=(t)=>{const el=document.createElement('p');el.textContent=t;el.style.margin='9px 0';sol.appendChild(el);};
        p('Step 1 — The question already gives x = −1, 0, 1 and 2. Use those exact values; do not replace them with values of your own.');
        p('For y = 2x + 1: when x = −1, y = 2(−1) + 1 = −1; when x = 0, y = 1; when x = 1, y = 3; when x = 2, y = 5.');
        p('For y = −x + 4: when x = −1, y = −(−1) + 4 = 5; when x = 0, y = 4; when x = 1, y = 3; when x = 2, y = 2.');
        const t=document.createElement('table');t.className='math-values-table';
        [['x','−1','0','1','2'],['y = 2x + 1','−1','1','3','5'],['y = −x + 4','5','4','3','2']].forEach((cells,i)=>{const tr=document.createElement('tr');cells.forEach(v=>{const cell=document.createElement(i===0?'th':'td');cell.textContent=v;tr.appendChild(cell);});t.appendChild(tr);});
        sol.appendChild(t);
        p('Step 2 — Plot the points for each equation on the same axes, using a scale that includes x = −1 and y = −1. Join each set of points with a straight line.');
        // Draw the supplied-value example from its own four-point table.
        const figure=document.createElement('figure');
        figure.style.margin='16px 0';
        const caption=document.createElement('figcaption');
        caption.textContent='GRAPH FOR EXAMPLE (x-b) — Using the supplied x-values';
        caption.style.cssText='font-weight:700;margin-bottom:8px;color:#17436d';
        const ns='http://www.w3.org/2000/svg';
        const svg=document.createElementNS(ns,'svg');
        svg.setAttribute('viewBox','0 0 500 390');
        svg.setAttribute('role','img');
        svg.setAttribute('aria-label','Graph of y equals 2x plus 1 and y equals negative x plus 4 using supplied x values negative 1, 0, 1, 2; intersection at 1 comma 3');
        svg.style.cssText='width:100%;height:auto;background:white;border-radius:6px';
        const left=100,top=32,scale=53;
        const X=x=>left+x*scale,Y=y=>top+(5-y)*scale;
        const line=(x1,y1,x2,y2,color,width=1.2,dash='')=>{const e=document.createElementNS(ns,'line');for(const [k,v] of Object.entries({x1,y1,x2,y2,stroke:color,'stroke-width':width}))e.setAttribute(k,v);if(dash)e.setAttribute('stroke-dasharray',dash);svg.appendChild(e);};
        const label=(x,y,value,color='#253b55',size=13)=>{const e=document.createElementNS(ns,'text');e.setAttribute('x',x);e.setAttribute('y',y);e.setAttribute('fill',color);e.setAttribute('font-size',size);e.textContent=value;svg.appendChild(e);};
        for(let x=-1;x<=3;x++){line(X(x),Y(5),X(x),Y(-1),'#e3eaf1');label(X(x)-4,Y(-1)+21,String(x));}
        for(let y=-1;y<=5;y++){line(X(-1),Y(y),X(3),Y(y),'#e3eaf1');label(X(-1)-23,Y(y)+4,String(y));}
        line(X(-1)-12,Y(0),X(3)+12,Y(0),'#293d55',2);
        line(X(0),Y(-1)+12,X(0),Y(5)-12,'#293d55',2);
        label(X(3)+17,Y(0)+4,'x');label(X(0)+7,Y(5)-16,'y');
        const series=[
          {points:[[-1,-1],[0,1],[1,3],[2,5]],color:'#1769bd',name:'y = 2x + 1',lx:X(1.45),ly:Y(5)-12},
          {points:[[-1,5],[0,4],[1,3],[2,2]],color:'#cf4930',name:'y = −x + 4',lx:X(1.9),ly:Y(2)-12}
        ];
        for(const item of series){
          const poly=document.createElementNS(ns,'polyline');
          poly.setAttribute('points',item.points.map(([x,y])=>X(x)+','+Y(y)).join(' '));
          poly.setAttribute('fill','none');poly.setAttribute('stroke',item.color);poly.setAttribute('stroke-width','3');
          svg.appendChild(poly);
          for(const [x,y] of item.points){const c=document.createElementNS(ns,'circle');c.setAttribute('cx',X(x));c.setAttribute('cy',Y(y));c.setAttribute('r',4);c.setAttribute('fill',item.color);svg.appendChild(c);}
          label(item.lx,item.ly,item.name,item.color,13);
        }
        const intersection=document.createElementNS(ns,'circle');
        intersection.setAttribute('cx',X(1));intersection.setAttribute('cy',Y(3));intersection.setAttribute('r',6);intersection.setAttribute('fill','#12805a');svg.appendChild(intersection);
        label(X(1)+9,Y(3)-9,'(1, 3)','#12805a',14);
        figure.append(caption,svg);sol.appendChild(figure);
        p('Step 3 — The lines intersect at (1, 3), so x = 1 and y = 3.');
        p('Check: 2(1) + 1 = 3 and −1 + 4 = 3. Both equations agree.');
        p('Remember: When x-values are supplied, use them. When none are supplied, choose convenient values unless the question gives another instruction.');
        supplied.append(q,sol);
        example.insertAdjacentElement('afterend',supplied);
      }
    }
  }
  if(!inserted&&diagramLibrary[lessonId]&&!content.includes('[LESSON_DIAGRAM')){const box=document.createElement('div');box.innerHTML=diagramLibrary[lessonId];revisedText.appendChild(box);}
}

window.renderSharedMathematicsLesson=renderSharedMathematicsLesson;
})();
