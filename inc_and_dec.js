if (!(ReactiveVar.prototype.inc && ReactiveVar.prototype.inc.constructor === Function)) {
  ReactiveVar.prototype.inc = function(step, reactive) {
    step = step === void 0 ? 1 : (step ^ (step >> 31)) - (step >> 31);
    var val = reactive ? this.get() : this.curValue;
    return this.set(val + step);
  };
}

if (!(ReactiveVar.prototype.dec && ReactiveVar.prototype.dec.constructor === Function)) {
  ReactiveVar.prototype.dec = function(step, reactive) {
    step = step === void 0 ? 1 : (step ^ (step >> 31)) - (step >> 31);
    var val = reactive ? this.get() : this.curValue;
    return this.set(val - step);
  };
}
