<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function documentTitle(Request $request): \Illuminate\Http\JsonResponse
    {
        $path = $request->get('path') ?? 'home';
        $path = str_replace('/', '.routes.', preg_replace('/^\/(.*?)$/', '$1', $path));

        if (($config = config('routes.' . $path))) {
            return response()->json($config['name']);
        } else {
            return response()->json(false);
        }
    }

    public function documentDescription(Request $request): \Illuminate\Http\JsonResponse
    {
        $path = $request->get('path') ?? 'home';
        $path = str_replace('/', '.routes.', preg_replace('/^\/(.*?)$/', '$1', $path));

        if (($config = config('routes.' . $path))) {
            return response()->json($config['description']);
        } else {
            return response()->json(false);
        }
    }
}
