import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CodigoBarrasValidator {
    static validar(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const validacao = Validators.pattern(/^[0-9\s]+[]?$/);
            const requerido = Validators.required;
            const tamanho = Validators.maxLength(16);

            if (validacao(control) !== null) {
                return validacao(control) !== null ? {
                    codigo: 'Somente são aceitos digitos e Espaços'
                } : null;
            } else if (requerido(control) !== null) {
                return requerido(control) !== null ? {
                    codigo: 'Campo obrigatório.'
                } : null;
            } else if (tamanho(control) !== null) {
                return tamanho(control) !== null ? {
                    codigo: 'Quantide Máxima de 16 Dígitos'
                } : null;
            }
            return null;
        };
    }
}
