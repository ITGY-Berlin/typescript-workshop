function component(constructor: Function) {
  constructor.prototype.isComponent = true;
}

@component
export class Chat {}
