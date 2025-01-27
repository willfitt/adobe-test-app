const convertIntToRomanNumeral = require("./convertIntToRomanNumeral");

describe('convertIntToRomanNumeral', () => {
  test('should convert 1 to "I"', () => {
    expect(convertIntToRomanNumeral(1)).toBe('I');
  });

  test('should convert 4 to "IV"', () => {
    expect(convertIntToRomanNumeral(4)).toBe('IV');
  });

  test('should convert 9 to "IX"', () => {
    expect(convertIntToRomanNumeral(9)).toBe('IX');
  });

  test('should convert 42 to "XLII"', () => {
    expect(convertIntToRomanNumeral(42)).toBe('XLII');
  });

  test('should convert 99 to "XCIX"', () => {
    expect(convertIntToRomanNumeral(99)).toBe('XCIX');
  });

  test('should convert 123 to "CXXIII"', () => {
    expect(convertIntToRomanNumeral(123)).toBe('CXXIII');
  });

  test('should convert 400 to "CD"', () => {
    expect(convertIntToRomanNumeral(400)).toBe('CD');
  });

  test('should convert 944 to "CMXLIV"', () => {
    expect(convertIntToRomanNumeral(944)).toBe('CMXLIV');
  });

  test('should convert 3888 to "MMMDCCCLXXXVIII"', () => {
    expect(convertIntToRomanNumeral(3888)).toBe('MMMDCCCLXXXVIII');
  });
});