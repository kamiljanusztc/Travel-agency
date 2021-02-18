import pricing from '../data/pricing.json';
import { parseOptionPrice } from './parseOptionPrice';

export const calculateTotal = (tripCost, options) => {
  let total = parseOptionPrice(tripCost).value;
  let multiplier = 0;
  for (let option of pricing) {
    const currentValue = options[option.id];
    if (typeof (currentValue) != 'undefined') {
      if (Array.isArray(currentValue) && Array.isArray(option.values)) { //jeśli wartość opcji w stanie aplikacji jest tablicą, a w pricing.json jest tablica values dla tej opcji, to bierzemy pod uwagę cenę każdego z zaznaczonych wariantów – ta sytuacja będzie dotyczyła opcji typu checkboxes,
        for (let optionId of currentValue) {
          const value = option.values.filter(opt => opt.id == optionId)[0];
          const price = parseOptionPrice(value.price);
          if (price.type == 'multiplier') {
            multiplier += price.value;
          }
          else if (price.type == 'number') {
            total += price.value;
          }
        }
      }
      else if (currentValue !== '' && Array.isArray(option.values)) { //jeśli wartość opcji w stanie aplikacji nie jest tablicą, ale w pricing.json jest tablica values dla tej opcji, to znajdujemy ten element z values, który ma id zapisane jako wartość tej opcji w stanie aplikacji
        const value = option.values.filter(opt => opt.id == currentValue)[0];
        const price = parseOptionPrice(value.price);
        if (price.type == 'multiplier') {
          multiplier += price.value;
        }
        else if (price.type == 'number') {
          total += price.value;
        }
      }
      else if (option.type == 'number') { //mnożymy jej wartość przez cenę zawartą w pricing.json dla tej opcji.
        const price = parseOptionPrice(option.price);
        if (price.type == 'multiplier') {
          multiplier += price.value * currentValue;
        }
        else if (price.type == 'number') {
          total += price.value * currentValue;
        }
      }
    }
  }
  return total * multiplier;
};
