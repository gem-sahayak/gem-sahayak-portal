import { ValidationError } from './Engine';

export interface ValidationRule {
  id: string;
  name: string;
  level: 'FAIL' | 'WARNING';
  policyKey: string;
}

export interface ValidationResult {
  ruleId: string;
  verdict: 'PASS' | 'WARNING' | 'FAIL';
  errors: ValidationError[];
  warnings: ValidationError[];
}

export interface IValidator {
  rules: ValidationRule[];
  validate(state: any, policy: any): Promise<ValidationResult[]>;
}
