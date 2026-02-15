# Image Setup Guide

All image tags are now configured in the code. Simply add your image files to the `public/images/` directory with these exact filenames:

## Required Images

### Phase Screenshots (in AttemptsJourney component):
1. **phase1-maven-errors.png** - Maven build errors screenshot
2. **phase2-elastic-beanstalk.png** - AWS Elastic Beanstalk console screenshot

### Screenshots Section:
3. **what-i-tried.png** - Screenshot for "What I tried"
4. **what-worked.png** - Screenshot for "What worked"  
5. **what-i-learned.png** - Screenshot for "What I learned"

## How to Add Images

1. Copy your image files to: `/Users/tina-17980/LearningJourney/public/images/`
2. Name them exactly as listed above
3. The images will automatically display when you run the app

## Image Locations in Code

- **Phase 1 & 2**: `src/components/AttemptsJourney.jsx`
- **Screenshots Section**: `src/components/ScreenshotsSection.jsx`

All image tags are ready - just add the files!
