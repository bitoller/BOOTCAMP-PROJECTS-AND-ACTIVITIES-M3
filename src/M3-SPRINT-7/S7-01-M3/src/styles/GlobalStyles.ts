import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  line-height: 150%;
  text-decoration: none;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  list-style: none;
}

:root {
  --primary: #C291FF;
  --secondary: #9A48FF;
  --disabled: #9A48FF70;
  --grey-7: #263238;
  --grey-6: #34495E;
  --grey-5: #455A64;
  --grey-4: #939da2;
  --grey-3: #BABFC1;
  --grey-2: #E0E0E0;
  --grey-1: #EBEBEB;
  --grey-0: #F5F5F5;
  --white: #FFFFFF;
  --error: #D63031;
  --success: ##00B894;
  --backdrop: #26323895;
  --radius-20: 1.25rem;
  --radius-30: 1.875rem;

  body {
    width: 100%;
    height: 100%;
    min-width: 20rem;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--grey-6);
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
}
  
button {
	cursor: pointer;
}
  
.pet-container-salmon {
  background-color: #efa48b;
}

.pet-container-purple {
  background-color: #8a4fff;
}

.pet-container-blue {
  background-color: #2eb3ce;
}

.pet-container-green {
  background-color: #9ee493;
}

.pet-container-red {
  background-color: #f9627d;
}

.pet-container-yellow {
  background-color: #ffc759;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  height: 0.875rem;
  min-width: 5rem;
  border-radius: var(--radius-20);
  background-color: var(--primary);
}

::-webkit-scrollbar-track {
  margin-top: 0.3125rem;
  margin-bottom: 0.3125rem;
}

`;
