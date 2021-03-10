"use strict";

customElements.define("busy-icon", class MyElement extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this._root = this.shadowRoot;
        // this._root = this;
        
        this._root.innerHTML = `<style>:host{display:inline-block;width:1em;height:1em}.css-busy{position:relative;width:100%;height:100%}.css-busy div{width:10%;height:25%;border-radius:500px;position:absolute;top:0;left:50%;transform-origin:0 200%;background:var(--color,#555);animation:css-busy 1.2s linear infinite}.css-busy div:nth-child(1){transform:rotate(0deg)translatex(-50%);animation-delay:-1.1s}.css-busy div:nth-child(2){transform:rotate(30deg)translatex(-50%);animation-delay:-1s}.css-busy div:nth-child(3){transform:rotate(60deg)translatex(-50%);animation-delay:-.9s}.css-busy div:nth-child(4){transform:rotate(90deg)translatex(-50%);animation-delay:-.8s}.css-busy div:nth-child(5){transform:rotate(120deg)translatex(-50%);animation-delay:-.7s}.css-busy div:nth-child(6){transform:rotate(150deg)translatex(-50%);animation-delay:-.6s}.css-busy div:nth-child(7){transform:rotate(180deg)translatex(-50%);animation-delay:-.5s}.css-busy div:nth-child(8){transform:rotate(210deg)translatex(-50%);animation-delay:-.4s}.css-busy div:nth-child(9){transform:rotate(240deg)translatex(-50%);animation-delay:-.3s}.css-busy div:nth-child(10){transform:rotate(270deg)translatex(-50%);animation-delay:-.2s}.css-busy div:nth-child(11){transform:rotate(300deg)translatex(-50%);animation-delay:-.1s}.css-busy div:nth-child(12){transform:rotate(330deg)translatex(-50%);animation-delay:0s}@keyframes css-busy{0%{opacity:1}100%{opacity:0}}</style><div class="css-busy"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    }

    static get observedAttributes() {
        return ['hidden'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'hidden':
                if (newValue == "" || newValue == "hidden") {
                    const display = getComputedStyle(this).display;
                    if (display != "none") this._display = display;
                    this.style.display = "none"; 
                }
                else {
                    this.style.display = this._display === undefined || this._display == "none" ? "inline-block" : this._display;
                }
            break;
        }
    }
})
