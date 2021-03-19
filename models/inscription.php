<?php

declare(strict_types=1);

//*********  IF USER EXISTE 
function checkUser()
{
    
    require './core/connection.php';
    $q = $pdo->prepare('SELECT id,userName FROM `users` WHERE userName = :userName');
    $q->execute(['userName' => $_POST['userName']]);
    $user = $q->fetch(PDO::FETCH_ASSOC);
    $checkUser = $q->rowCount();
    
    if($checkUser === 1)
        {
            return false;

        }
}
//************* USER INSERT FUNCTION 
function registerValidate()
{
    
     require './core/connection.php';
     $sql = 'INSERT INTO users(userName, password) VALUES(:userName, :password)';
     $password = password_hash($_POST['password'], PASSWORD_ARGON2I);//password hide
        
        $q = $pdo->prepare($sql);
        $q->execute([
        'userName' => $_POST['userName'],
        'password' => $password
        ]);
        header('Location:index.php?page=login');
}

