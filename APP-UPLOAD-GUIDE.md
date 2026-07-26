# 🚀 TilTool App Upload Guide

## Quick Start for App Store Submission

This guide helps you upload TilTool to Google Play Store, Apple App Store, and other platforms.

---

## 📱 Platform: Google Play Store

### Prerequisites
1. Google Play Developer Account ($25 one-time fee)
2. Node.js and npm installed
3. Android Studio (optional but recommended)
4. Signing certificate

### Step 1: Convert to Android App

#### Using Apache Cordova (Recommended)

```bash
# Install Cordova
npm install -g cordova

# Create Cordova project
cordova create TilTool-Mobile com.example.tiltool TilTool
cd TilTool-Mobile

# Copy web files
cp ../index.html www/
cp ../docs www/
cp ../LICENSE www/

# Add Android platform
cordova platform add android

# Build APK
cordova build android --release
```

#### Using React Native (Alternative)

```bash
# Create React Native project
npx react-native init TilToolApp

# Follow React Native documentation for iOS/Android integration
```

### Step 2: Create App Metadata

**Create `cordova-config.xml`:**
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.tiltool.app" version="1.0.0">
    <name>TilTool</name>
    <description>Professional Construction Compliance Tile Calculator</description>
    <author email="support@tiltool.app">TilTool Team</author>
    <content src="index.html" />
    <access origin="*" />
</widget>
```

### Step 3: Prepare App Store Assets

**Required:**
- ✅ App Icon (512×512px, PNG)
- ✅ Screenshot #1 (1080×1920px)
- ✅ Screenshot #2 (1080×1920px)
- ✅ Feature Graphic (1024×500px)
- ✅ Short Description (50 chars)
- ✅ Full Description (4000 chars)
- ✅ Privacy Policy URL

### Step 4: Sign APK

```bash
# Create keystore
keytool -genkey -v -keystore tiltool.keystore -keyalg RSA -keysize 2048 -validity 10000

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
  -keystore tiltool.keystore \
  platforms/android/build/outputs/apk/release/android-release-unsigned.apk \
  alias_name
```

### Step 5: Upload to Google Play

1. Go to Google Play Console
2. Create new application
3. Fill in store listing
4. Upload signed APK
5. Set pricing (Free)
6. Submit for review

**Review Time:** 2-4 hours typically

---

## 🍎 Platform: Apple App Store

### Prerequisites
1. Apple Developer Account ($99/year)
2. Mac with Xcode
3. Provisioning certificate
4. Bundle identifier

### Step 1: Create iOS App

```bash
# Add iOS platform to Cordova
cordova platform add ios

# Build iOS app
cordova build ios --release
```

### Step 2: Configure Xcode

```bash
# Open Xcode project
open platforms/ios/TilTool.xcworkspace
```

In Xcode:
1. Set Bundle Identifier
2. Set Version/Build numbers
3. Configure signing certificate
4. Enable required capabilities

### Step 3: Create App Store Connect Entry

1. Go to App Store Connect
2. Create new app
3. Fill in app information
4. Set pricing (Free)
5. Configure app rating

### Step 4: Archive and Upload

```bash
# Archive app
xcodebuild archive -workspace TilTool.xcworkspace \
  -scheme TilTool -archivePath TilTool.xcarchive

# Upload using Transporter
xcrun altool --upload-app --file TilTool.ipa \
  --type ios --username $APPLE_ID --password $APP_PASSWORD
```

**Review Time:** 24-48 hours typically

---

## 🌐 Platform: Web App

### Option 1: GitHub Pages (Free)

```bash
# Enable GitHub Pages in repository settings
# Select 'main' branch as source
# Your app will be available at: https://nkosiya95.github.io/Tiltool-App-/
```

### Option 2: Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Netlify (Free)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

---

## 📦 Platform: Windows Store

### Prerequisites
1. Windows Developer Account ($19)
2. Windows 10/11
3. Visual Studio

### Process
1. Convert to UWP (Universal Windows Platform)
2. Create Visual Studio project
3. Configure package metadata
4. Build and package
5. Submit to Microsoft Store

---

## 📋 App Metadata Template

### Store Listing Description

**Short Description:**
```
Professional tile calculator for construction projects with compliance verification.
```

**Full Description:**
```
TilTool - Professional Construction Compliance Tile Calculator

🏗️ Features:
✓ Precise tile calculations
✓ Wastage management (5-20%)
✓ Compliance verification
✓ Grout line configuration
✓ Export reports (JSON)
✓ Responsive design
✓ Offline compatible
✓ No ads or tracking

📐 Perfect for:
- Contractors and builders
- Architects and designers
- Construction professionals
- DIY enthusiasts
- Students and educators

🔧 How it works:
1. Enter surface dimensions
2. Specify tile size
3. Configure wastage settings
4. Calculate layout
5. Export procurement report

🌍 Standards Compliance:
✓ ISO 13006 - Ceramic tiles
✓ ISO 13007 - Installation
✓ ANSI A108 - North America
✓ Construction best practices

📱 Works on:
- Phones and tablets
- Desktops and laptops
- All modern browsers
- Offline mode supported

⭐ No external dependencies
⭐ No data collection
⭐ Open source
⭐ MIT Licensed

Support: support@tiltool.app
GitHub: https://github.com/nkosiya95/Tiltool-App-
```

### Keywords
```
tile calculator, construction, flooring, home improvement, 
building calculator, tiles, grout, construction compliance, 
estimation, procurement, tiling, tiles per box
```

### Category
- Primary: Utilities
- Secondary: Productivity, Building & Home

### Rating
- Content Rating: 4+/Everyone
- Age Restriction: None

---

## 🔒 Security Checklist

Before submission:
- ✅ No sensitive data stored locally
- ✅ No external API calls
- ✅ No tracking or analytics
- ✅ HTTPS ready (for web)
- ✅ Privacy policy created
- ✅ Terms of service (optional)
- ✅ No ads or in-app purchases

---

## 📝 Privacy Policy Template

```markdown
# Privacy Policy - TilTool

## Data Collection
TilTool does NOT collect, store, or transmit any user data.

## Offline Operation
The app operates entirely offline with no external connections.

## Local Storage
Calculations are performed locally and never leave your device.

## Contact
support@tiltool.app
```

---

## 🚀 Release Checklist

Before uploading:

**Code:**
- [ ] All tests passing
- [ ] No console errors
- [ ] Performance optimized
- [ ] Mobile responsive
- [ ] Accessibility compliant

**Documentation:**
- [ ] README.md complete
- [ ] USAGE.md updated
- [ ] API.md current
- [ ] STANDARDS.md reviewed

**Assets:**
- [ ] Icons created (multiple sizes)
- [ ] Screenshots taken
- [ ] Feature graphics designed
- [ ] App preview video (optional)

**Metadata:**
- [ ] Description written
- [ ] Keywords defined
- [ ] Category selected
- [ ] Rating set

**Legal:**
- [ ] Privacy policy ready
- [ ] Terms reviewed
- [ ] License included
- [ ] Copyright notice added

---

## 📊 Version Management

Before each release:

```bash
# Update version in package.json
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

# Create git tag
git tag v1.0.0
git push origin v1.0.0
```

---

## 🆘 Troubleshooting

### Android Build Fails
```bash
# Clear cache
rm -rf platforms/
rm -rf plugins/
rm -rf node_modules/

# Rebuild
npm install
cordova platform add android
cordova build android --release
```

### iOS Build Fails
```bash
# Update Pods
cd platforms/ios
pod repo update
pod install
cd ../..

# Rebuild
cordova build ios --release
```

### App Store Rejection
- Check app store guidelines
- Review privacy policy
- Test functionality thoroughly
- Verify metadata accuracy

---

## 📞 Support

**Need help?**
- GitHub Issues: https://github.com/nkosiya95/Tiltool-App-/issues
- Email: support@tiltool.app
- Documentation: See `/docs` folder

---

## 📚 Resources

- **Google Play Docs**: https://developer.android.com/
- **Apple Developer**: https://developer.apple.com/
- **Cordova Guide**: https://cordova.apache.org/
- **React Native**: https://reactnative.dev/
- **Electron**: https://www.electronjs.org/

---

**Last Updated**: January 2024  
**Version**: 1.0.0
