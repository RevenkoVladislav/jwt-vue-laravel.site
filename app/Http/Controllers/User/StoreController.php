<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $user = User::where('email', $data['email'])->first();
        //если мы нашли такого пользователя уже зарегистрированным, то отправляем ему сообщение
        if($user){
            return response()->json(['error' => 'user already exist'], 403);
        } else {
            $user = User::create($data);
            $token = auth()->tokenById($user->id);
            return response()->json(['access_token' => $token]);
        }
    }
}
