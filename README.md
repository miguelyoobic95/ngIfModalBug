# ngIf - IonModal Bug

The bug arises when using a `ion-modal` uses the `ngIf` directive inside of it. Upon rebuilding the application following the first serve, the `ng-If` dependent content is never shown

## Steps to reproduce the bug:

### Build the repo and serve
1) git clone https://github.com/miguelyoobic95/ngIfModalBug.git
2) npm i
3) npm run build:stencil (build stencil libs)
4) ionic serve

### Reproduce the bug:

In the home page press the `Open Modal` button. If the text is shown, the bug is not present but upon rebuilding stencil or recompiling the Ionic app, the bug will be appear and the `ngIf`-dependent code will not be shown. Inspect the DOM to confirm that the HTML is not rendered. 

This only applies to the directives inside the modal `ion-content`. In the Home page, some other `ngIf`-dependent code works as expected.
