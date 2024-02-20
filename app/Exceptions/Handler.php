<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
        $this->renderable(function (HttpException $e) {
            if($e->getStatusCode() ==404){
                return Inertia::render('Error/404')->toResponse(\request())->setStatusCode(404);
            }
            if($e->getStatusCode() ==401){
                return Inertia::render('Error/401')->toResponse(\request())->setStatusCode(401);
            }
            if($e->getStatusCode() ==500 && env('APP_ENV') == 'production'){
                return Inertia::render('Error/500')->toResponse(\request())->setStatusCode(500);
            }
        });
        
    }
}
