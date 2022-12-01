/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from "lit";
import "@polymer/polymer/lib/elements/custom-style.js";
// import "./shared-styles.js";
// import { classMap } from '.././node_modules/lit-html/directives/class-map';

class MyView2 extends LitElement {
  constructor() {
    super();
  }
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
  }
  styleBlue() {
    const container = this.shadowRoot.getElementById("container");

    container.classList.remove("change");
  }
  styleRed() {
    const container = this.shadowRoot.getElementById("container");

    container.classList.add("change");
  }
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <custom-style>
        <style>
          .container {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            transition: background 0.5s;
          }

          .card-wrapper {
            width: 50rem;
            height: 70rem;
            display: grid;
            place-items: center;
            padding: 0 10rem;
            overflow: hidden;
          }

          .card {
            width: 33rem;
            background: #eee;
            border-radius: 2.5rem;
            box-shadow: 0 2rem 6rem rgb(0, 0, 0, 0.7);
            position: relative;
          }

          .top-card {
            height: 50%;
            background-color: #1c477a;
            padding: 3rem;
            border-radius: 2.5rem 2.5rem 0 0;
          }

          .container.change .top-card {
            background: #c02244;
          }

          .logo {
            width: 8rem;
            margin-bottom: 2rem;
          }

          .top-card-text {
            color: #fff;
          }

          .top-card-text h1 {
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.1rem;
            margin-bottom: 1rem;
          }

          .shoe-1 {
            width: 30rem;
            position: absolute;
            top: -3rem;
            right: -10rem;
            transition: transform 0.5s;
          }

          .container.change .shoe-1 {
            transform: translateX(-80rem) rotate(45deg);
          }

          .shoe-2 {
            width: 33rem;
            position: absolute;
            top: -8rem;
            right: -80rem;
            transition: transform 0.5s;
          }

          .container.change .shoe-2 {
            transform: translateX(-74.3rem) rotate(-50deg);
          }

          .bottom-card {
            height: 50%;
            margin: 2rem 3rem;
          }

          .bottom-card h1 {
            text-transform: uppercase;
            font-weight: 500;
            color: #333;
            letter-spacing: 0.1rem;
            margin-bottom: 0.6rem;
          }

          .badge {
            position: absolute;
            top: 20rem;
            right: 5rem;
            width: 3.5rem;
            height: 1.6rem;
            background: #25d390;
            color: #eee;
            display: grid;
            place-items: center;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 0.1rem;
            border-radius: 0.3rem;
          }

          .bottom-card h3 {
            font-size: 1rem;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 0.6rem;
          }

          .stars {
            margin-bottom: 3rem;
          }

          .stars i:last-child {
            opacity: 0.4;
          }

          .size {
            margin-bottom: 3rem;
          }

          .size h4 {
            text-transform: uppercase;
            font-size: 1.2rem;
            margin-bottom: 1.3rem;
            letter-spacing: 0.1rem;
          }

          .sizes {
            display: flex;
          }

          .sizes span {
            margin-right: 2rem;
            font-size: 1.3rem;
          }

          .sizes span:nth-child(3) {
            width: 2rem;
            height: 2rem;
            background: #25d390;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #eee;
          }

          .color h4 {
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .color-1,
          .color-2 {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            cursor: pointer;
          }

          .colors {
            display: flex;
          }

          .color-1 {
            background: #1c477a;
            margin-right: 1rem;
            box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.2);
          }

          .color-2 {
            background: #c02244;
            box-shadow: 0 1rem 2rem rgba(192, 34, 68, 0.3);
          }

          .price {
            height: 4rem;
            width: 16rem;
            background: #1c477a;
            position: absolute;
            right: -1rem;
            bottom: 3rem;
            box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.2);
            color: #fff;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 0.5s;
          }

          .price span {
            font-size: 2rem;
          }

          .container.change .price {
            background-color: #c02244;
          }

          .price span:first-child {
            font-weight: 500;
            text-transform: uppercase;
            margin-right: 1rem;
          }

          .price span:last-child {
            font-weight: bold;
          }
        </style>
      </custom-style>

      <div class="container" id="container">
        <div class="card-wrapper">
          <div class="card">
            <div class="top-card">
              <img src="https://i.postimg.cc/QM3Dhj81/nike.png" class="logo" />
              <div class="top-card-text">
                <h1>Air Structure</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, labore quibusdam? Adipisci voluptate error sint id
                  asperiores. Repudiandae, tempora nihil!
                </p>
                <div class="shoes">
                  <img
                    src="https://i.postimg.cc/nrCb0z2b/shoe1.png"
                    class="shoe-1"
                  />
                  <img
                    src="https://i.postimg.cc/ydfCm9Fy/shoe2.png"
                    class="shoe-2"
                  />
                </div>
              </div>
            </div>
            <div class="bottom-card">
              <h1>Air Structure</h1>
              <div class="badge">New</div>
              <h3>Running Collections</h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="size">
                <h4>Size</h4>
                <div class="sizes">
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                </div>
              </div>
              <div class="color">
                <h4>Color</h4>
                <div class="colors">
                  <div
                    id="color-1"
                    class="color-1"
                    @click=${this.styleBlue}
                  ></div>
                  <div
                    id="color-2"
                    class="color-2"
                    @click=${this.styleRed}
                  ></div>
                </div>
              </div>
              <div class="price">
                <span>USD</span>
                <span>350.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("my-element", MyView2);
