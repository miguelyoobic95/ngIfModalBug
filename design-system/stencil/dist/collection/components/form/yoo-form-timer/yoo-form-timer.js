import { getElementDimensions } from '../../../utils/helpers';
import moment from 'moment';
import { isNumber } from 'lodash-es';
export class YooFormTimerComponent {
    constructor() {
        this.smallWindowSize = false;
    }
    componentDidLoad() {
        this.resizeComponent();
        parent.addEventListener('resize', () => this.resizeComponent()); //This implementaion must be used otherwise the host element will become undefined on page resize.
    }
    timeChanged(event, position) {
        let hours = Number(event.detail.split(':')[0]);
        let minutes = Number(event.detail.split(':')[1]);
        if (isNumber(hours) && isNumber(minutes)) {
            if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
                if (position === 'start') {
                    this.startHour = hours;
                    this.startMinute = minutes;
                }
                else {
                    this.endTime = moment(this.endTime).hours(hours).minutes(minutes);
                }
            }
        }
        if (this.startHour && this.startMinute && this.endTime) {
            this.calculatedTime = this.formatTime(this.calculateTotalTime());
            this.timeCalculated.emit(this.calculatedTime);
        }
    }
    formatTime(time) {
        let removeDateStringFromCalc = time.split(' ')[4];
        return removeDateStringFromCalc.split(':')[0] + ':' + removeDateStringFromCalc.split(':')[1];
    }
    calculateTotalTime() {
        let calcTime = moment(this.endTime).subtract(this.startHour, 'h');
        return moment(calcTime).subtract(this.startMinute, 'm').toLocaleString();
    }
    resizeComponent() {
        const MAX_COMPONENT_WIDTH = 350;
        let width = getElementDimensions(this.host).width;
        MAX_COMPONENT_WIDTH > width ? this.smallWindowSize = true : this.smallWindowSize = false;
    }
    render() {
        return (h("div", { class: "outer-container", "attr-layout": "row" },
            h("div", { class: "column-container", "attr-layout": "column" },
                h("div", { class: "text-container" }, "TIME IN"),
                h("yoo-form-input", { type: "time", onInputChanged: (event) => this.timeChanged(event, 'start') }),
                this.smallWindowSize ? [h("div", { class: "text-container" }, "TIME OUT"), h("yoo-form-input", { type: "time", onInputChanged: (event) => this.timeChanged(event, 'end') })] : null),
            h("div", { class: "column-container", "attr-layout": "column" },
                h("div", { class: "text-container" }, "TOTAL TASK"),
                h("div", { class: "text-container" }, this.calculatedTime),
                h("div", { class: "text-container" }, "Hrs Mins")),
            this.smallWindowSize ? null :
                h("div", { class: "column-container", "attr-layout": "column" },
                    h("div", { class: "text-container" }, "TIME OUT"),
                    h("yoo-form-input", { type: "time", onInputChanged: (event) => this.timeChanged(event, 'end') }))));
    }
    static get is() { return "yoo-form-timer"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "calculatedTime": { "state": true }, "host": { "elementRef": true }, "smallWindowSize": { "state": true }, "timeChanged": { "method": true } }; }
    static get events() { return [{ "name": "timeCalculated", "method": "timeCalculated", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:yoo-form-timer:**/"; }
}
