<?php

declare(strict_types=1);

require './models/inscription.php';



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
    
    if(empty($_POST['password']))//validation de mdp
    {
        $errors = "*Mot de passe  n'est pas valide*";
    }
    
    if(empty($errors))//s'il n'ya pas d'erreurs on insére cela a sql
    {
        registerValidate();
    }
}

require './views/backend.phtml';