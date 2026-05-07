<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$pagina = isset($_GET['page']) ? $_GET['page'] : 0;

// Olha o link exato do professor aqui, usando a rota 'breeds' para buscar as raças!
$url = "https://api.thecatapi.com/v1/breeds?limit=9&page=" . $pagina;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Isso evita que o seu XAMPP bloqueie o link do professor
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode(["erro" => "Erro de conexão: " . curl_error($ch)]);
    exit;
}

curl_close($ch);
echo $response;
?>