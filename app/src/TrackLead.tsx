declare const fbq: (trackType: string, options?: any) => boolean;

export default function TrackLead() {
  if (fbq) {
    fbq('track', 'Lead')
    console.log('I know fbq and track was called')
  } else {
    console.log('I don\'t know fbq')
  }
}