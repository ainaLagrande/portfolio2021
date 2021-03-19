<?php

$pages = [
    'homepage' => '../portfolio/controllers/homepage_controller.php',
    'backend' => '../portfolio/controllers/backend_controller.php',
    'frontend' => '../portfolio/controllers/frontend_controller.php',
    'login' => '../portfolio/controllers/login_controller.php',
    'logout' => '../portfolio/controllers/logout_controller.php',
    'account' => '../portfolio/controllers/account_controller.php',
    'cible' => '../portfolio/controllers/cible_controller.php',
];

$page = $pages['homepage'];

if (isset($_GET['page']) && in_array($_GET['page'], array_keys($pages))) {
    $page = $pages[$_GET['page']];
}
