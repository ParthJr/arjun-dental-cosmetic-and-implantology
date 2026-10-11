export interface ClinicScheduleDay {
  day: string;
  hours: string;
  note?: string;
}

export interface ClinicTreatment {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'cosmetic' | 'implant' | 'restorative' | 'preventive' | 'emergency';
  badge?: string;
  isPopular?: boolean;
  isUrgent?: boolean;
  keyAspects: string[];
  clinicalConsiderations: string;
}

export interface ClinicConfig {
  name: string;
  shortName: string;
  tagline: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phone: {
    display: string;
    tel: string;
  };
  googleReviews: {
    rating: number;
    count: number;
    verifiedLabel: string;
    mapsUrl: string;
    quoteSummary: string;
  };
  schedule: {
    weekdaySaturday: string;
    sunday: string;
    detailedDays: ClinicScheduleDay[];
    advisory: string;
  };
  maps: {
    destinationUrl: string;
    embedTitle: string;
    landmark: string;
  };
  treatments: ClinicTreatment[];
}

export interface AppointmentRequest {
  id?: string;
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  consent: boolean;
  submittedAt?: string;
}
