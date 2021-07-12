<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Group;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $groups = Group::paginate(10);
        return response()->json($groups);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $group = new Group;
        $group->uuid = Str::uuid();
        $group->name = $request->post('name');
        $group->permissions = $request->post('permissions');
        $group->save();

        if (Group::where('uuid', $group->uuid)->first()) {
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
        Group::where('uuid', $uuid)->delete();
        if (Group::where('uuid', $uuid)->count()) {
            $result = false;
        } else {
            $result = true;
        }
        return response()->json($result);
    }
}
