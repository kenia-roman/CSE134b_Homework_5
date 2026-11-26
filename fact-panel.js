class FactPanel extends HTMLElement {
  static get observedAttributes() { return ['compact']; }
  constructor() {
    super();
    this.facts = [
      'A group of flamingos is called a flamboyance.',
      'Octopuses have three hearts.',
      'A day on Venus lasts longer than a Venusian year.'
    ];
    this.index = 0;
    this.loading = false;
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    if (this.shadowRoot.childElementCount) return;
    const style = document.createElement('style');
    style.textContent = `:host{display:block;color:var(--fact-text,#24202a);font-family:var(--body-font,system-ui)}.panel{background:var(--fact-bg,#fff);border:1px solid var(--fact-border,#e6b6d0);border-radius:20px;padding:1.5rem;box-shadow:0 12px 35px rgba(90,20,80,.09)}h3{text-align:left;font-family:var(--heading-font,serif);margin:0 0 .7rem}p{line-height:1.7;margin:.5rem 0}button{background:var(--fact-accent,#a52c71);color:var(--fact-button-text,#fff);border:0;border-radius:999px;padding:.75rem 1.2rem;cursor:pointer;font:inherit;margin-top:.7rem}button:disabled{opacity:.65;cursor:wait}button:focus-visible{outline:3px solid var(--fact-focus,#d86a9a);outline-offset:4px}.status{font-size:.9rem;min-height:1.5em} :host([compact]) .details{display:none} :host([compact]) .panel{padding:1rem}`;
    const panel = document.createElement('section'); panel.className='panel';
    const heading = document.createElement('h3'); heading.textContent='A Little Curiosity ✨';
    const fact = document.createElement('p'); fact.textContent=this.facts[this.index];
    const details = document.createElement('p'); details.className='details'; details.textContent='Discover a new fact while exploring my portfolio.';
    const button = document.createElement('button'); button.type='button'; button.textContent='Get a new fact';
    const status = document.createElement('p'); status.className='status'; status.setAttribute('role','status'); status.setAttribute('aria-live','polite'); status.textContent='Sample fact 1 of 3. Ready to explore.';
    button.addEventListener('click',()=>this.loadFact());
    panel.append(heading,fact,details,button,status); this.shadowRoot.append(style,panel);
    this.factEl=fact;this.buttonEl=button;this.statusEl=status;
  }
  attributeChangedCallback(name,oldValue,newValue) {
    if(name==='compact' && oldValue!==newValue && this.statusEl) {
      this.statusEl.textContent = this.hasAttribute('compact') ? 'Compact view enabled.' : 'Expanded view enabled.';
    }
  }
  async loadFact() {
    if(this.loading)return;
    this.loading=true;this.buttonEl.disabled=true;this.statusEl.textContent='Loading a new fact…';
    try {
      const response=await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',{headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const data=await response.json();
      if(typeof data?.text!=='string'||!data.text.trim())throw new Error('Missing fact text');
      this.factEl.textContent=data.text;
      this.statusEl.textContent='New fact loaded successfully.';
    }catch(error){
      console.warn('Fact request failed:',error);
      this.statusEl.textContent='Could not load a fact. Check your connection and try again.';
      this.buttonEl.textContent='Try again';
    }finally{this.loading=false;this.buttonEl.disabled=false;}
  }
}
customElements.define('fact-panel',FactPanel);
