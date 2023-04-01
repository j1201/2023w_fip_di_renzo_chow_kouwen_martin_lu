<?php

/** @var \Laravel\Lumen\Routing\Router $router */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
Route::options('/{any:.*}', [function (){ 
   return response(['status' => 'success']); 
  }
 ]
);
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

//localhost:8000/api/petitioners
$router->get('petitioners',['uses' => 'PetitionerController@getAllPetitioners']);

//localhost:8000/api/petitioners/2
$router->get('petitioners/{id}',['uses' => 'PetitionerController@getOnePetitioner']);

//create
$router->post('petitioners',['uses' => 'PetitionerController@createPetitioner']);


