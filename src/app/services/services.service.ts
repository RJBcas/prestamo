import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  private preventKey(event) {

    return event.keyCode !== 13;
    }
    public enmascararMontoPesos(monto, conPrefijo) {

      if (!monto) {
        return '';
      }
      let num = monto;
      let prefijo = '';

      if (typeof num === 'number') {
        // Si viene un numero se verifica si se requiere el prefijo o no
        prefijo = num < 0 ? '- ' : '+ ';

        prefijo = conPrefijo ? prefijo : '';
        num = Math.abs(num);
        num = Math.round(num);
      } else {
        // Si es un string se procesa
        // console.log('Numero antes el proceso', num)
        // Solo dejamos los numeros
        num = num.replace(/\D/g, '');
        // console.log('Numero despues el proceso', num)

      }

      let formateado = num + '';
      // console.log('Formateado: ', formateado);

      const size = formateado.length;

      if (size === 0) {
        return '';
      }

      const separadores = Math.floor(size / 3);
      const sobrantes = size % 3;


      for (let i = 1; i <= separadores; i++) {


        // let separador = i > 1 ? '’' : '.'; //Esta linea sirve para que el separador de millones sea una comilla
        let separador = '.';

        if (sobrantes === 0 && i === separadores) {
          separador = '';
        }

        const indexToReplace = (-i * 3);
        const separadoresAñadidos = (i - 1);
        formateado = formateado.slice(0, indexToReplace - separadoresAñadidos)
        + separador + formateado.slice(indexToReplace - separadoresAñadidos);
      }

      formateado = prefijo + '$' + formateado;

      return formateado;
    }


    public desenmascararMontoPesos(monto) {

      // console.log('Desenmascarando: ', monto)

      let num = monto ? monto + '' : '0';
      // console.log('Numero tratado: ',num)

      num = num = num.replace(/\D/g, '');


      // console.log('Monto desenmascarado: ', num)
      return Number(num);
    }

  public validarMontoPesos = (event, name, formcontrol) => {


    const field =  formcontrol.get(name);

    const value = field.value;

    this.preventKey(event) ? field.setValue(this.enmascararMontoPesos(value, false)) : console.log('Key prevented', event);
  }
}
