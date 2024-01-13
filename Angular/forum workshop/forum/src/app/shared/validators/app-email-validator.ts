import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  const domainStr = domains.join('|');
  const regexp = new RegExp(`[^@]{6,}@gmail\.(${domainStr})$`);

  return (control) => {
    return control.value === '' || regexp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
