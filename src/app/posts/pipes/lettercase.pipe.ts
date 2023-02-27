import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lettercase'
})
export class LettercasePipe implements PipeTransform {

  /**
   * Transforma el valor de entrada en mayúsculas o minúsculas. Si no se especifica el parámetro isUppercase,
   * será transformado a minúsculas por defecto.
   * @param value - Valor de entrada.
   * @param isUppercase Condición para transformar el valor (opcional).
   * @returns Valor transformado.
   */
  transform(value: string, isUppercase?: boolean): string {
    if (isUppercase) {
      return value.toUpperCase();
    }
    return value.toLowerCase();
  }

}
