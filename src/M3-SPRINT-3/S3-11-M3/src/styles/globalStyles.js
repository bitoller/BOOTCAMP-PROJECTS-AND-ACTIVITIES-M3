import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
button,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: var(--color-gray-0);
  background-color: var(--color-gray-4);
  width: 100vw;
}

.pink-button {
  width: 100%;
  height: 48px;
  background-color: var(--color-primary);
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 500;
  cursor: pointer;
}

.pink-button:hover {
  background-color: var(--color-primary-focus);
}

.pink-button:disabled {
  background-color: var(--color-primary-negative);
}

.gray-button {
  width: 100%;
  height: 48px;
  background-color: var(--color-gray-1);
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 500;
  cursor: pointer;
}

.gray-button:hover {
  background-color: var(--color-gray-2);
}

input, select {
  width: 100%;
  height: 48px;
  background-color: var(--color-gray-2);
  border-radius: 4px;
  color: var(--color-gray-0);
  font-weight: 400;
  padding-left: 16px;
}

input::placeholder {
  color: var(--color-gray-1);
}

input:focus, select:focus {
  outline: 1.22px solid var(--color-gray-0);
}

input:focus::placeholder {
  color: var(--color-gray-0);
}

select {
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: var(--color-gray-1);
}

select:focus {
  color: var(--color-gray-0);
}

:root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;
  --color-gray-0: #F8F9FA;
  --color-gray-1: #868E96;
  --color-gray-2: #343B41;
  --color-gray-3: #212529;
  --color-gray-4: #121214;
  --color-feedback-success: #3FE864;
  --color-feedback-negative: #E83F5B;
}

}
`;
