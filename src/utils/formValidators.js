import { PASS_MIN_LENGTH, PASS_MUST_INCLUDE_LOWER_AND_UPPER_CASE, PASS_MUST_INCLUDE_NUMBERS, PASS_MUST_INCLUDE_SPECIAL_CHAR } from "../config/constants";

export function isValidEmail(email) {
  if (!email.includes(' ') && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return true;
  return false;
}

export function isValidPassword(pass) {
  if(pass.includes(' ') || pass.length < PASS_MIN_LENGTH) return false;
  if(PASS_MUST_INCLUDE_NUMBERS && !/\d/.test(pass)) return false;
  if(PASS_MUST_INCLUDE_LOWER_AND_UPPER_CASE && !(pass.toLowerCase() !== pass && pass.toUpperCase() !== pass)) return false;
  if(PASS_MUST_INCLUDE_SPECIAL_CHAR && !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass)) return false;
  return true;
}

export function isValidName(name) {
  return !/\d/.test(name) && !/[!@#$%*()_+\-=\[\]{};:"\\|,.<>\/?]/.test(name);
}

export function isValidPhone(phone) {
  return /\d/.test(phone);
}