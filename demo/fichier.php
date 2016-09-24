<?php 
$nb = get_file_contents('nomdufichiertxt.txt'); 
$nb = (int)$nb; 
put_file_contents('nomdufichiertxt.txt, $nb++); 
?> 