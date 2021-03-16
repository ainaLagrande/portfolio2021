<?php

$pages = [
    'homepage' => './controllers/homepage_controller.php',
    'backend' => './controllers/backend_controller.php',
    'frontend' => './controllers/frontend_controller.php',
    'login' => 'controllers/login_controller.php',
    'logout' => 'controllers/logout_controller.php',
    'account' => 'controllers/account_controller.php',
    'cible' => 'controllers/cible_controller.php',
];

$page = $pages['homepage'];

if (isset($_GET['page']) && in_array($_GET['page'], array_keys($pages))) {
    $page = $pages[$_GET['page']];
}
