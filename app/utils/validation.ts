/**
 * Validation utilities for forms
 */

export interface ValidationResult {
  valid: boolean
  error?: string
}

/**
 * Validate an email address
 */
export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return { valid: false, error: 'Email is required' }
  }
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' }
  }
  return { valid: true }
}

/**
 * Validate a phone number
 */
export function validatePhone(phone: string): ValidationResult {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
  if (!phone) {
    return { valid: true } // Phone is optional
  }
  if (!phoneRegex.test(phone)) {
    return { valid: false, error: 'Please enter a valid phone number' }
  }
  return { valid: true }
}

/**
 * Validate a required field
 */
export function validateRequired(value: any, fieldName: string): ValidationResult {
  if (value === undefined || value === null || value === '') {
    return { valid: false, error: `${fieldName} is required` }
  }
  if (typeof value === 'string' && value.trim() === '') {
    return { valid: false, error: `${fieldName} is required` }
  }
  return { valid: true }
}

/**
 * Validate a minimum length
 */
export function validateMinLength(
  value: string,
  minLength: number,
  fieldName: string
): ValidationResult {
  if (value && value.length < minLength) {
    return {
      valid: false,
      error: `${fieldName} must be at least ${minLength} characters`
    }
  }
  return { valid: true }
}

/**
 * Validate a positive number
 */
export function validatePositiveNumber(
  value: number,
  fieldName: string
): ValidationResult {
  if (isNaN(value) || value <= 0) {
    return { valid: false, error: `${fieldName} must be a positive number` }
  }
  return { valid: true }
}

/**
 * Validate a donation amount
 */
export function validateDonationAmount(amount: number): ValidationResult {
  if (!amount || amount <= 0) {
    return { valid: false, error: 'Please enter a donation amount' }
  }
  if (amount < 1) {
    return { valid: false, error: 'Minimum donation is £1' }
  }
  if (amount > 100000) {
    return { valid: false, error: 'Please contact us for large donations' }
  }
  return { valid: true }
}
