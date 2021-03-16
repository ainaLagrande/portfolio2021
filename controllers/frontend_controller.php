<?php

declare(strict_types=1);

require './models/contact.php';

if(isset($_POST['contactFormButton']))
{
//********************* EMPTY VERIFICATION**************************************************
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['message']))
    {
        
 //********************* EMAIL VERIFICATION*************************************************
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) !== false)
        
        {
            if ( strlen($_POST['name'])<35)//******* NAME LENGTH VERIFICATION****
            {
                if (preg_match("/^[a-zA-Z-' ]*$/",$_POST['name'])) //*** NAME COHERENCE VERIFICATION*********
                {
                    
                    if ( strlen($_POST['message'])<550)//******* MESSAGE LENGTH VERIFICATION********
                    {
                         if (preg_match("#^0[1-68]([-. ]?[0-9]{2}){4}$#", $_POST['phone']))//*********** PHONE COHERENCE VERIFICATION********
                         {
                               contactInsert();
                         }else
                         {
                              $errorPhone = "*Numéro Invalide*";
                         }
                    }else
                        {
                            $errorMessage= '*Veuillez ne pas entrer plus de 550 caractères*';
                        }
                    
                }else
                {
                    $errorName = "*Nom invalide*";
                }
            
            }else
            {
                 $errorNameLenght= '*Veuillez ne pas entrer plus de 35 caractères*';
            }
                
        }else
                {
                   $errorEmail= '*Email Invalide*';
                }
    }else
        {
            $emptyError= '*Veuillez remplir tous les champs*';
        } 
}
require './views/frontend.phtml';