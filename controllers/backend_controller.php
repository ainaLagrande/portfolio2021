<?php

declare(strict_types=1);

require '../portfolio/models/inscription.php';


//**********  USER INSCRIPTION CONTROLLER
if(!empty($_POST))
{
    $errors = array();
    
    if(empty($_POST['userName']) || !preg_match('/^[a-zA-Z0-9_]+$/',$_POST['userName']))
    {
        $errors = "*Pseudo n'est pas valide*";
    }
    else
    {
        if(checkUser()=== false)
        {
            $errors = "*Pseudo déjà utilisé*";
        }
    }
    
    if(empty($_POST['password']))//password validation
    {
        $errors = "*Mot de passe  n'est pas valide*";
    }
    
    if(empty($errors))
    {
        registerValidate();
    }
}

require '../portfolio/views/backend.phtml';