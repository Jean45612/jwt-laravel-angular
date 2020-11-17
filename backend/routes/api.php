<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//ESTAS RUTAS NO ESTAN PROTEGIDAS YA QUE NO REQUIEREN TOKEN

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::post('refresh', 'AuthController@refresh');

// Route::get('/migrate', function () {
//     $exitCode = Artisan::call('migrate:fresh --seed');
// });

Route::get('/storage-link', function() {
    $exitCode = Artisan::call('storage:link');
});

Route::get('/cache_clear', function() {
    $exitCode = Artisan::call('cache:clear');
    return 'DONE';
});

Route::get('/config_clear', function() {
    $exitCode = Artisan::call('config:clear');
    return 'DONE';
});

Route::get('/config_cache', function() {
    $exitCode = Artisan::call('config:cache');
    return 'DONE';
});

Route::group([ //AQUI PROTEJO LAS RUTAS CON EL TOKEN
    'middleware' => 'jwt.auth'
], function ($router) {
    Route::post('logout', 'AuthController@logout');

    Route::post('me', 'AuthController@me');
    Route::resource('user', 'UserController');
});
