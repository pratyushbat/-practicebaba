import { UsersComponent } from '../../pages/users/users.component';
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
        console.log('-----------');
        console.log(result);
        return '---';
      } else {
        return null;
      }
    };
    return descriptor;
  };
}

export function Sticker(config: any) {
  return function (target: any) {
    target.prototype.stickers = config.stickers;
  };
}

export function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const data = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = data.fact;
    }
  };
}

export function ReadOnly(value: any) {
  return function (
    target: any, //parent class
    key: string | symbol
  ) {
    Object.defineProperty(target, key, {
      set: () => (target.key = value),
      get: () => value,
    });
  };
}

//class decorator
export function ClassComponentDec(target: Function) {
  target.prototype.id = 100;
}

export function ClassComponentDecFact(option: { id: string }) {
  return (target: Function & typeof UsersComponent) => {
    (target as any).elementId = option.id;
  };
}
//function decorator
export function MethodTest(
  target: Object,
  key: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(key);
  descriptor.value = function (...args: any[]) {
    console.log(args);
    return (
      (target as any).id +
      `Hello ::  ${args}` +
      '' +
      (target as any).todayrdonly
    );
  };
}

//[property decorator]
export function Prop(target: Object, key: string) {
  let value: string;
  Object.defineProperty(target, key, {
    get: () => value,
    set: (newVal: string) => {
      console.log('setting');
      value = newVal;
    },
  });
}
//parameter decorator
export function Param(_target: Object, propertyName: string, index: number) {
  console.log('--------');
  console.log(propertyName, index);
}

export function g(name: string) {
  console.log('g(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const fn = descriptor.value;
    // descriptor.value=()=>{
    //   console.log('overwritten');
    // }

    descriptor.value = () => fn(name);
  };
}

function f() {
  console.log('f(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const fn = descriptor.value;
    descriptor.value = (...args) => {
      console.log('-------');
      const v = fn(...args);
      return v;
    };
  };
}

export function timex(names: string) {
  console.log('f(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const fn = descriptor.value;
    descriptor.value = (...args: any[]) => {
      console.log('-----');
      console.log(names);
      console.time(names);
      const v = fn(...args);
      console.timeEnd(names);
      return v;
    };
  };
}
export function time(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = descriptor.value.bind(target); //bind this
  let i = 0;
  descriptor.value = function (...args) {
    let id = i++;
    console.log('beg---');
    console.time(key + id);
    let value = originalFn(...args);
    console.log('0---');
    console.timeEnd(key + id);
    return value;
  };
}
