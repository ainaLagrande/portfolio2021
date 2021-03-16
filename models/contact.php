<?php

declare(strict_types=1);

function contactInsert()
{
    require'./core/connection.php';
     $sql = 'INSERT INTO form(name, email,phone, message) VALUES(:name, :email,:phone, :message)';
     $q = $pdo->prepare($sql);
     $q->execute([
     'name' => $_POST['name'],
     'email' => $_POST['email'],
     'phone' => $_POST['phone'],
     'message' => $_POST['message']
      ]);
     header('location: index.php?page=cible');
}
