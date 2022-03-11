import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class UrlValidator {
    static validar(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            // tslint:disable-next-line: max-line-length
            const reg = /^(http|https|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+@&%$#=~_-]+))*$/;
            const validacao = Validators.pattern(reg);
            const tamanho = Validators.maxLength(1000);

            if (validacao(control) !== null) {
                return validacao(control) !== null ? {
                    codigo: 'URL Inválido'
                } : null;
            } else if (tamanho(control) !== null) {
                return tamanho(control) !== null ? {
                    codigo: 'Quantide Máxima de 1000 Caracteres'
                } : null;
            }
            return null;
        };
    }
}
