/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { LitElement, html, css } from "lit";
import "@polymer/polymer/lib/elements/custom-style.js";
import './shared-styles.js';

class MyView3 extends LitElement {
  static get styles() {
    let styles = [];
    styles.push(
      css`
        :host {
          display: block;
          padding: 10px;
        }
      `
    );
    return styles;
  }
  static get properties() {
    return {
      data: Object
    }
  }
  //fetch data
  async resolveData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const empData = await response.json();
    // let data = null;

    this.data = empData;
    return this.data;
  }

  async connectedCallback() {
    super.connectedCallback()
    //api call
    this.data = await this.resolveData()
    //print in console
    console.log(this.data)
  }
  constructor() {
    super()
    this.data = {}
  }
  render() {
    return html`
    <custom-style>
    <style include="shared-styles"></style>
  </custom-style>

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
