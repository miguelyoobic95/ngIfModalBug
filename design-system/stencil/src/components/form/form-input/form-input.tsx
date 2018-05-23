import { Component, Prop, Event, State, EventEmitter, Element, Method } from '@stencil/core';
import { ValidatorEntry, AsyncValidator, Validator, IFormInputBase } from '@shared/interfaces';

import { setValidator, setAsyncValidator, onInputBlurred, setValueAndValidateInput, onInputFocused, onInputClear, convertValueForInputType } from '../../../utils/helpers/form-input-helpers';

@Component({
    tag: 'yoo-form-input',
    styleUrl: 'form-input.scss',
    scoped: true
})
export class YooFormInputComponent implements IFormInputBase<string | number> {
    @Prop({ mutable: true }) value: string | number;
    @Prop() validators: Array<Validator<string> | ValidatorEntry> = [];
    @Prop() asyncValidators: Array<AsyncValidator<string>>;
    @Prop() placeholder: string;
    @Prop() placeholdertolabel: boolean;
    @Prop() required: boolean;
    @Prop() readonly: boolean;
    @Prop() iconPrefix: string;
    @Prop() iconSuffix: string;
    @Prop() tooltip: string;
    @Prop() type: string = 'text';
    @Prop({ mutable: true }) borderColor: string;
    @Prop() showPasswordToggle: boolean = false;
    @Prop() showInputClear: boolean = false;

    @Event() validityChanged: EventEmitter<boolean>;
    @Event() inputBlurred: EventEmitter<any>;
    @Event() inputFocused: EventEmitter<boolean>;
    @Event() inputChanged: EventEmitter<any>;

    @Event() iconClicked: EventEmitter<string>;

    @State() isLabelAboveVisible: boolean;
    @State() inputTypeState: string;
    @State() validity: boolean;

    @Element() host: HTMLStencilElement;

    // private coreConfig: ICoreConfig = (window as any).coreConfigService;

    // Reduced Validators
    _validator: Validator<string> = (x: string) => true;
    _asyncValidator: AsyncValidator<string> = async (x: string) => true;

    componentWillLoad() {
        setValidator(this.validators);
        setAsyncValidator(this.asyncValidators);
        this.inputTypeState = this.type;
    }

    @Method()
    isValid() {
        return this.validity;
    }

    onInputClear(): void {
        this.value = '';
        this.iconClicked.emit('clear');
    }

    onIconClicked(icon) {
        this.iconClicked.emit(icon);
    }

    onInputChanged(ev: any): void {
        let value = ev.target && ev.target.value && convertValueForInputType(ev.target.value, this.type);
        setValueAndValidateInput(value, this);
    }

    onShowPassword(): void {
        this.inputTypeState === 'password' ? this.inputTypeState = 'text' : this.inputTypeState = 'password';
    }

    renderReadonly() {
        return <div class="readonly">{this.value}</div>;
    }

    renderEditable() {
        return [
            this.placeholdertolabel && this.placeholder ?
                <div class={
                    this.placeholdertolabel && this.isLabelAboveVisible ? 'label active' :
                        (this.placeholdertolabel && !this.isLabelAboveVisible ? 'label' : 'label active')
                }>
                    {this.placeholder}
                    {this.required ? <span class="label-required">*</span> : null}
                </div> : ''
            ,
            <div class={
                this.placeholdertolabel && this.isLabelAboveVisible ? ' input-container placeholderlabel active' :
                    (this.placeholdertolabel && !this.isLabelAboveVisible ? 'input-container placeholderlabel' : 'input-container')
            }>
                {this.iconPrefix ?
                    <div class="icon-prefix" attr-layout="row">
                        <i class={this.iconPrefix}></i>
                    </div> : null}
                <input class="swiper-no-swiping" type={this.inputTypeState}
                    placeholder={!this.placeholdertolabel || !this.isLabelAboveVisible ? this.placeholder : ''}
                    value={this.value}
                    required={this.required}
                    onBlur={ev => onInputBlurred(ev, this, '.input-container')}
                    onInput={ev => this.onInputChanged(ev)}
                    onFocus={ev => onInputFocused(ev, this, '.input-container')}
                />
                {this.type === 'password' && this.showPasswordToggle ?
                    <div class="icon-suffix" onClick={this.onShowPassword.bind(this)} attr-layout="row">
                        <i class={this.inputTypeState === 'password' ? 'yo-eye' : 'yo-eye-solid'} title="Show Password"></i>
                    </div>
                    : null}
                {this.showInputClear ?
                    <div class="icon-suffix" onClick={ev => onInputClear(ev, this)} attr-layout="row">
                        <i class="yo-close" title="Clear"></i>
                    </div>
                    : null}
                {this.iconSuffix ?
                    <div class="icon-suffix" onClick={ev => this.onIconClicked(this.iconSuffix)} attr-layout="row">
                        <yoo-tooltip>
                            <i class={this.iconSuffix} title={this.tooltip}></i>
                        </yoo-tooltip>
                    </div>
                    : null}
            </div>
        ];
    }

    render(): JSX.Element {
        return this.readonly ? this.renderReadonly() : this.renderEditable();
    }

}
