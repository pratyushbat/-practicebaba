import { Sticker } from '../shared/decorators/onchange.decorator';
@Sticker({
  stickers: ['Github', 'Google', 'Mozilla', 'Angular'],
})
export class Laptop {
  message = 'hello';
  constructor() {}
}
