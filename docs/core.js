(function(root){
const names=['Sourdough Essentials','Artisan Bread','French Pastries','French Macarons','Cake Decorating','Chocolate Workshop','Cookies & Biscuits','Puff Pastry','Celebration Cakes','Pineapple Tarts','Singapore Classics','Thai Home Cooking','Japanese Favourites','Italian Pasta','Indian Spices','Chinese Dim Sum','Family Meals','Vegan Kitchen','Seafood Basics','Kitchen Essentials'];
const fees=[680,420,380,320,450,280,180,360,480,240,350,300,340,290,260,310,220,200,390,160];
const courses=names.map((name,i)=>({id:(i<10?'BAK-':'CUL-')+(i<10?101+i:201+i-10),name,fee:fees[i],category:i<10?'Baking':'Cooking',campus:i%2?'Tampines':'Bukit Timah',duration:i===0?'3 sessions':'1 session',allergen:i===3?'Contains nuts. Not suitable for people with nut allergies. Contact the academy before booking.':'Check ingredients and allergy suitability with the academy before booking.'}));
const sources={allergy:{title:'BAK-104 · Allergen information',text:courses[3].allergen},fees:{title:'Course catalogue · Course fees',text:'Kitchen Essentials (CUL-210) is S$160. This is the lowest fee in this catalogue.'},policy:{title:'Course guide · Refund policy',text:'For cancellation 5 days before the start, the course guide gives a 50% refund or a free transfer. Confirm the current policy with the academy.'}};
function answer(q){const s=String(q).toLowerCase();
if(/weather|politic|bitcoin|football/.test(s))return{text:'Sorry, I can only help with Cook & Bake courses and the information in our course documents. Please contact the academy for other enquiries.',sources:[]};
if(/ignore|90%|discount|reveal.*instruction/.test(s))return{text:'I cannot invent a discount or override the course information. Please contact the academy to confirm available offers.',sources:[]};
if(/nut|allerg|macaron/.test(s))return{text:'The French Macarons course (BAK-104) contains nuts and is not suitable for someone with a nut allergy. Please contact the academy to discuss a suitable alternative.',sources:['allergy']};
if(/cheapest|least expensive|lowest.*fee/.test(s))return{text:sources.fees.text,sources:['fees']};
if(/refund|cancel/.test(s))return{text:sources.policy.text,sources:['policy']};
const c=courses.find(c=>s.includes(c.id.toLowerCase())||s.includes(c.name.toLowerCase())||(s.includes('sourdough')&&c.id==='BAK-101'));
if(c)return{text:`${c.name} (${c.id}) costs S$${c.fee}. Campus: ${c.campus}. Duration: ${c.duration}.`,sources:['catalogue:'+c.id]};
return{text:'Sorry, I could not find that information in the course documents. Please contact the academy so a member of staff can help.',sources:[]};}
function validate(d){const errors={};if(!String(d.name||'').trim())errors.name='Enter your name.';if(!/^[89]\d{7}$/.test(String(d.mobile||'').trim()))errors.mobile='Enter an 8-digit Singapore mobile number starting with 8 or 9.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.email||'')))errors.email='Enter a valid email address, such as learner@example.com.';if(!d.consent)errors.consent='Please agree before continuing.';return errors;}
const api={courses,sources,answer,validate};root.CookBake=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
