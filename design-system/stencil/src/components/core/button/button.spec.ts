import { TestWindow } from '@stencil/core/testing';
import { YooButtonComponent } from './button';
//import * as domtoimage from 'dom-to-image';

describe('YooButtonComponent', () => {
    let window;
    beforeEach(() => {
        window = new TestWindow();
    });
    it('should build', () => {
        expect(new YooButtonComponent()).toBeTruthy();
    });

    describe('Snapshots', () => {
        it ('Should have text content', async () => {
            let element = await window.load({
               components: [YooButtonComponent],
               html: '<yoo-button text="Button accent" class="accent"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have text content and icon', async () => {
            let element = await window.load({
               components: [YooButtonComponent],
               html: '<yoo-button text="Button accent" icon="yo-fire"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have icon only', async () => {
            let element = await window.load({
               components: [YooButtonComponent],
               html: '<yoo-button text="Button loading" is-loading="true" class="icon-only"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });

        it ('Should have loading icon and no text', async () => {
            let element = await window.load({
               components: [YooButtonComponent],
               html: '<yoo-button text="Button loading" is-loading="true" class="accent"></yoo-button>'
            });
            expect(element).toMatchSnapshot();
        });
    });

    describe('rendering', () => {
        it('Should re-render when isLoading is updated', async () => {
            let element = await window.load({
                components: [YooButtonComponent],
                html: '<yoo-button text="Button loading" class="accent"></yoo-button>'
             });
             expect(element.textContent).toEqual('Button loading');
             expect(element.querySelector('img')).toBeNull();
             element.isLoading = true;
             await window.flush();
             expect(element.textContent).toEqual('');
             expect(element.querySelector('img').src).toMatch('loading.svg');
        });
    });

    describe('events', () => {

        let emitEvent = jest.fn();
        it('should not trigger click event when disabled', async () => {
            let element = await window.load({
                components: [YooButtonComponent],
                html: '<yoo-button text="Button" disabled="true" class="accent"></yoo-button>'
             });
            window.document.addEventListener('buttonClicked', emitEvent);

            let button = element.querySelector('button.container');
            await button.click();
            expect(emitEvent).not.toHaveBeenCalled();
        });

        it('should not trigger click event when disabled on loading ', async () => {
            let element = await window.load({
                components: [YooButtonComponent],
                html: '<yoo-button text="Button" disabled="true" is-loading="true" class="accent"></yoo-button>'
             });
            window.document.addEventListener('buttonClicked', emitEvent);

            let button = element.querySelector('div.container');
            await button.click();
            expect(emitEvent).not.toHaveBeenCalled();
        });


        it('Should emit custom event when clicked ', async () => {
            let element = await window.load({
                components: [YooButtonComponent],
                html: '<yoo-button text="Button" class="icon-only"></yoo-button>'
            });
            window.document.addEventListener('buttonClicked', emitEvent);

            let button = element.querySelector('button.container');
            await button.click();
            expect(emitEvent).toHaveBeenCalled();
            expect(emitEvent).toHaveEventData(true);
        });

        it('Should emit custom event when clicked on loading', async () => {
            let element = await window.load({
                components: [YooButtonComponent],
                html: '<yoo-button text="Button" class="icon-only" is-loading="true"></yoo-button>'
            });
            window.document.addEventListener('buttonClicked', emitEvent);

            let button = element.querySelector('div.container');
            await button.click();
            expect(emitEvent).toHaveBeenCalled();
            expect(emitEvent).toHaveEventData(true);
        });

    });
});
