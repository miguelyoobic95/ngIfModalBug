# ngIf - IonModal Bug

The bug arises when using a `ion-modal` and having another, independent component, that has an `ion-content` inside of it.

This causes the functionality of the Angular `ngIf` directive to break completely.

For demonstration purposes, two branches were created. `master` has the bug, while `master-working` shows a working version of the code. The only difference between them is the presence or absence (respectively) of the `ion-content` tag inside the `yoo-button` component (in `design-system/stencil/src/components/core`).

## Steps to reproduce the bug:

### Build the repo and serve
1) git clone https://github.com/miguelyoobic95/ngIfModalBug.git
2) npm i
3) npm run build:stencil (build stencil libs)
4) ionic serve

### Reproduce the bug:

In the home page press the `Open Modal` button to observe the bug.

If in the `master` branch the `ngIf`-dependent code will not be shown.

If in the `master-working` branch, the code works as expected.