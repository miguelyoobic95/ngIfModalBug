import { Component } from '@stencil/core';
import { showModal } from '../../../utils/helpers';

@Component({
    tag: 'modal-trigger',
    styleUrl: 'modal-trigger.scss',
    scoped: true
})
export class ModalTriggerComponent {

    componentDidLoad() {
    }

    openModal() {
        const modal = document.createElement('modal-content');
        showModal(modal).then(retVal => {
            console.log(retVal);
        });
    }

    render(): JSX.Element {
        return (
            <div onClick={this.openModal.bind(this)}>
                CLICK to open modal from the stencil side.
            </div>
        );
    }
}
