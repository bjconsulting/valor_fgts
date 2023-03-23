declare const fbq: (trackType: string, options?: any) => boolean;
declare const gtag_report_conversion: () => boolean;

export default function TrackLead() {
  console.info('Track Lead Click', Date.now())
  if (fbq) {
    fbq('track', 'Lead')
    console.info('I know fbq and track was called')
  } else {
    console.info('I don\'t know fbq')
  }

  if (gtag_report_conversion) {
    gtag_report_conversion()
    console.info('I know gtag_report_conversion and used it')
  } else {
    console.info('I don\'t know gtag_report_conversion')
  }
}