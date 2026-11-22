(() => {
 const data=JSON.parse(document.getElementById('manual-vocab-data').textContent);
 document.addEventListener('click',event=>{
  const button=event.target.closest('button.vocab');if(!button)return;
  const sentence=button.closest('.reading-sentence');if(!sentence)return;
  const key=button.dataset.vocab;const entry=data[Number(key)];if(!entry)return;
  let slide=sentence.nextElementSibling;
  if(!slide?.classList.contains('word-slide')){
   slide=document.createElement('span');slide.className='word-slide';slide.id=sentence.id+'-word-card';
   slide.innerHTML='<div><div class="word-card"></div></div>';sentence.after(slide);
  }
  const close=slide.dataset.key===key&&slide.classList.contains('open');
  for(const word of sentence.querySelectorAll('button.vocab')){
   word.setAttribute('aria-expanded','false');word.setAttribute('aria-controls',slide.id);
  }
  slide.dataset.key=key;const [word,ko,definition]=entry;const card=slide.querySelector('.word-card');card.replaceChildren();
  const title=document.createElement('strong');title.textContent=word+' · '+ko;
  const detail=document.createElement('p');detail.textContent=definition;card.append(title,detail);
  slide.classList.toggle('open',!close);slide.setAttribute('aria-hidden',String(close));
  button.setAttribute('aria-expanded',String(!close));
 });
})();
