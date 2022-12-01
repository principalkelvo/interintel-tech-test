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
import "./shared-styles";
class MyView1 extends LitElement {
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

  constructor() {
    super();
  }
  submitForm(e) {
    e.preventDefault();
    const form = this.shadowRoot.querySelector("form");

    console.log(e.target, form); // successfully logs <form> element
    const name = form.fullName.value;
    const email = form.email.value;
    const phoneNumber = form.phone.value;
    // const name = form.fullName.value // successfully logs <form> element
    console.log(name, email, phoneNumber);
    window.setTimeout(() => {
      alert(
        "name: " +
        name +
        "\n email: " +
        email +
        "\n phoneNumber: " +
        phoneNumber
      );
      form.reset(); // resets form
    }, 500);
  }
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <custom-style>
        <style include="shared-styles"></style>
      </custom-style>

      <form @submit=${this.submitForm}>
        <div class="field">
          <label class="label">Name</label>
          <p class="control has-icons-left">
          <div class="control">
            <input name="fullName" class="input" type="text" placeholder="e.g Alex Smith" required/>
          </div>
          <span class="icon is-small is-left">
          <i class="fas fa-check"></i>
        </span>
        </p>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <p class="control has-icons-left has-icons-right">
            <input name="email" class="input" type="email" placeholder="Email" required/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Phone Number</label>
          <p class="control has-icons-left">
            <input name="phone" class="input" type="tel" placeholder="+254799888777" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </div>
      </form>
    `;
  }
}

window.customElements.define("my-view1", MyView1);
