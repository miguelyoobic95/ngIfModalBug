var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function combineAsyncValidators(x, y) {
    return (a) => __awaiter(this, void 0, void 0, function* () { return (yield x(a)) && (yield y(a)); });
}
export function getReducedAsyncValidator(validators) {
    return validators.reduce(combineAsyncValidators, (a) => __awaiter(this, void 0, void 0, function* () { return true; }));
}
