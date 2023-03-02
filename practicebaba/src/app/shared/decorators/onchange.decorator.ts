export function OnChangesOe<V>(callBackFn: (value: V) => void) {
  const psudoKey = Symbol();
  return function <T>(target: T | Function, key: string) {
    Object.defineProperty(target, key, {
      get() {
        return this[psudoKey];
      },
      set(val: V) {
        this[psudoKey] = val;
        callBackFn.call(this, val);
      },
    });
  };
}

export function Emoji() {
  return function <T>(target: T | Object, key: string) {
    //key is the name of property that we decorating
    //   if (target) console.log(target);
    let val: string = target[key as keyof typeof target] as string;

    const getter = () => {
      return val;
    };

    const setter = (next: any) => {
      val = `:: ${next} ::`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function Confirmable(message: string) {
  return function (
    target: Object, //parent class
    key: string | symbol, //name of func
    descriptor: PropertyDescriptor //func->obj property whose value is a function
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const allow = confirm(message);
      if (allow) {
        const result = original.apply(this, args);
        return result;
      } else {
        return null;
      }
    };
    return descriptor;
  };
}
