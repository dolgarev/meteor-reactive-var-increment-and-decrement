if (!(ReactiveVar.prototype.inc && ReactiveVar.prototype.inc.constructor === Function)) {
  ReactiveVar.prototype.inc = function(step) {
    step = step === void 0 ? 1 : (step ^ (step >> 31)) - (step >> 31);
    return this.set(this.get() + step);
  };
}

if (!(ReactiveVar.prototype.dec && ReactiveVar.prototype.dec.constructor === Function)) {
  ReactiveVar.prototype.dec = function(step) {
    step = step === void 0 ? 1 : (step ^ (step >> 31)) - (step >> 31);
    return this.set(this.get() - step);
  };
}
