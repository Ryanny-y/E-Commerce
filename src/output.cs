/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-10 {
  bottom: 2.5rem;
}

.bottom-3 {
  bottom: 0.75rem;
}

.bottom-5 {
  bottom: 1.25rem;
}

.left-0 {
  left: 0px;
}

.left-1\/3 {
  left: 33.333333%;
}

.left-10 {
  left: 2.5rem;
}

.left-5 {
  left: 1.25rem;
}

.right-0 {
  right: 0px;
}

.right-1\/3 {
  right: 33.333333%;
}

.right-10 {
  right: 2.5rem;
}

.right-2 {
  right: 0.5rem;
}

.right-2\.5 {
  right: 0.625rem;
}

.right-3 {
  right: 0.75rem;
}

.right-6 {
  right: 1.5rem;
}

.top-0 {
  top: 0px;
}

.top-10 {
  top: 2.5rem;
}

.top-2 {
  top: 0.5rem;
}

.top-20 {
  top: 5rem;
}

.top-3 {
  top: 0.75rem;
}

.top-5 {
  top: 1.25rem;
}

.-z-10 {
  z-index: -10;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-50 {
  z-index: 50;
}

.m-0 {
  margin: 0px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-0 {
  margin-left: 0px;
}

.mr-0 {
  margin-right: 0px;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-3 {
  height: 0.75rem;
}

.h-3\/5 {
  height: 60%;
}

.h-4 {
  height: 1rem;
}

.h-48 {
  height: 12rem;
}

.h-5 {
  height: 1.25rem;
}

.h-85 {
  height: 22rem;
}

.h-full {
  height: 100%;
}

.w-0 {
  width: 0px;
}

.w-10 {
  width: 2.5rem;
}

.w-11\/12 {
  width: 91.666667%;
}

.w-12 {
  width: 3rem;
}

.w-16 {
  width: 4rem;
}

.w-20 {
  width: 5rem;
}

.w-24 {
  width: 6rem;
}

.w-28 {
  width: 7rem;
}

.w-36 {
  width: 9rem;
}

.w-4 {
  width: 1rem;
}

.w-4\/5 {
  width: 80%;
}

.w-44 {
  width: 11rem;
}

.w-5 {
  width: 1.25rem;
}

.w-60 {
  width: 15rem;
}

.w-64 {
  width: 16rem;
}

.w-8 {
  width: 2rem;
}

.w-85 {
  width: 22rem;
}

.w-9\/12 {
  width: 75%;
}

.w-96 {
  width: 24rem;
}

.w-full {
  width: 100%;
}

.w-14 {
  width: 3.5rem;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.basis-1\/2 {
  flex-basis: 50%;
}

.basis-1\/3 {
  flex-basis: 33.333333%;
}

.basis-20 {
  flex-basis: 5rem;
}

.basis-4\/5 {
  flex-basis: 80%;
}

.basis-40 {
  flex-basis: 10rem;
}

.basis-56 {
  flex-basis: 14rem;
}

.basis-60 {
  flex-basis: 15rem;
}

.basis-96 {
  flex-basis: 24rem;
}

.basis-full {
  flex-basis: 100%;
}

.cursor-pointer {
  cursor: pointer;
}

.resize-none {
  resize: none;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-items-center {
  justify-items: center;
}

.gap-0 {
  gap: 0px;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-14 {
  gap: 3.5rem;
}

.gap-16 {
  gap: 4rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-20 {
  gap: 5rem;
}

.gap-24 {
  gap: 6rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-7 {
  gap: 1.75rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-x-12 {
  -moz-column-gap: 3rem;
       column-gap: 3rem;
}

.gap-y-6 {
  row-gap: 1.5rem;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-stretch {
  align-self: stretch;
}

.justify-self-end {
  justify-self: end;
}

.overflow-hidden {
  overflow: hidden;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-nowrap {
  text-wrap: nowrap;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-none {
  border-style: none;
}

.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-l-gray-400 {
  --tw-border-opacity: 1;
  border-left-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-r-gray-400 {
  --tw-border-opacity: 1;
  border-right-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}

.bg-lime {
  --tw-bg-opacity: 1;
  background-color: rgb(0 255 102 / var(--tw-bg-opacity));
}

.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-p-red {
  --tw-bg-opacity: 1;
  background-color: rgb(219 68 68 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.p-1 {
  padding: 0.25rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-7 {
  padding: 1.75rem;
}

.p-8 {
  padding: 2rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-11 {
  padding-left: 2.75rem;
  padding-right: 2.75rem;
}

.px-14 {
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-28 {
  padding-bottom: 7rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-7 {
  padding-top: 1.75rem;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.text-start {
  text-align: start;
}

.text-end {
  text-align: end;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-tight {
  line-height: 1.25;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.text-lime {
  --tw-text-opacity: 1;
  color: rgb(0 255 102 / var(--tw-text-opacity));
}

.text-p-red {
  --tw-text-opacity: 1;
  color: rgb(219 68 68 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.line-through {
  text-decoration-line: line-through;
}

.accent-black {
  accent-color: #000;
}

.accent-blue-500 {
  accent-color: #3b82f6;
}

.accent-p-red {
  accent-color: #DB4444;
}

.accent-red-500 {
  accent-color: #ef4444;
}

.opacity-80 {
  opacity: 0.8;
}

.mix-blend-difference {
  mix-blend-mode: difference;
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.placeholder\:text-gray-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.placeholder\:text-gray-500::placeholder {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.hover\:border-none:hover {
  border-style: none;
}

.hover\:border-p-red:hover {
  --tw-border-opacity: 1;
  border-color: rgb(219 68 68 / var(--tw-border-opacity));
}

.hover\:bg-black:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.hover\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.hover\:bg-p-red:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(219 68 68 / var(--tw-bg-opacity));
}

.hover\:bg-red-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}

.hover\:font-bold:hover {
  font-weight: 700;
}

.hover\:text-p-red:hover {
  --tw-text-opacity: 1;
  color: rgb(219 68 68 / var(--tw-text-opacity));
}

.hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 640px) {
  .sm\:left-2\/5 {
    left: 40%;
  }

  .sm\:top-12 {
    top: 3rem;
  }

  .sm\:ml-5 {
    margin-left: 1.25rem;
  }

  .sm\:mt-10 {
    margin-top: 2.5rem;
  }

  .sm\:h-4\/5 {
    height: 80%;
  }

  .sm\:h-85 {
    height: 22rem;
  }

  .sm\:w-44 {
    width: 11rem;
  }

  .sm\:min-w-80 {
    min-width: 20rem;
  }

  .sm\:shrink-0 {
    flex-shrink: 0;
  }

  .sm\:basis-1\/2 {
    flex-basis: 50%;
  }

  .sm\:basis-1\/5 {
    flex-basis: 20%;
  }

  .sm\:basis-3\/5 {
    flex-basis: 60%;
  }

  .sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sm\:flex-row {
    flex-direction: row;
  }

  .sm\:flex-col {
    flex-direction: column;
  }

  .sm\:justify-center {
    justify-content: center;
  }

  .sm\:gap-0 {
    gap: 0px;
  }

  .sm\:gap-16 {
    gap: 4rem;
  }

  .sm\:gap-2 {
    gap: 0.5rem;
  }

  .sm\:self-start {
    align-self: flex-start;
  }

  .sm\:justify-self-center {
    justify-self: center;
  }

  .sm\:p-14 {
    padding: 3.5rem;
  }

  .sm\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .sm\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .sm\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }

  .sm\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}

@media (min-width: 768px) {
  .md\:static {
    position: static;
  }

  .md\:left-1\/2 {
    left: 50%;
  }

  .md\:right-0 {
    right: 0px;
  }

  .md\:right-1\/3 {
    right: 33.333333%;
  }

  .md\:mr-2 {
    margin-right: 0.5rem;
  }

  .md\:mr-24 {
    margin-right: 6rem;
  }

  .md\:block {
    display: block;
  }

  .md\:flex {
    display: flex;
  }

  .md\:hidden {
    display: none;
  }

  .md\:h-56 {
    height: 14rem;
  }

  .md\:h-80 {
    height: 20rem;
  }

  .md\:h-full {
    height: 100%;
  }

  .md\:w-0 {
    width: 0px;
  }

  .md\:w-4\/5 {
    width: 80%;
  }

  .md\:w-40 {
    width: 10rem;
  }

  .md\:w-5\/12 {
    width: 41.666667%;
  }

  .md\:w-56 {
    width: 14rem;
  }

  .md\:w-full {
    width: 100%;
  }

  .md\:shrink {
    flex-shrink: 1;
  }

  .md\:shrink-0 {
    flex-shrink: 0;
  }

  .md\:grow {
    flex-grow: 1;
  }

  .md\:grow-0 {
    flex-grow: 0;
  }

  .md\:basis-1\/3 {
    flex-basis: 33.333333%;
  }

  .md\:basis-1\/4 {
    flex-basis: 25%;
  }

  .md\:basis-10 {
    flex-basis: 2.5rem;
  }

  .md\:basis-2\/5 {
    flex-basis: 40%;
  }

  .md\:basis-20 {
    flex-basis: 5rem;
  }

  .md\:basis-24 {
    flex-basis: 6rem;
  }

  .md\:basis-3\/5 {
    flex-basis: 60%;
  }

  .md\:basis-32 {
    flex-basis: 8rem;
  }

  .md\:basis-36 {
    flex-basis: 9rem;
  }

  .md\:basis-44 {
    flex-basis: 11rem;
  }

  .md\:basis-60 {
    flex-basis: 15rem;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\:flex-row {
    flex-direction: row;
  }

  .md\:flex-col {
    flex-direction: column;
  }

  .md\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .md\:items-center {
    align-items: center;
  }

  .md\:justify-start {
    justify-content: flex-start;
  }

  .md\:justify-end {
    justify-content: flex-end;
  }

  .md\:justify-center {
    justify-content: center;
  }

  .md\:justify-items-start {
    justify-items: start;
  }

  .md\:gap-3 {
    gap: 0.75rem;
  }

  .md\:gap-4 {
    gap: 1rem;
  }

  .md\:gap-5 {
    gap: 1.25rem;
  }

  .md\:gap-7 {
    gap: 1.75rem;
  }

  .md\:justify-self-start {
    justify-self: start;
  }

  .md\:p-20 {
    padding: 5rem;
  }

  .md\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .md\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .md\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .md\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .md\:py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .md\:text-center {
    text-align: center;
  }

  .md\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .md\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .md\:text-8xl {
    font-size: 6rem;
    line-height: 1;
  }

  .md\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .md\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\:leading-snug {
    line-height: 1.375;
  }
}

@media (min-width: 1024px) {
  .lg\:right-1\/2 {
    right: 50%;
  }

  .lg\:basis-44 {
    flex-basis: 11rem;
  }

  .lg\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\:pl-16 {
    padding-left: 4rem;
  }

  .lg\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }

  .lg\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1536px) {
  .\32xl\:mr-10 {
    margin-right: 2.5rem;
  }
}