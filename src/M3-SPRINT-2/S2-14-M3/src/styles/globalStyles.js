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
}

main {
  margin: 2rem 7.188rem;
  display: flex;
  justify-content: space-between;
}

.green-button {
  width: 6.625rem;
  height: 2.5rem;
  background-color: var(--color-primary-1);
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.green-button:hover {
  background-color: var(--color-primary-2);
  }

@media (max-width: 1023px) {
  main {
  margin: 0.938rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  }
}

:root{
  --color-primary-1: #27AE60;
  --color-primary-2: #93D7AF;
  --color-secondary: #EB5757;
  --color-gray-1: #333333;
  --color-gray-2: #828282;
  --color-gray-3: #E0E0E0;
  --color-gray-4: #F5F5F5;
  --color-feedback-negative: #E60000;
  --color-feedback-warning: #FFCD07;
  --color-feedback-success: #168821;
  --color-feedback-information: #155BCB;
}

}
`;
