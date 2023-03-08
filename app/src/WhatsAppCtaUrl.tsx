function WhatsAppCtaUrl() {
  const params = new URLSearchParams(window.location.search);
  const source = (params.get('utm_source') ?? '').toLowerCase();
  const greetingEncoded = encodeURIComponent(GetGreeting(source));
  return `https://wa.me/5518991332855?text=${greetingEncoded}`;
}

function GetGreeting(source: string) {
  switch (source) {
    case 'google':
      return 'Olá! Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
    case 'facebook':
      return 'Oi! Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
      break;
    default: //Orgânico
      return 'Ola, Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
      break;
  }
}

export default WhatsAppCtaUrl;