import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class PrecoValidator {
    static validar(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const validacao = Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/);
            const requerido = Validators.required;
            const tamanho =  Validators.max(99999999999999.99);

            if (validacao(control) !== null) {
                return validacao(control) !== null ? {
                    codigo: 'Somente duas Casas decimais são Aceitas'
                } : null;
            } else if (requerido(control) !== null) {
                return requerido(control) !== null ? {
                    codigo: 'Campo obrigatório.'
                } : null;
            } else if (tamanho(control) !== null) {
                return tamanho(control) !== null ? {
                    codigo: 'Quantide Máxima de 16 dígitos incluindo as casas decimais'
                } : null;
            }
            return null;
        };
    }
}
