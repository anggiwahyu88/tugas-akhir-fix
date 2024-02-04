<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Exceptions\InvalidOrderException;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
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

        // $this->renderable(function (NotFoundHttpException $e, Request $request) {
        //     return response($e->getStatusCode(), 200)
        //           ->header('Content-Type', 'text/plain');
        //     return Inertia::render('Error/404')
        //         ->toResponse($request)
        //         ->setStatusCode($e->getStatusCode());
        // });
        $this->renderable(function (Response $response, Request $request) {
            
        });
        // $this->renderable(function (Throwable $e, Request $request) {
        //     if($e->getStatusCode() == 403){
        //         return Inertia::render('Error/403')
        //         ->toResponse($request)
        //         ->setStatusCode($e->getStatusCode());
        //     }
        //     if( $e->getStatusCode() == 404){ 

        //     }elseif($e->getStatusCode() == 500){
        //        
        //     }
        // });
    }
}
