# TilTool API Documentation

## Overview

TilTool is a vanilla JavaScript application with no external dependencies. All functionality is contained within the `TilTool` namespace.

## Table of Contents

1. [Core Objects](#core-objects)
2. [Main Functions](#main-functions)
3. [Validation](#validation)
4. [Calculations](#calculations)
5. [Compliance](#compliance)
6. [Error Handling](#error-handling)
7. [Logging](#logging)
8. [Integration Examples](#integration-examples)

## Core Objects

### TilTool Namespace

All application functionality is accessed through the global `TilTool` object:

```javascript
TilTool.calculateLayout();
TilTool.validateInputs();
TilTool.log();
```

### Configuration Object

```javascript
const CONFIG = {
  MIN_SURFACE: 0.1,           // Minimum surface dimension (m)
  MAX_SURFACE: 1000,          // Maximum surface dimension (m)
  MIN_TILE_SIZE: 50,          // Minimum tile size (mm)
  MAX_TILE_SIZE: 3000,        // Maximum tile size (mm)
  DEFAULT_GROUT: 2,           // Default grout width (mm)
  MIN_WASTAGE: 5,             // Minimum wastage % 
  MAX_WASTAGE: 20,            // Maximum wastage %
  MIN_GROUT: 1.5,             // Minimum grout width (mm)
  MAX_GROUT: 10,              // Maximum grout width (mm)
  MIN_PROJECT_AREA: 1,        // Minimum project area (m²)
  LARGE_PROJECT_AREA: 500     // Large project threshold (m²)
};
```

## Main Functions

### calculateLayout()

Performs complete tile calculation and compliance verification.

**Signature:**
```javascript
TilTool.calculateLayout() : void
```

**Behavior:**
1. Validates all inputs
2. Performs calculations
3. Checks compliance
4. Updates UI with results
5. Shows any warnings/errors

**Example:**
```javascript
// User clicks calculate button
TilTool.calculateLayout();
```

**Throws:**
- Displays error if validation fails
- Catches and logs calculation errors

### validateInputs()

Validates all form input fields.

**Signature:**
```javascript
TilTool.validateInputs() : {
  valid: boolean,
  errors: Array<{code, message}>,
  data: {roomLength, roomWidth, tileLength, tileWidth, boxCoverage, cutPercentage}
}
```

**Returns:**
```javascript
{
  valid: true,
  errors: [],
  data: {
    roomLength: 5.0,
    roomWidth: 4.0,
    tileLength: 600,
    tileWidth: 600,
    boxCoverage: 1.44,
    cutPercentage: 5
  }
}
```

**Example:**
```javascript
const validation = TilTool.validateInputs();
if (validation.valid) {
  console.log('All inputs valid');
  const data = validation.data;
} else {
  validation.errors.forEach(error => {
    console.log(`${error.code}: ${error.message}`);
  });
}
```

### clearForm()

Resets all form fields to default values.

**Signature:**
```javascript
TilTool.clearForm() : void
```

**Example:**
```javascript
TilTool.clearForm();
// All fields reset to default
```

## Validation

### Input Constraints

All input validation follows these rules:

```javascript
// Room dimensions (meters)
0.1 <= roomLength <= 1000
0.1 <= roomWidth <= 1000

// Tile dimensions (millimeters)
50 <= tileLength <= 3000
50 <= tileWidth <= 3000

// Coverage and cutting
boxCoverage > 0
0 <= cutPercentage <= 100
```

### Validation Error Codes

| Code | Field | Condition |
|------|-------|----------|
| ERR_002 | roomLength | Invalid or out of range |
| ERR_003 | roomWidth | Invalid or out of range |
| ERR_004 | tileLength | Invalid or out of range |
| ERR_005 | tileWidth | Invalid or out of range |
| ERR_006 | boxCoverage | Invalid or ≤ 0 |
| ERR_007 | cutPercentage | Invalid or out of range |

## Calculations

### Tile Area Calculation

```javascript
// Convert millimeters to meters
const tileLengthMeters = tileLength / 1000;
const tileWidthMeters = tileWidth / 1000;

// Calculate single tile area
const tileArea = tileLengthMeters * tileWidthMeters; // m²
```

### Base Tile Count

```javascript
// Calculate surface area
const totalArea = roomLength * roomWidth; // m²

// Calculate base tiles needed
const baseTiles = Math.ceil(totalArea / tileArea);
```

### Tiles Per Layout

```javascript
// Calculate tiles per row and column
const tilesPerRow = Math.ceil(roomLength / tileLengthMeters);
const tilesPerColumn = Math.ceil(roomWidth / tileWidthMeters);
```

### Wastage Calculation

```javascript
// Wastage factor from UI (1.05 = 5%, 1.10 = 10%, etc.)
const wasteFactor = parseFloat(document.getElementById('wasteFactor').value);
const wastagePercentage = (wasteFactor - 1) * 100;

// Calculate wastage amounts
const cutAllowance = Math.ceil((baseTiles * cutPercentage) / 100);
const totalWastage = Math.ceil(baseTiles * (wasteFactor - 1)) + cutAllowance;
const finalTiles = baseTiles + totalWastage;
```

### Box Calculation

```javascript
// Calculate tiles per box
const tilesPerBox = Math.floor(boxCoverage / tileArea);

// Calculate boxes needed
const boxesNeeded = Math.ceil(finalTiles / tilesPerBox);
const totalCoverage = boxesNeeded * boxCoverage; // m²
```

## Compliance

### performComplianceChecks()

Performs construction standards verification.

**Signature:**
```javascript
TilTool.performComplianceChecks(data: {
  totalArea: number,
  tileArea: number,
  finalTiles: number,
  wastagePercentage: number,
  groutWidth: number
}) : Array<string>
```

**Returns:** Array of compliance issues (empty if all pass)

**Checks Performed:**

1. **Wastage Percentage**
   - Recommended: 5-20%
   - Warning if outside range

2. **Grout Width**
   - Recommended: 1.5-10mm
   - Warning if outside range

3. **Project Area**
   - Minimum: 1m² (very small)
   - Maximum: 500m² (very large, needs sectioning)

**Example:**
```javascript
const issues = TilTool.performComplianceChecks({
  totalArea: 20,
  tileArea: 0.36,
  finalTiles: 137,
  wastagePercentage: 10,
  groutWidth: 2
});

if (issues.length > 0) {
  issues.forEach(issue => console.warn(issue));
}
```

## Error Handling

### Error Codes

```javascript
TilTool.ERROR_CODES = {
  INPUT_VALIDATION_FAILED: 'ERR_001',
  INVALID_LENGTH: 'ERR_002',
  INVALID_WIDTH: 'ERR_003',
  INVALID_TILE_LENGTH: 'ERR_004',
  INVALID_TILE_WIDTH: 'ERR_005',
  INVALID_BOX_COVERAGE: 'ERR_006',
  INVALID_CUT_PERCENTAGE: 'ERR_007',
  CALCULATION_ERROR: 'ERR_008',
  DOM_ELEMENT_NOT_FOUND: 'ERR_009',
  EXPORT_ERROR: 'ERR_010'
};
```

### showError()

Displays error message with error code.

**Signature:**
```javascript
TilTool.showError(message: string) : void
```

**Example:**
```javascript
TilTool.showError('ERR_002: Length must be between 0.1 and 1000 meters');
```

## Logging

### Log Levels

```javascript
TilTool.LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
};
```

### log()

Logs messages with timestamp and level.

**Signature:**
```javascript
TilTool.log(level: string, message: string, data?: object) : void
```

**Example:**
```javascript
TilTool.log(TilTool.LOG_LEVELS.INFO, 'Calculation started');
TilTool.log(TilTool.LOG_LEVELS.ERROR, 'Validation failed', {errors: [...]});
```

**Output:**
```
[2024-01-15T10:30:00.000Z] [INFO] Calculation started
[2024-01-15T10:30:01.234Z] [ERROR] Validation failed {errors: [...]}
```

## Integration Examples

### Example 1: Basic Calculation

```javascript
// User fills form and clicks calculate
document.getElementById('calculateBtn').addEventListener('click', () => {
  TilTool.calculateLayout();
});
```

### Example 2: Programmatic Calculation

```javascript
// Set values programmatically
document.getElementById('roomLength').value = '5';
document.getElementById('roomWidth').value = '4';
document.getElementById('tileLength').value = '600';
document.getElementById('tileWidth').value = '600';
document.getElementById('boxCoverage').value = '1.44';

// Perform calculation
TilTool.calculateLayout();

// Get results from DOM
const finalTiles = document.getElementById('finalTiles').textContent;
const boxesNeeded = document.getElementById('boxesNeeded').textContent;
console.log(`Total tiles: ${finalTiles}, Boxes: ${boxesNeeded}`);
```

### Example 3: Error Handling

```javascript
// Custom error handling
try {
  const validation = TilTool.validateInputs();
  
  if (!validation.valid) {
    validation.errors.forEach(error => {
      TilTool.log(TilTool.LOG_LEVELS.ERROR, error.message);
    });
    return;
  }
  
  TilTool.calculateLayout();
  
} catch (error) {
  TilTool.log(TilTool.LOG_LEVELS.ERROR, 'Calculation failed', error);
}
```

## Support

For API questions or issues:
- Check this documentation
- Review code comments
- Open GitHub issue
- Contact: support@tiltool.app
