<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Advisor;
use App\Models\User;
use App\Models\InvestmentTheme;

class AdvisorController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $advisors = new Advisor;
        $filters = $request->post('filters');
        $filtering = [];

        foreach ($request->post('filtering') as $filter => $value) {
            if ($value) {
                $filtering[$filter] = true;
            }
        }

        foreach ($filtering as $filter => $value1) {
            if ($filter == 'theme') {
                foreach ($filters[$filter] as $slug => $value2) {
                    if ($value2) {
                        $advisors = $advisors->orWhere('theme_id', InvestmentTheme::where('slug', $slug)->first()->id);
                    }
                }
            }
        }

        if (!$request->post('pagination')) {
            $advisors = $advisors->with('user')->with('theme')->get();
        } else {
            $advisors = $advisors->with('user')->with('theme')->paginate(10);
        }

        return response()->json($advisors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $advisor_uuid = Str::uuid();
        $advisor = new Advisor;
        $advisor->uuid = $advisor_uuid;
        $advisor->user_id = User::where('uuid', $request->post('user'))->first()->id;
        $advisor->theme_id = InvestmentTheme::where('uuid', $request->post('theme'))->first()->id;
        $advisor->save();

        if (Advisor::where('uuid', $advisor_uuid)->count()) {
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(string $uuid): \Illuminate\Http\JsonResponse
    {
        Advisor::where('uuid', $uuid)->delete();
        if (Advisor::where('uuid', $uuid)->count()) {
            $result = false;
        } else {
            $result = true;
        }
        return response()->json($result);
    }
}
