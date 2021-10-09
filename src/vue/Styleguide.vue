<script setup>
import { onMounted } from "vue";

onMounted(() => {
    //Generate a dynamic navigation base on all sections of the style guide
    const navigation = document.getElementById('navigation');
    const sections = Array.from(document.querySelectorAll('section'));

    let li;
    sections.forEach((item) => {
      li = document.createElement("li");
      li.innerHTML = `<a href="#${item.id}">${item.id}</a>`;
      navigation.appendChild(li);
    });

    //Generate dynamic title for all sections of the style guide
    let h2;
    sections.forEach((item) => {
      h2 = document.createElement("h2");
      h2.classList.add('uisg--title--2');
      h2.innerHTML = `${item.id}`;
      item.prepend(h2);
    });

const colors = [
  {
    "variable": "primary",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "secondary",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "accent",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "heading",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "text",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "background",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "success",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "warning",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "danger",
    "hex": "",
    "rgba": ""  
  },
  {
    "variable": "info",
    "hex": "",
    "rgba": ""  
  },
];

const buttons = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "danger",
  "info",
];

const icons = [
  {
    label: "bell",
    path1:
      "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    label: "paper clip",
    path1:
      "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
  },
  {
    label: "external link",
    path1:
      "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
  },
  {
    label: "clipboard",
    path1:
      "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
  },
  {
    label: "cog",
    path1:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    path2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "chat",
    path1:
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];
</script>

<template>
  <div id="uisg">
    <div id="main">
      <h1 class="uisg--title--1">UI STYLE GUIDE VUE 3</h1>
      <section id="colors">
        <div
          v-for="(color, index) in colors"
          :key="index"
          :class="`color bg--${color.variable}`"
        >
        <p>color variable: {{color.variable}}</p>
        <p>color hex: {{color.hex}}</p>
        <p>color rgba: {{color.rgba}}</p>
        </div>
      </section>
      <section id="typography">
        <div class="wrapper"><h1 class="text-7">A level 1 heading</h1></div>
        <div class="wrapper"><h2 class="text-6">A level 2 heading</h2></div>
        <div class="wrapper"><h3 class="text-5">A level 3 heading</h3></div>
        <div class="wrapper"><h4 class="text-4">A level 4 heading</h4></div>
        <div class="wrapper"><h5 class="text-3">A level 5 heading</h5></div>
        <div class="wrapper"><h6 class="text-2">A level 6 heading</h6></div>
        <div class="wrapper"><p class="text-1">A paragraph</p></div>
        <div class="wrapper">
          <ul>
            <li>unordered list item</li>
            <li>unordered list item</li>
            <li>unordered list item</li>
          </ul>
          <ol>
            <li>ordered list item</li>
            <li>ordered list item</li>
            <li>ordered list item</li>
          </ol>
        </div>
      </section>
      <section id="buttons">
        <div v-for="(button, index) in buttons" class="wrapper">
          <button :key="index" :class="`button button--${button}`">
            button {{ button }}
          </button>
        </div>
      </section>
      <section id="spacing">
        <div class="wrapper">
          <div v-for="(space, index) in 6" :key="index">
            <p>space level {{ space }}</p>
            <div :class="`space w-${index} bg-primary`"></div>
          </div>
        </div>
      </section>
      <section id="icons">
        <div v-for="(icon, index) in icons" :key="index" class="wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="`${icon.path1}`"
            />
            <path
              v-if="icon.path2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="`${icon.path2}`"
            />
          </svg>
        </div>
      </section>
    </div>

    <div id="sidebar">
      <h2 class="uisg--title--2">Navigation</h2>
      <ul id="navigation"></ul>
    </div>
  </div>
</template>

<style>
#uisg {
      font-family: Helvetica, Arial, sans-serif;
      max-width: 1280px;
      margin: 32px auto 0 0;
      display: grid;
      grid-template-columns: 240px 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "sidebar main"
        "sidebar main";
    }

    #uisg #main {
      grid-area: main;
      padding: 0 24px;
    }

    #uisg #main > section {
      margin-bottom: 64px;
    }

    #uisg #main > .uisg--title--1 {
      width: 100%;
      text-transform: uppercase;
      font-size: 48px;
      padding: 24px 0 0 0;
      margin: 0 0 24px 0;
      line-height: 1;
      width: 100%;
      display: block;
    }

    #uisg #main section > .uisg--title--2,
    #uisg #sidebar > .uisg--title--2 {
      width: 100%;
      text-transform: uppercase;
      font-size: 24px;
      padding: 24px 0 0 0;
      margin: 0 0 24px 0;
      line-height: 1;
      width: 100%;
      display: block;
    }

    #uisg #sidebar {
      position: fixed;
      grid-area: sidebar;
      padding: 0 24px;
    }

    #uisg #sidebar ul {
      list-style: none;
      padding-left: 0;
    }

    #uisg #sidebar ul li {
      font-size: 1.25rem;
      padding: 4px 0;
    }

    #uisg #sidebar a {
      color: #1f1f1f;
      text-decoration: none;
      text-transform: capitalize;
    }

    #uisg #sidebar a:hover {
      text-decoration: underline;
    }

    /*Colors*/
    #uisg #colors {
      display: flex;
      flex-wrap: wrap;
    }

    #uisg #colors > div {
      display: flex;
      flex-direction: column;
      border: 1px solid #1f1f1f;
      height: 240px;
      width: 200px;
      margin-right: 16px;
      margin-bottom: 16px;
    }

    #uisg #colors > div > p {
      background: #ffffff;
      margin:0;
      padding: 4px 16px;
      line-height: 1;
    }

    #uisg #colors > div > p:nth-child(1) {
      margin-top: auto;
      padding-top: 8px;
    }

    #uisg #colors > div > p > span {
      text-transform: uppercase;
    }

    /*Typography*/
    #uisg #typography h1,
    #uisg #typography h2,
    #uisg #typography h3,
    #uisg #typography h4,
    #uisg #typography h5,
    #uisg #typography h6 {
      position: relative;
    }

    #uisg #typography div {
      border-bottom: 1px dotted;
    }

    #uisg #buttons > div {
      margin-bottom: 32px;
    }

    #uisg #spacing p {
      margin: 0 0 4px 0;
      line-height: 1;
    }

    #uisg #spacing .space {
      height: 16px;
      border: 1px solid black;
      margin: 0 0 24px 0;
    }

    #uisg #icons  {
      display: flex;
      flex-wrap: wrap;
    }
    #uisg #icons > div {
      margin-right: 16px;
    }
</style>
