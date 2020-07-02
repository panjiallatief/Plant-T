<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('buah','buahController@index')->name("buah");
Route::get('buahJenis','buahController@buah')->name("buahJenis");
Route::get('survei','buahController@survei')->name("survei");
Route::get('hasil','buahController@hasil')->name("hasil");