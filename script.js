class MyCustomShadowDom extends HTMLElement {
    constructor() {
      // Always call the parent constructor.
      super();
      // Create the shadow DOM root element.
      this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
      // Create a wrapper div element.
      let wrapper = document.createElement('div');
      this.shadow.appendChild(wrapper);
  
      // Add styles to the wrapper element.
      let style = document.createElement('style');
      style.textContent = `
  p {
    border: 1px solid blue;
    width: 4rem;
  }
  `;
      wrapper.appendChild(style);
      
      // Add some content to the shadow DOM.
      var pElement = document.createElement('p');
      pElement.innerHTML = 'This is part of the shadow DOM.';
      wrapper.appendChild(pElement);
    }
  }
  
  customElements.define('my-custom-shadow-dom-element', MyCustomShadowDom);
  
  var customElement = document.getElementsByTagName("my-custom-shadow-dom-element")[0];
  let myShadowDom = customElement.shadowRoot;
  var pElement = document.createElement('p');
  pElement.innerHTML = 'This was added outside of the shadow DOM class.';
  myShadowDom.appendChild(pElement);