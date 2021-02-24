<?php

declare(strict_types=1);

$user_id = $_SESSION['id'];
 if(!isset($_SESSION['auth'])) {//si utilisateur essaye d'acceder a la page ss s'etre connecté
        header('Location:index.php?page=login');
    }
    
    // *************MODIFICATION DU MOT DE PASSE

if(!empty($_POST))
{
    if(empty($_POST['password']) || $_POST['password'] != $_POST['password_confirm']) {
        
        $errors = "*Les mots de passe ne correspondent pas!*";
    }
    
    else {
        
        $password = password_hash($_POST['password'], PASSWORD_ARGON2I);
        
        $pdo->prepare('UPDATE users SET password = :password WHERE id = :id')->execute(['password'=> $password,'id'=>$user_id]);
        
        $errors = "Felicitation!Le mot de passe a bien été mis à jour!";
    }
}

//*******************SUPPRIMER L'UTILISATEUR
if(isset($_POST['deleteUser'])) {
    
     $pdo->prepare('DELETE FROM users WHERE id = :id')->execute(['id'=> $user_id]);
     session_destroy();
     header('Location:index.php');
}


require './views/account.phtml';