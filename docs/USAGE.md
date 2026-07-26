# TilTool Usage Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Basic Calculations](#basic-calculations)
3. [Advanced Features](#advanced-features)
4. [Troubleshooting](#troubleshooting)
5. [Examples](#examples)

## Getting Started

### Opening the Application

1. Download or clone the repository
2. Open `index.html` in your web browser
3. No internet connection required
4. Application loads immediately

### System Requirements

- **Browser**: Chrome, Firefox, Safari, Edge (latest versions)
- **Screen Size**: Works on phones, tablets, and desktops
- **Storage**: No local storage required
- **Connection**: Offline compatible

## Basic Calculations

### Step 1: Enter Surface Measurements

**Length and Width** (in meters)
- Enter the total length of the surface to be tiled
- Enter the total width of the surface
- Minimum: 0.1m | Maximum: 1000m
- Example: 5m × 4m bathroom

### Step 2: Specify Tile Dimensions

**Tile Length and Width** (in millimeters)
- Enter individual tile length (e.g., 600mm = 60cm)
- Enter individual tile width (e.g., 600mm = 60cm)
- Range: 50mm to 3000mm
- Common sizes:
  - Small tiles: 200 × 200mm
  - Medium tiles: 400 × 400mm
  - Large tiles: 600 × 600mm
  - Extra-large tiles: 800 × 800mm

### Step 3: Configure Wastage Settings

**Wastage Cut Margin**
- 5%: Simple grid layouts (square patterns only)
- 10%: Standard/staggered layouts (recommended for most projects)
- 15%: Diagonal/complex patterns (recommended)

**Box Coverage** (in m²)
- Find this on your tile box packaging
- Example: 1.44 m² per box
- Affects number of boxes to order

### Step 4: Set Grout Line Width

**Grout Width Options**
- 1.5mm: Small joints (modern, minimalist look)
- 2mm: Standard joints (most common)
- 3mm: Medium joints
- 5mm: Large joints (rustic, traditional look)
- 10mm: Extra-large joints (statement style)

**Cut Piece Percentage**
- Expected percentage of tiles that will be cut/trimmed
- Typical range: 5-15%
- Affects final tile count

### Step 5: Calculate

1. Click **"Calculate Layout & Compliance"** button
2. Results display immediately
3. Review compliance alerts
4. Export if needed

## Understanding the Results

### Basic Calculations
- **Total Surface Area**: Total m² to be covered
- **Single Tile Area**: Area of one tile in m²
- **Base Tiles Needed**: Minimum tiles without wastage

### Wastage & Contingency
- **Wastage Factor**: Your selected percentage
- **Cut Piece Allowance**: Tiles needed for cutting
- **Total Wastage Amount**: Extra tiles as buffer

### Final Requirements
- **Total Tiles to Purchase**: Base + wastage + cutting
- **Boxes to Order**: Number of boxes needed
- **Total Coverage Area**: Total m² covered by boxes

### Layout Information
- **Tiles per Row**: Number of tiles along length
- **Tiles per Column**: Number of tiles along width
- **Grout Line Spacing**: Your selected joint width

## Advanced Features

### Compliance Verification

The system automatically checks:
✓ Wastage percentage (5-20% recommended)
✓ Grout width (1.5-10mm standard)
✓ Project size appropriateness
✓ Large project considerations

**Warnings appear if:**
- Wastage is outside recommended range
- Grout width exceeds standards
- Project is very large (>500m²)
- Project is very small (<1m²)

### Export Report

1. Calculate your project
2. Click **"Export Report (JSON)"**
3. File downloads automatically
4. Use for:
   - Procurement documentation
   - Project records
   - Cost estimation
   - Sharing with contractors

**Report includes:**
- Timestamp
- All input parameters
- Final calculations
- Compliance status

### Clear Form

1. After calculation, **"Clear Form"** button appears
2. Resets all fields to defaults
3. Clears previous results

## Error Codes and Solutions

| Code | Error | Solution |
|------|-------|----------|
| ERR_001 | Validation failed | Fill all required fields |
| ERR_002 | Invalid length | Use 0.1-1000m |
| ERR_003 | Invalid width | Use 0.1-1000m |
| ERR_004 | Invalid tile length | Use 50-3000mm |
| ERR_005 | Invalid tile width | Use 50-3000mm |
| ERR_006 | Invalid box coverage | Use positive number |
| ERR_007 | Invalid cut % | Use 0-100% |
| ERR_008 | Calculation error | Check inputs and retry |
| ERR_009 | DOM element missing | Reload browser |
| ERR_010 | Export error | Check browser permissions |

## Troubleshooting

### Application Won't Load
- Refresh browser (F5)
- Clear browser cache
- Try different browser
- Disable browser extensions

### Results Seem Wrong
- Verify all inputs are correct
- Check unit conversions (mm vs m)
- Confirm box coverage from packaging
- Recalculate with different values

### Can't Export
- Check browser download permissions
- Disable popup blockers
- Try different browser
- Manually copy results

### Mobile Issues
- Zoom out if text is too large
- Use portrait orientation
- Update mobile browser
- Clear mobile browser cache

## Examples

### Example 1: Small Bathroom

**Project**: 2m × 2m bathroom floor
**Tiles**: 400 × 400mm (400mm²)
**Box Coverage**: 1.6 m²
**Layout**: Standard grid
**Grout**: 2mm standard joints

**Calculation**:
- Surface area: 4 m²
- Tile area: 0.16 m²
- Base tiles: 25 pieces
- With 10% wastage: ~28 pieces
- Boxes needed: 2 boxes

### Example 2: Large Living Room

**Project**: 6m × 5m living room floor
**Tiles**: 600 × 600mm
**Box Coverage**: 1.44 m²
**Layout**: Staggered pattern
**Grout**: 3mm medium joints

**Calculation**:
- Surface area: 30 m²
- Tile area: 0.36 m²
- Base tiles: 84 pieces
- With 10% wastage: ~93 pieces
- Boxes needed: 7 boxes

### Example 3: Complex Pattern

**Project**: 4m × 3m kitchen with diagonal layout
**Tiles**: 300 × 300mm
**Box Coverage**: 1.08 m²
**Layout**: Diagonal pattern (15% wastage)
**Grout**: 2mm joints

**Calculation**:
- Surface area: 12 m²
- Tile area: 0.09 m²
- Base tiles: 134 pieces
- With 15% wastage + cuts: ~162 pieces
- Boxes needed: 15 boxes

## Best Practices

1. **Always add extra**: Manufacturers recommend 10% buffer
2. **Order full boxes**: Partial box orders may incur extra charges
3. **Color variation**: Check tiles are from same production batch
4. **Get samples**: Test tiles in actual lighting first
5. **Review layout**: Use results to plan tile arrangement
6. **Save reports**: Keep JSON exports for records
7. **Verify measurements**: Double-check surface dimensions
8. **Account for cuts**: Edge and corner tiles require cutting

## Tips for Accuracy

- Measure surface multiple times
- Account for slopes and uneven surfaces
- Include alcoves and fixtures
- Subtract door frames and thresholds
- Document all measurements
- Take photos of the space
- Consult with tile suppliers
- Get multiple quotes

## Support

**For help:**
- Check documentation in `/docs` folder
- Review error codes above
- Check GitHub issues
- Contact: support@tiltool.app

**Report bugs:**
- Visit GitHub Issues
- Include error code
- Provide browser/OS
- Share calculation details

Happy tiling!
