function limit(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: number;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: number) {
      if (newVal <= limit) {
        value = newVal;
      }
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

export class Chat {
  @limit(100)
  maxMessages = 1;
}

const myChat = new Chat();
myChat.maxMessages = 1;
console.log(myChat.maxMessages);
myChat.maxMessages = 50;
console.log(myChat.maxMessages);
myChat.maxMessages = 200;
console.log(myChat.maxMessages);
