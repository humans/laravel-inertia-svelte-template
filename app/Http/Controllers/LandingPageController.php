<?php

namespace App\Http\Controllers;

class LandingPageController
{
    public function __invoke()
    {
        return inertia('landing');
    }
}
