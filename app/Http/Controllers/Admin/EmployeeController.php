<?php

namespace App\Http\Controllers\Admin;


use App\Employees;
use App\Http\Controllers\Controller;
use App\Http\Requests\Employees\StoreEmployee;
use App\Http\Requests\Employees\UpdateEmployee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $employees = Employees::simplePaginate(10);
        return response()->json([
            'employee' => $employees->toArray()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployee $request)
    {
        Employees::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employees  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployee $request, Employees $employee)
    {

        $employee->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employees  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employees $employee)
    {
        $employee->delete();
    }
}
