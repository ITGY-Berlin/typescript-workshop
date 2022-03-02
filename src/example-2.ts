function component(selector: string) {
  return function (constructor: Function) {
    constructor.prototype.isComponent = true;
    constructor.prototype.selector = selector;
  };
}

@component("chat")
export class Chat {}
