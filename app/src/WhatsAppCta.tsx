import { RiWhatsappLine } from "react-icons/ri";
import TrackLead from "./TrackLead";
import WhatsAppCtaUrl from "./WhatsAppCtaUrl";

type WhatsAppCtaProps = {
  buttonClassName: string
  textClassName: string
}

export default function WhatsAppCta(props: WhatsAppCtaProps) {
  return(
    <a href={WhatsAppCtaUrl()} target="_blank" rel="noreferrer" className={props.buttonClassName}><p className={props.textClassName} onClick={() => TrackLead() }>Fale conosco</p><RiWhatsappLine className="w-5 h-5" /></a>
  )
}