/** Static CRS preview release gates. Run: node tests/crs-preview-release.cjs */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{}});
for(const file of ['key-points-review-crs.js','crs-understanding-quizzes.js','teach/crs-topics.js']){
 vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
}
const lessons=context.window.CRS_REVIEW_LESSONS;
const quizzes=context.window.CRS_UNDERSTANDING_QUIZZES;
const mapping=context.window.TEACH_TOPICS.crs.of;
assert.equal(lessons.length,36);
assert.equal(new Set(lessons.map(x=>x.id)).size,36);
assert.equal(Object.keys(quizzes).length,36);
for(const lesson of lessons){
 assert(lesson.revised,'Not revised: '+lesson.id);
 assert(lesson.new.body.split(/\s+/).length>=750,'Insufficient lesson depth: '+lesson.id);
 const qs=quizzes[lesson.id];
 assert(qs&&qs.length===5,'Exactly five checks required: '+lesson.id);
 assert(Object.values(mapping).includes(lesson.id),'No mapped JAMB questions: '+lesson.id);
 for(const q of qs){
  assert(q.question&&q.explanation,'Incomplete check: '+lesson.id);
  if(q.options){assert.equal(q.options.length,4);assert(Number.isInteger(q.correctIndex)&&q.correctIndex>=0&&q.correctIndex<4);}
 }
}
const html=fs.readFileSync(path.join(root,'key-points-review-v2.html'),'utf8');
assert(html.includes('crs-understanding-quizzes.js'));
assert(html.includes('key-points-review-crs.js'));
assert(html.includes('startTopicPractice(\'past\')'));
assert(html.includes('id="quickCheckBtn"'));
assert(html.includes('id="previewPracticeBtn"'));
console.log('CRS static release checks passed: 36 lessons, 180 independent checks, mapped past-question practice.');
