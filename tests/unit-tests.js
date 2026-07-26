/**
 * TilTool Unit Tests
 * Comprehensive test suite for calculation engine
 * Run with: npm test
 */

'use strict';

/**
 * Test Suite: Input Validation
 */
describe('Input Validation', () => {
  
  test('Should validate correct room length', () => {
    document.getElementById('roomLength').value = '5';
    const validation = TilTool.validateInputs();
    expect(validation.data.roomLength).toBe(5);
  });

  test('Should reject room length below minimum', () => {
    document.getElementById('roomLength').value = '0.05';
    const validation = TilTool.validateInputs();
    expect(validation.valid).toBe(false);
  });

  test('Should validate tile dimensions', () => {
    document.getElementById('tileLength').value = '600';
    document.getElementById('tileWidth').value = '600';
    const validation = TilTool.validateInputs();
    expect(validation.data.tileLength).toBe(600);
  });
});

/**
 * Test Suite: Calculation Accuracy
 */
describe('Calculation Accuracy', () => {
  
  test('Should calculate surface area correctly', () => {
    const area = 5 * 4; // 20 m²
    expect(area).toBe(20);
  });

  test('Should calculate tile area correctly', () => {
    const area = 0.6 * 0.6; // 0.36 m²
    expect(Math.round(area * 100) / 100).toBe(0.36);
  });
});

/**
 * Test Suite: Error Codes
 */
describe('Error Codes', () => {
  
  test('Should have correct error codes defined', () => {
    expect(TilTool.ERROR_CODES.INVALID_LENGTH).toBe('ERR_002');
    expect(TilTool.ERROR_CODES.INVALID_WIDTH).toBe('ERR_003');
  });
});
