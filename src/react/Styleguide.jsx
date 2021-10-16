document.addEventListener("DOMContentLoaded", () => {
  //Generate a dynamic navigation base on all sections of the style guide
  const navigation = document.getElementById("navigation");
  const sections = Array.from(document.querySelectorAll("section"));

  let li;
  sections.forEach((item) => {
    li = document.createElement("li");
    li.style.cssText = `
       font-size: 1.25rem;
       padding: 4px 0;
    `;
    li.innerHTML = `<a href="#${item.id}" style="color: #1f1f1f; text-decoration: none; text-transform: capitalize;">${item.id}</a>`;
    navigation.appendChild(li);
    li.addEventListener("mouseover", function (event) {
      event.target.style.textDecoration = "underline";
    });
    li.addEventListener("mouseout", function (event) {
      event.target.style.textDecoration = "none";
    });
  });
    

  //Generate dynamic title for all sections of the style guide
  let h2;
  sections.forEach((item) => {
    h2 = document.createElement("h2");
    h2.classList.add("uisg-title--2");
    h2.style.cssText = `
       width: 100%;
       text-transform: uppercase;
       font-size: 24px;
       padding: 24px 0 0 0;
       margin: 0 0 24px 0;
       line-height: 1;
       width: 100%;
       display: block;
    `;
    h2.innerHTML = `${item.id}`;
    item.prepend(h2);
  });
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
const spacing = [
  "space1",
  "space2",
  "space3",
  "space4",
  "space5",
  "space6",
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

const uisg = {
  fontFamily: "Helvetica, Arial, sans-serif",
  maxWidth: "1280px",
  margin: "32px auto 0 0",
  display: "grid",
  gridTemplateColumns: "240px 1fr",
  gridTemplateRows: "auto",
  gridTemplateAreas: `
        "sidebar main"
        "sidebar main"`,
};
const main = {
  gridArea: "main",
  padding: "0 24px",
};
const section = {
  marginBottom: "64px",
};
const sidebar = {
  position: "fixed",
  gridArea: "sidebar",
  padding: "0 24px",
};
const colorsContainer = {
  display: "flex",
  flexWrap: "wrap",
};
const colorDiv = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #1f1f1f",
  height: "240px",
  width: "200px",
  margin: "16px",
};
const h1Style = {
  width: "100%",
  textTransform: "uppercase",
  fontSize: "48px",
  padding: "24px 0 0 0",
  margin: "0 0 24px 0",
  lineHeight: "1",
  width: "100%",
  display: "block",
};
const colorPFirst = {
  marginTop: "auto",
  marginBottom: "0",
  padding: "8px 16px",
  background: "#ffffff",
};
const colorP = {
  background: "#ffffff",
  margin:"0",
  padding: "4px 16px",
  lineHeight: "1",
};

function Styleguide() {
  return (
    <div id="uisg" style={uisg}>
      <div id="main" style={main}>
      <h1 className="uisg--title--1" style={h1Style}>UI STYLE GUIDE REACT</h1>
        <section id="colors" style={(section, colorsContainer)}>
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`color bg-${color.variable}`}
                style={colorDiv}
              >
                <p style={(colorPFirst)}>color variable: {color.variable}</p>
                <p style={colorP}>color hex: {color.hex}</p>
                <p style={colorP}>color rgba: {color.rgba}</p>
              </div>
            );
          })}
        </section>
        <section id="typography" style={section}>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h1 className="text-7">A level 1 heading</h1>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h2 className="text-6">A level 2 heading</h2>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h3 className="text-5">A level 3 heading</h3>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h4 className="text-4">A level 4 heading</h4>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h5 className="text-3">A level 5 heading</h5>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <h6 className="text-2">A level 6 heading</h6>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
            <p className="text-1">A paragraph</p>
          </div>
          <div className="wrapper" style={{ borderBottom: "1px dotted" }}>
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
        <section id="buttons" style={section}>
          <div className="wrapper">
            {buttons.map((button, index) => {
              return (
                <div>
                  <button
                    key={index}
                    className={`button button--${button}`}
                    style={{ marginBottom: "32px" }}
                  >
                    {button}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        <section id="spacings" style={section}>
          <div>
          {spacing.map((space, index) => {
              return (
                <div className="wrapper">
                  <p style={{ margin: "0 0 4px 0", lineHeight: "1" }}>
                    space {index}
                  </p>
                  <div
                    key={space}
                    className={`space w-${index} bg-primary`}
                    style={{
                      height: "16px",
                      border: "1px solid black",
                      margin: "0 0 24px 0",
                    }}
                  />
                </div>
          );
        })}
          </div>
        </section>
        <section id="icons" style={section}>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {icons.map((icon) => {
              return (
                <div key={icon.label} className={`icon icon--${icon.label}`} style={{margin: "16px"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`${icon.path1}`}
                    />
                    <path
                      v-if="icon.path2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`${icon.path2}`}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div id="sidebar" style={sidebar}>
        <h2>Navigation</h2>
        <ul id="navigation" style={{listStyle:"none", paddingLeft: "0"}}/>
      </div>
    </div>
  )
}

export default Styleguide

