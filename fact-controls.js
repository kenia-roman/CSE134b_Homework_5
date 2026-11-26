const factPanel=document.querySelector('fact-panel');
const compactToggle=document.querySelector('#fact-compact-toggle');
const STORAGE_KEY='hw5-fact-panel-mode';
if(factPanel&&compactToggle){
  function applyCompact(compact){
    factPanel.toggleAttribute('compact',compact);
    compactToggle.textContent=compact?'Switch to expanded view':'Switch to compact view';
    compactToggle.setAttribute('aria-pressed',String(compact));
  }
  let saved='expanded';
  try {const value=localStorage.getItem(STORAGE_KEY);if(value==='compact'||value==='expanded')saved=value;}catch(error){console.warn('Preference read unavailable',error);}
  applyCompact(saved==='compact');
  compactToggle.hidden=false;
  compactToggle.addEventListener('click',()=>{
    const compact=!factPanel.hasAttribute('compact');
    applyCompact(compact);
    try{localStorage.setItem(STORAGE_KEY,compact?'compact':'expanded');}catch(error){console.warn('Preference save unavailable',error);}
  });
}
