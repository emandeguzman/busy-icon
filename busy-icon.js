"use strict";

customElements.define("busy-icon", class MyElement extends HTMLElement {
    constructor() {
        super();
        this.root;
        this.dirurl = (()=>{
            return Array.from(document.querySelectorAll("script")).find(s=>/\/busy-icon\.[^\/]+$/.test(s.src)).src.replace(/\/busy-icon\.[^\/]+$/, "");
        })();
    }

    _hidden

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.root = this.shadowRoot;
        // this.root = this;
        
        // const color = getComputedStyle(this).color;
        // const style = `<style>:host{--busy-color:${color};width:1em;height:1em;display:inline-block}.css-busy{position:relative;width:100%;height:100%}.css-busy div{width:10%;height:25%;border-radius:500px;position:absolute;top:0;left:50%;transform-origin:0 200%;background:var(--busy-color, #555);animation:css-busy 1.2s linear infinite}.css-busy div:nth-child(1){transform:rotate(0deg) translatex(-50%);animation-delay:-1.1s}.css-busy div:nth-child(2){transform:rotate(30deg) translatex(-50%);animation-delay:-1s}.css-busy div:nth-child(3){transform:rotate(60deg) translatex(-50%);animation-delay:-0.9s}.css-busy div:nth-child(4){transform:rotate(90deg) translatex(-50%);animation-delay:-0.8s}.css-busy div:nth-child(5){transform:rotate(120deg) translatex(-50%);animation-delay:-0.7s}.css-busy div:nth-child(6){transform:rotate(150deg) translatex(-50%);animation-delay:-0.6s}.css-busy div:nth-child(7){transform:rotate(180deg) translatex(-50%);animation-delay:-0.5s}.css-busy div:nth-child(8){transform:rotate(210deg) translatex(-50%);animation-delay:-0.4s}.css-busy div:nth-child(9){transform:rotate(240deg) translatex(-50%);animation-delay:-0.3s}.css-busy div:nth-child(10){transform:rotate(270deg) translatex(-50%);animation-delay:-0.2s}.css-busy div:nth-child(11){transform:rotate(300deg) translatex(-50%);animation-delay:-0.1s}.css-busy div:nth-child(12){transform:rotate(330deg) translatex(-50%);animation-delay:0s}@keyframes css-busy{0%{opacity:1}100%{opacity:0}}</style>`;

        // this.root.innerHTML = `<link rel="stylesheet" href="${this.dirurl}/busy-icon.min.css"><div class="css-busy"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
        this.root.innerHTML = `<link rel="stylesheet" href="${this.dirurl}/busy-icon.css"><div class="css-busy"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    }

    static get observedAttributes() {
        return ['hidden'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'hidden':
                if (newValue == "" || newValue == "hidden") this.style.display = "none";
                else this.style.display = "inline-block";
            break;
        }
    }
})
