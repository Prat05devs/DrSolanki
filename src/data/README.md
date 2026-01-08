# Site Data - Single Source of Truth

This directory contains the centralized data source for the entire website. All content should be updated here, and components should import from this file.

## File Structure

- `siteData.ts` - Main data file containing all website content

## Usage

### Importing Data

```typescript
import { doctorProfile, hospitals, services, contactInfo } from '@/data/siteData';

// Or import everything
import siteData from '@/data/siteData';
```

### Example Usage in Components

```typescript
import { doctorProfile, contactInfo } from '@/data/siteData';

export default function HeroSection() {
  return (
    <div>
      <h1>{doctorProfile.name}</h1>
      <p>{doctorProfile.tagline}</p>
      <p>Contact: {contactInfo.phone}</p>
    </div>
  );
}
```

## Data Structure

### Doctor Profile
- Name, credentials, current position
- Specializations, tagline, philosophy
- Mission statement

### Education & Training
- Medical education timeline
- Certifications
- Clinical experience
- Professional summary

### Contact Information
- Phone number (TODO: Update placeholder)
- Email (TODO: Update placeholder)
- Consultation locations
- Consultation message

### Hospitals
- Parth Hospital (Ahmedabad)
- Parul Sevashram Hospital (Vadodara)
- Satyam Hospital (Vadodara)

### Services
- Robotic & Laparoscopic Surgery
- Reproductive Medicine & Surgery
- Fertility Preservation & Enhancement
- Aesthetic & Cosmetic Gynaecology
- Uro-Gynaecology

### FAQs
- Laparoscopic Hysterectomy FAQs
- Other common questions

## TODO Items

⚠️ **Important**: The following placeholders need to be updated:

1. **Phone Number**: Currently `"98XXXXXXX"` - Update with actual number
2. **Email**: Currently `"abc@gmail.com"` - Update with actual email

## Updating Content

To update website content:

1. Open `src/data/siteData.ts`
2. Find the relevant data section
3. Update the values
4. Save the file
5. Changes will reflect across all components using this data

## Migration Status

This is the new centralized data source. Components are being migrated to use this file instead of hardcoded values.

## Notes

- All data is typed with TypeScript interfaces
- Data is organized by category for easy navigation
- Some data from the original audit may still be in components (migration in progress)
