<?php

declare(strict_types=1);

function checkUser()//function pour verifier si l'utilisateur existe deja
{
    
    require './core/connection.php';
    $q = $pdo->prepare('SELECT id,userName FROM `users` WHERE userName = :userName');
    $q->execute(['userName' => $_POST['userName']]);
    $user = $q->fetch(PDO::FETCH_ASSOC);
    $checkUser = $q->rowCount();
    
    if($checkUser === 1)//si l'user existe déjà on affiche ce message la 
        {
            return false;

        }
}


function registerValidate()//inserer les données d'inscription ds la base de données
{
    
     require './core/connection.php';
     $sql = 'INSERT INTO users(userName, password) VALUES(:userName, :password)';//envoie les donées a mysql
     $password = password_hash($_POST['password'], PASSWORD_ARGON2I);//cache le mdp
        
        $q = $pdo->prepare($sql);
        $q->execute([
        'userName' => $_POST['userName'],
        'password' => $password
        ]);
        header('Location:index.php?page=login');
}

