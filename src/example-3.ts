interface HtmlComponent {
    selector: string;
    template: string;
}

function component(metaData: HtmlComponent) {
  return function (constructor: Function) {
    constructor.prototype.isComponent = true;
    constructor.prototype.selector = metaData.selector;
    constructor.prototype.template = metaData.template;
  };
}

@component({
    selector: 'chat',
    template: '<div>chat example</div>'
})
export class Chat {}
