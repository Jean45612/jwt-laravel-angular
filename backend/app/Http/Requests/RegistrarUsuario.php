<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrarUsuario extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email|unique:users',
            'password' => 'required | confirmed'
        ];
    }

    public function messages()
    {
        return [
            'email.unique' => 'El usuario ya ha sido tomado.',
            'email.email' => 'El usuario debe ser un email.',
            'email.required' => 'El usuario es requerido.',
            'password.required' => 'La contraseña es requerida.',
            'password.confirmed' => 'El campo de confirmación de contraseña no coincide.'
        ];
    }
}
