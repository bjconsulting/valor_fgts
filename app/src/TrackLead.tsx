declare const fbq: (trackType: string, options?: any) => boolean;
declare const gtag_report_conversion: () => boolean;

export default function TrackLead() {
  console.log({fbq})
  if (fbq) {
    fbq('track', 'Lead')
    console.log('I know fbq and track was called')
  } else {
    console.log('I don\'t know fbq')
  }

  console.log({gtag_report_conversion})
  if (gtag_report_conversion) {
    gtag_report_conversion()
    console.log('I know gtag_report_conversion and used it')
  } else {
    console.log('I don\'t know gtag_report_conversion')
  }
}