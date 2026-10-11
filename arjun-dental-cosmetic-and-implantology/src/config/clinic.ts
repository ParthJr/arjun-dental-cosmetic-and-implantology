import { ClinicConfig } from '../types/clinic';

/**
 * CENTRAL BUSINESS CONFIGURATION
 * Arjun Dental Cosmetic and Implantology
 * 
 * Strict compliance note:
 * Only verified public listing information is included.
 * No fabricated dentist names, registration numbers, price lists, or fake guarantee rates.
 */
export const CLINIC_CONFIG: ClinicConfig = {
  name: 'Arjun Dental Cosmetic and Implantology',
  shortName: 'Arjun Dental',
  tagline: 'Cosmetic & Implantology',
  address: {
    line1: '34 FF, Shivalay Residency',
    area: 'Kudasan',
    city: 'Gandhinagar',
    state: 'Gujarat',
    pincode: '382419',
    full: '34 FF, Shivalay Residency, Kudasan, Gandhinagar, Gujarat 382419',
  },
  phone: {
    display: '090999 24158',
    tel: '+919099924158',
  },
  googleReviews: {
    rating: 5.0,
    count: 108,
    verifiedLabel: 'Verified Google Reviews',
    mapsUrl: 'https://maps.google.com/?q=Arjun+Dental+Cosmetic+and+Implantology+Shivalay+Residency+Kudasan+Gandhinagar+Gujarat+382419',
    quoteSummary: 'Recognized across Gandhinagar and Kudasan for surgical precision, gentle anesthesia administration, and restorative clarity.',
  },
  schedule: {
    weekdaySaturday: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: By Prior Consultation',
    detailedDays: [
      { day: 'Monday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Saturday', hours: '9:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: 'By Prior Consultation', note: 'Emergency surgical triage by call' },
    ],
    advisory: 'Please phone in advance to confirm specialist scheduling and clinical triage availability.',
  },
  maps: {
    destinationUrl: 'https://maps.google.com/?q=Arjun+Dental+Cosmetic+and+Implantology+Shivalay+Residency+Kudasan+Gandhinagar+Gujarat+382419',
    embedTitle: 'Shivalay Residency, Kudasan, Gandhinagar',
    landmark: 'Shivalay Residency, 34 First Floor, Kudasan, Gandhinagar',
  },
  treatments: [
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      tagline: 'Diagnostics · Smile Design · Esthetics',
      description: 'Discuss your smile concerns and explore appropriate cosmetic treatment options including porcelain veneers, composite contouring, and advanced smile aesthetics tailored to your facial harmony.',
      category: 'cosmetic',
      isPopular: true,
      badge: 'Popular Focus',
      keyAspects: [
        'Custom porcelain veneers & micro-thin laminates',
        'Direct composite artistic contouring',
        'Facial harmony & smile arc calibration',
        'Minimally invasive enamel preservation'
      ],
      clinicalConsiderations: 'Cosmetic consultations emphasize realistic expectations. Precise suitability and biological requirements are determined following clinical oral examination and bite assessment.'
    },
    {
      id: 'implant-care',
      title: 'Dental Implant Care',
      tagline: 'Surgical Restorations · 3D Bone Mapping',
      description: 'Learn about precision assessment, 3D bone volume mapping, and biocompatible tooth-replacement options with surgical permanence.',
      category: 'implant',
      keyAspects: [
        'Anatomical bone density & nerve pathway mapping',
        'Computer-guided surgical positioning',
        'Medical-grade biocompatible titanium fixtures',
        'Individualized ceramic crown restoration'
      ],
      clinicalConsiderations: 'Treatment suitability, necessity of bone augmentation, healing periods, and long-term durability are contingent upon comprehensive diagnostic imaging and individualized clinical examination.'
    },
    {
      id: 'restorative-dentistry',
      title: 'Restorative Dentistry',
      tagline: 'Structural Preservation · Inlays & Crowns',
      description: 'Explore treatment options for restoring structurally damaged, worn, or weakened teeth with resilient inlays, onlays, and crowns.',
      category: 'restorative',
      keyAspects: [
        'Tooth-colored composite biomimetic restorations',
        'Custom ceramic inlays & onlays for cracked teeth',
        'High-strength monolithic zirconia & ceramic crowns',
        'Structural bite re-establishment'
      ],
      clinicalConsiderations: 'Restorative treatment selection depends on remaining natural tooth structure, root health, and masticatory load.'
    },
    {
      id: 'preventive-care',
      title: 'Preventive Dental Care',
      tagline: 'Periodontal Hygiene · Proactive Health',
      description: 'Schedule comprehensive periodic evaluations, ultrasonic periodontal hygiene, and customized protocols to protect lifelong dentition.',
      category: 'preventive',
      keyAspects: [
        'Ultrasonic scaling and micro-polishing',
        'Comprehensive periodontal pocket probing',
        'Digital caries detection & enamel mineral guidance',
        'Preventive oral hygiene roadmaps'
      ],
      clinicalConsiderations: 'Routine preventive evaluations are recommended semi-annually or as recommended based on your periodontal baseline.'
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care Enquiries',
      tagline: 'Urgent Triage · Direct Surgical Desk',
      description: 'Contact the clinic directly for unexpected acute tooth pain, trauma, crown dislodgement, or sudden swelling for expedited assessment.',
      category: 'emergency',
      isUrgent: true,
      badge: 'Urgent Triage',
      keyAspects: [
        'Acute pulpitis or severe toothache evaluation',
        'Facial trauma or fractured tooth stabilization',
        'Dislodged crown or bridge recementation assessment',
        'Acute swelling and infection containment triage'
      ],
      clinicalConsiderations: 'Please call the clinic desk directly at 090999 24158 before traveling to ensure surgical triage capacity is prepared.'
    }
  ]
};
