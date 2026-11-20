/** Install 51 reviewed Literature lessons after the historical question/topic bank. */
(function(){
 const data=window.TEACH_TOPICS?.literature,review=window.LITERATURE_REVIEW_LESSONS;
 if(!data||!Array.isArray(review)||review.length!==51){console.error('Literature lesson bridge: missing original mapping or revised lessons');return;}
 const base={
 'figures-of-speech':'figures-of-speech','poetry':'poetry','drama':'drama','prose':'prose',
 'literary-history':'literary-periods','appreciation-poetry':'unseen-poetry-workshop',
 'appreciation-prose':'prose-extract-workshop','appreciation-drama':'dramatic-extract-workshop',
 'set-african-prose':'prescribed-prose-study','set-non-african-prose':'prescribed-prose-study',
 'set-african-drama':'prescribed-drama-study','set-non-african-drama':'prescribed-drama-study',
 'set-african-poetry':'prescribed-poetry-study','set-non-african-poetry':'prescribed-poetry-study'
 };
 const lessons={};
 for(const x of review)lessons[x.id]={id:x.id,title:x.new.title,body:x.new.body};
 const mapped={};
 for(const [key,oldId] of Object.entries(data.of||{})){
   const id=base[oldId];
   if(id&&lessons[id])mapped[key]=id;
 }
 data.legacyOf=data.of;
 data.lessons=lessons;
 data.of=mapped;
 data.revisedLessonCount=review.length;
})();
