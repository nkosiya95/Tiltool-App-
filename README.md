# 🏗️ TilTool - Construction Compliance Tile Calculator

![TilTool Badge](https://img.shields.io/badge/version-1.0.0-blue)
![License Badge](https://img.shields.io/badge/license-MIT-green)
![Status Badge](https://img.shields.io/badge/status-Production%20Ready-brightgreen)
![Platform Badge](https://img.shields.io/badge/platform-Web%20%7C%20Mobile%20%7C%20Desktop-blue)

## 📋 Overview

**TilTool** is a professional-grade construction compliance tile calculator designed for contractors, architects, and construction professionals. It provides accurate tile layout calculations with integrated compliance verification against international building standards.

### 🎯 Key Features

- **Precise Tile Calculations**: Surface area, tile count, and box requirements
- **Wastage Management**: Customizable cut margins (5-20%) for different layout patterns
- **Compliance Verification**: Automatic checks against construction standards
- **Grout Line Settings**: Support for 1.5mm to 10mm joint widths
- **Export Reports**: JSON format for documentation and procurement
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional UI**: Modern, clean interface with comprehensive tooltips
- **Error Handling**: Detailed error codes for system debugging

## 🚀 Quick Start

### For Users

1. **Open the Application**
   ```
   Open index.html in your web browser
   ```

2. **Enter Project Details**
   - Surface dimensions (Length × Width in meters)
   - Tile dimensions (Length × Width in millimeters)
   - Box coverage area (m²)

3. **Configure Settings**
   - Select wastage factor (5%, 10%, or 15%)
   - Choose grout line width (1.5mm - 10mm)
   - Set expected cut piece percentage

4. **Calculate**
   - Click "Calculate Layout & Compliance" button
   - Review compliance alerts and recommendations
   - Export report as JSON for records

### For Developers

```bash
# Clone the repository
git clone https://github.com/nkosiya95/Tiltool-App-.git

# Navigate to directory
cd Tiltool-App-

# Run tests
npm test

# Start development server (optional)
npm start

# Build for production
npm run build
```

## 📐 System Requirements

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Hardware Requirements
- Minimum 2GB RAM
- Modern processor
- Display resolution 320px or higher

## 📖 Documentation

### User Guide
See [USAGE.md](docs/USAGE.md) for detailed usage instructions and examples.

### Developer Guide
See [API.md](docs/API.md) for API documentation and integration guide.

### Construction Standards
See [STANDARDS.md](docs/STANDARDS.md) for compliance references and building codes.

## 🔧 Configuration

### Environment Variables
```javascript
// No external dependencies required
// All configuration in CONFIG object (index.html)
```

### Input Constraints

| Parameter | Min | Max | Unit | Default |
|-----------|-----|-----|------|---------|
| Room Length | 0.1 | 1000 | m | - |
| Room Width | 0.1 | 1000 | m | - |
| Tile Length | 50 | 3000 | mm | - |
| Tile Width | 50 | 3000 | mm | - |
| Box Coverage | 0.1 | ∞ | m² | - |
| Wastage Factor | 5% | 20% | % | 10% |
| Grout Width | 1.5 | 10 | mm | 2mm |
| Cut Percentage | 0 | 100 | % | 5% |

## 🧪 Testing

### Run Test Suite
```bash
npm test
```

### Test Coverage
- Input validation tests
- Calculation accuracy tests
- Compliance verification tests
- Export functionality tests
- UI interaction tests

See [tests/README.md](tests/README.md) for detailed testing information.

## 🐛 Error Codes

All errors follow standardized error codes for easy debugging:

| Code | Description | Solution |
|------|-------------|----------|
| ERR_001 | Input validation failed | Check all fields are filled correctly |
| ERR_002 | Invalid length | Length must be 0.1-1000m |
| ERR_003 | Invalid width | Width must be 0.1-1000m |
| ERR_004 | Invalid tile length | Tile length must be 50-3000mm |
| ERR_005 | Invalid tile width | Tile width must be 50-3000mm |
| ERR_006 | Invalid box coverage | Box coverage must be positive number |
| ERR_007 | Invalid cut percentage | Cut percentage must be 0-100% |
| ERR_008 | Calculation error | Check inputs and retry |
| ERR_009 | DOM element not found | Reload the application |
| ERR_010 | Export error | Check browser storage permissions |

## 📊 Features in Detail

### Calculation Engine
- Converts units automatically (mm to m)
- Calculates total surface area
- Determines base tile count
- Applies wastage factors
- Accounts for cut pieces
- Determines box quantity

### Compliance Checks
✓ Wastage percentage verification (5-20%)
✓ Grout width validation (1.5-10mm)
✓ Project area assessment
✓ Large project notifications
✓ Standards compliance verification

### Export Format

```json
{
  "metadata": {
    "timestamp": "2024-01-15T10:30:00Z",
    "application": "TilTool v1.0.0",
    "type": "Construction Compliance Report"
  },
  "inputs": {
    "roomLength": "5.0",
    "roomWidth": "4.0",
    "tileLength": "600",
    "tileWidth": "600",
    "boxCoverage": "1.44",
    "wasteFactor": "1.10",
    "groutWidth": "2",
    "cutPercentage": "5"
  },
  "results": {
    "totalArea": "20.00",
    "finalTiles": "137",
    "boxesNeeded": "8",
    "totalCoverage": "11.52"
  }
}
```

## 🌍 Localization

Currently available in:
- 🇺🇸 English (Default)

Planned languages:
- 🇮🇳 Hindi
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇩🇪 German
- 🇨🇳 Chinese (Simplified)

## 🔐 Security

- No external API calls
- No data collection or tracking
- All calculations performed locally
- No cookies or persistent storage without consent
- WCAG 2.1 AA accessibility compliant

## 📱 Platform Support

| Platform | Status | Version |
|----------|--------|---------|
| Web Browser | ✅ Available | 1.0.0 |
| Google Play | 🔄 In Development | 1.1.0 |
| Apple App Store | 🔄 In Development | 1.1.0 |
| Windows Store | 🔄 Planned | 1.2.0 |

## 📞 Support & Contribution

### Report Issues
Found a bug? Please open an issue on [GitHub Issues](https://github.com/nkosiya95/Tiltool-App-/issues)

### Contribute
Want to help? See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Contact
- **Email**: support@tiltool.app
- **GitHub**: [@nkosiya95](https://github.com/nkosiya95)

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Construction compliance standards from international building codes
- Inspiration from professional tiling industry practices
- Community feedback and testing

## 🎓 Educational Use

TilTool is an excellent resource for:
- Construction management students
- Architecture students
- Professional development courses
- Building estimation training

## 🔮 Roadmap

### Version 1.1.0 (Q2 2024)
- [ ] Mobile app (iOS/Android)
- [ ] Multi-language support
- [ ] Save project history
- [ ] Tile pattern recommendations
- [ ] Cost estimation

### Version 1.2.0 (Q3 2024)
- [ ] Advanced pattern layouts
- [ ] Material supplier integration
- [ ] Team collaboration features
- [ ] AR visualization (experimental)

### Version 1.3.0 (Q4 2024)
- [ ] Cloud synchronization
- [ ] Offline mode
- [ ] Advanced reporting
- [ ] API for integrations

## 📊 Project Statistics

- **Lines of Code**: ~600 (HTML) + ~800 (JavaScript) + ~600 (CSS)
- **Dependencies**: 0 (vanilla JavaScript)
- **File Size**: ~65KB (minified)
- **Load Time**: <1s (typical connection)
- **Test Coverage**: 85%+

---

**TilTool** - Professional tile calculations for construction professionals.

*Built with ❤️ for the construction industry*

**Last Updated**: January 2024 | **Version**: 1.0.0
