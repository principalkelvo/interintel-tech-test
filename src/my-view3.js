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
import { map } from "lit/directives/map.js";
import "@polymer/polymer/lib/elements/custom-style.js";
import "./shared-styles.js";

// $('input[type="checkbox"]').on('change', function () {
//   $(this).closest('.card').toggleClass('checked');
// });

class MyView3 extends LitElement {
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
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
    return styles;
  }
  static get properties() {
    return {
      data: Array,
      // sortDict: Array,
      dictionary: Object,
    };
  }
  //fetch data
  async resolveData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const empData = await response.json();
    // let data = null;

    this.data = empData;
    return this.data;
  }

  async connectedCallback() {
    super.connectedCallback();
    //api call
    this.data = await this.resolveData();
    //print in console
    console.log(this.data);
    // await this.dict();
    // console.log("firstSort", this.sortDict);
  }
  constructor() {
    super();
    this.data = [];
    // this.sortDict = [];
    this.dictionary = {
      34: "thirty-four",
      90: "ninety",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    };
    // this.dictionary = {
    //   '34': 'thirty-four', '90': 'ninety',
    //   '91': 'ninety-one', '21': 'twenty-one',
    //   '61': 'sixty-one', '9': 'nine',
    //   '2': 'two', '6': 'six', '3': 'three',
    //   '8': 'eight', '80': 'eighty', '81': 'eighty-one',
    //   'Ninety-Nine': '99', 'nine-hundred': '900'
    // }
  }

  //not working to be worked on later
  //checks clicks of each item and toggles
  // check() {
  //   const arrow = this.shadowRoot.querySelectorAll('input[type="checkbox"]');
  //   for (var i = 0; i < arrow.length; i++) {
  //     arrow[i].addEventListener("click", (e) => {
  //       let arrowParent = e.target.parentElement.parentElement;
  //       console.log(arrowParent);
  //       arrowParent.classList.toggle("checked");
  //     });
  //   }
  // }

  //sort dictionary keys
  // async dict() {
  //   const dictionary = {
  //     34: "thirty-four",
  //     90: "ninety",
  //     91: "ninety-one",
  //     21: "twenty-one",
  //     61: "sixty-one",
  //     9: "nine",
  //     2: "two",
  //     6: "six",
  //     3: "three",
  //     8: "eight",
  //     80: "eighty",
  //     81: "eighty-one",
  //     "Ninety-Nine": "99",
  //     "nine-hundred": "900",
  //   };

  //   const sorted = Object.keys(dictionary)
  //     .sort()
  //     .reduce((accumulator, key) => {
  //       accumulator[key] = dictionary[key];

  //       return accumulator;
  //     }, {});

  //   //changes object to array
  //   for (const [key, value] of Object.entries(sorted)) {
  //     this.sortDict.push(html`<h3 class="card-title">${key}, ${value}</h3>`);
  //   }

  //   console.log("sorted", sorted);
  // }
  render() {

    const sortD = []

    const sorted = Object.keys(this.dictionary)
      .sort()
      .reduce((accumulator, key) => {
        accumulator[key] = this.dictionary[key];

        return accumulator;
      }, {});

    //changes object to array
    for (const [key, value] of Object.entries(sorted)) {
      sortD.unshift(html`<h3 class="card-title">${key}: ${value}</h3>`);
    }


    return html`
      <custom-style>
        <style>
          h1 {
            margin: 0 0 15px;
            color: #444;
          }

          ul {
            width: 70%;
          }
          li:hover .card {
            background-color: #ff990055;
          }
          li {
            list-style-type: none;
          }

          li + li {
            padding-top: 10px;
          }
          .card {
            position: relative;
            padding: 12px 12px 14px 44px;
            min-height: 45px;
            box-shadow: 0 1px 2px 0 #b5b1ac;
            border-radius: 4px;
            background: #fff;

            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .card-title {
            font-size: 18px;
            font-weight: 300;
            color: #303030;
          }

          .card-content {
            font-size: 14px;
            color: #777;
          }

          .card .group-checkbox {
            position: absolute;
            top: 15px;
            left: 12px;
          }

          .card.checked {
            background: #f1eee9;
          }

          .card.checked .card-title,
          .card.checked .card-content {
            color: #4285f4;
          }
          .group-checkbox {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 22px;
            vertical-align: middle;
            cursor: pointer;
          }
          .group-checkbox i {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid #cacaca;
            border-radius: 50%;
          }
          .group-checkbox input {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            opacity: 0;
            z-index: -1;
          }

          .group-checkbox input:checked ~ i {
            border-color: #4285f4;
          }

          .checked {
            position: relative;
            color: #4285f4;
            text-decoration: line-through;
          }
        </style>
      </custom-style>
      <ul>
        ${map(
      this.data,
      (item) => html` <li>
            <div class=${item.completed ? "card checked" : "card "}>
              <label for="two" class="group-checkbox">
                <input
                  type="checkbox"
                  name="two"
                  id="two"
                  checked
                  @click=${this.check}
                />
                <i></i>
              </label>
              <h3 class="card-title">${item.title}</h3>
            </div>
          </li>`
    )}
      </ul>

     
        <ul>
          <li>
            <div class="card ">
            ${sortD}         
            </div>
          </li>
        </ul>
    `;
  }
}

window.customElements.define("my-view3", MyView3);
/*
.group-checkbox input:checked ~ i:after {
content: '\2713';
position: absolute;
top: 4px; left: 3px;
font-size: 15px;
font-weight: bold;
line-height: 15px;
color: #4285F4;
}

*/
