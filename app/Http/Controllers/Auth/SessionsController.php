<?php

namespace App\Http\Controllers\Auth;

class SessionsController
{
    public function create()
    {
        return inertia('auth/sessions/create', [
            'links' => [
                'store_path' => route('auth.sessions.store'),
            ],
        ]);
    }

    public function store()
    {
        dd('test');
    }
}
