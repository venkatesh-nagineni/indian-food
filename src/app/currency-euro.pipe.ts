import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEuro',
})
export class CurrencyEuroPipe implements PipeTransform {

  transform(value: any): any {
    value = String(value).toString();
    let afterPoint = '';
    const plus = ',00';
    if (value.length >= 4) {
      let te;
        if (value.indexOf('.') > 0) {
            afterPoint = value.substring(value.indexOf('.'), value.length);
             te = afterPoint.substring(0, 3);
            if (te.length === 2) {
                te = te + '0';
            }
        }
        if (value.indexOf('.') > 0) {
            if (value.indexOf('-') === 0) {
                value = parseInt(value, 10);
                if (value === 0) {
                    value = '-' + value + te;
                    value = value.toString();
                } else {
                    value = value + te;
                    value = value.toString();
                }
            } else {
                value = parseInt(value, 10);
                value = value + te;
                value = value.toString();
            }
        } else {
            value = value.toString() + plus;
        }
        let lastTwo = value.substring(value.length - 2);
        const otherNumbers = value.substring(0, value.length - 3);
        if (otherNumbers !== '') {
            lastTwo = ',' + lastTwo;
        const newValue = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + lastTwo;
        parseFloat(newValue);
        return `${newValue}`;
        }
    } else {
        let newValue1 = value.replace('.', ',');
        afterPoint = newValue1.substring(newValue1.indexOf(','), newValue1.length);
        let te = afterPoint.substring(0, 3);
        if (te.length === 2) {
            te = te + '0';
        }

        if (newValue1.indexOf(',') === 0) {
            newValue1 = newValue1.toString();
            newValue1 = '0' + newValue1;
        } else if (newValue1.indexOf(',') > 0) {
            newValue1 = parseInt(newValue1, 10);
            newValue1 = newValue1.toString();
            newValue1 = newValue1 + te;
        } else {
            newValue1 = newValue1.toString() + plus;
        }
        return `${newValue1}`;

    }
}
}

/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEuro',
})
export class CurrencyEuroPipe implements PipeTransform {

  transform(value: any): any {
    value = String(value).toString();
    let afterPoint = '';
    const plus = '.00';
    if (value.length >= 4) {
      let te;
        if (value.indexOf(',') > 0) {
            afterPoint = value.substring(value.indexOf(','), value.length);
             te = afterPoint.substring(0, 3);
            if (te.length === 2) {
                te = te + '0';
            }
        }
        if (value.indexOf(',') > 0) {
            if (value.indexOf('-') === 0) {
                value = parseInt(value, 10);
                if (value === 0) {
                    value = '-' + value + te;
                    value = value.toString();
                } else {
                    value = value + te;
                    value = value.toString();
                }
            } else {
                value = parseInt(value, 10);
                value = value + te;
                value = value.toString();
            }
        } else {
            value = value.toString() + plus;
        }
        let lastTwo = value.substring(value.length - 2);
        const otherNumbers = value.substring(0, value.length - 3);
        if (otherNumbers !== '') {
            lastTwo = '.' + lastTwo;
        const newValue = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + lastTwo;
        parseFloat(newValue);
        return `${newValue}`;
        }
    } else {
        let newValue1 = value.replace(',', '.');
        afterPoint = newValue1.substring(newValue1.indexOf('.'), newValue1.length);
        let te = afterPoint.substring(0, 3);
        if (te.length === 2) {
            te = te + '0';
        }

        if (newValue1.indexOf('.') === 0) {
            newValue1 = newValue1.toString();
            newValue1 = '0' + newValue1;
        } else if (newValue1.indexOf('.') > 0) {
            newValue1 = parseInt(newValue1, 10);
            newValue1 = newValue1.toString();
            newValue1 = newValue1 + te;
        } else {
            newValue1 = newValue1.toString() + plus;
        }
        return `${newValue1}`;

    }
}
} */
