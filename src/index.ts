function logger(value: any) {
  return (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const childFunction = descriptor.value;
    descriptor.value = (...args: any[]) => {
      console.log("before call", key);
      childFunction.apply(this, args);
      console.log("after call", key);
    };

    return descriptor;
  };
}

export class Chat {
  @logger("testen")
  write(message: string) {
    console.log(message);
  }
}

const myChat = new Chat();
myChat.write("hallo welt");
