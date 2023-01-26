# h

Hyperscript-like dom functions

`npm install @nrkn/h`

## important!

Expects `document` to exist in the global namespace - patch it with 
(jsdom)[https://github.com/jsdom/jsdom], `html-element` et al if using in 
Node.js or another runtime without a global `document` - see (example in test 
fixture)[src/test/fixtures/document.ts]

