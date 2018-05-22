/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface YooButtonContent {
      'disabled': boolean;
      'icon': string;
      'isLoading': boolean;
      'text': string;
    }
  }

  interface HTMLYooButtonContentElement extends StencilComponents.YooButtonContent, HTMLStencilElement {}

  var HTMLYooButtonContentElement: {
    prototype: HTMLYooButtonContentElement;
    new (): HTMLYooButtonContentElement;
  };
  interface HTMLElementTagNameMap {
    'yoo-button-content': HTMLYooButtonContentElement;
  }
  interface ElementTagNameMap {
    'yoo-button-content': HTMLYooButtonContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'yoo-button-content': JSXElements.YooButtonContentAttributes;
    }
  }
  namespace JSXElements {
    export interface YooButtonContentAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'icon'?: string;
      'isLoading'?: boolean;
      'onButtonClicked'?: (event: CustomEvent<boolean>) => void;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface YooButton {
      'disabled': boolean;
      'icon': string;
      'isLoading': boolean;
      'text': string;
    }
  }

  interface HTMLYooButtonElement extends StencilComponents.YooButton, HTMLStencilElement {}

  var HTMLYooButtonElement: {
    prototype: HTMLYooButtonElement;
    new (): HTMLYooButtonElement;
  };
  interface HTMLElementTagNameMap {
    'yoo-button': HTMLYooButtonElement;
  }
  interface ElementTagNameMap {
    'yoo-button': HTMLYooButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'yoo-button': JSXElements.YooButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface YooButtonAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'icon'?: string;
      'isLoading'?: boolean;
      'onButtonClicked'?: (event: CustomEvent<boolean>) => void;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ModalContent {

    }
  }

  interface HTMLModalContentElement extends StencilComponents.ModalContent, HTMLStencilElement {}

  var HTMLModalContentElement: {
    prototype: HTMLModalContentElement;
    new (): HTMLModalContentElement;
  };
  interface HTMLElementTagNameMap {
    'modal-content': HTMLModalContentElement;
  }
  interface ElementTagNameMap {
    'modal-content': HTMLModalContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'modal-content': JSXElements.ModalContentAttributes;
    }
  }
  namespace JSXElements {
    export interface ModalContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ModalTrigger {

    }
  }

  interface HTMLModalTriggerElement extends StencilComponents.ModalTrigger, HTMLStencilElement {}

  var HTMLModalTriggerElement: {
    prototype: HTMLModalTriggerElement;
    new (): HTMLModalTriggerElement;
  };
  interface HTMLElementTagNameMap {
    'modal-trigger': HTMLModalTriggerElement;
  }
  interface ElementTagNameMap {
    'modal-trigger': HTMLModalTriggerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'modal-trigger': JSXElements.ModalTriggerAttributes;
    }
  }
  namespace JSXElements {
    export interface ModalTriggerAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;