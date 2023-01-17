<?php

declare(strict_types=1);

namespace App\Http\Controllers;

class LandingPageController
{
    public function __invoke()
    {
        return inertia('landing');
    }
}
