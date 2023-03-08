<?php
$referer = $_SERVER['HTTP_REFERER'];
$url = parse_url($referer);
$query = $url['query'];
parse_str($query, $params);
switch(strtolower($params['utm_source'])) {
  case 'google':
    $frase = 'Olá! Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
    break;
  case 'facebook':
    $frase = 'Oi! Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
    break;
  default: //Orgânico
    $frase = 'Ola, Gostaria de mais informações sobre a Antecipação do Saque Aniversario FGTS!';
    break;
}
$link = 'https://wa.me/5518991332855?text=' . urlencode($frase);
//"https://wa.me/#"
//"<?php echo $link ? >"
?>