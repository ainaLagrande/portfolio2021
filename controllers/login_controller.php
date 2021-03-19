<?php

declare(strict_types=1);

// USER VERIFICATION 
if(!empty($_POST) && !empty($_POST['userName']) && !empty($_POST['password'])) {

    $req = $pdo->prepare('SELECT id,userName,password FROM users WHERE (userName = :userName)');
    $req->execute(['userName' => $_POST['userName']]);
    $user = $req->fetch(PDO::FETCH_OBJ);
    // $userPass = $user->password;
    // var_dump($userPass);
    
    if($user == null) {
        
        $errors = "*Mot de passe ou pseudo incorrects*";
    }
    
     if(password_verify($_POST['password'], $user->password)) {
        
        $_SESSION['auth'] = $user->userName;
        $_SESSION['id'] = $user->id;
        header('Location:index.php?page=account');
        
    }else{
        $errors = "*Mot de passe ou pseudo incorrect*";
    }
}

require '../portfolio/views/login.phtml';