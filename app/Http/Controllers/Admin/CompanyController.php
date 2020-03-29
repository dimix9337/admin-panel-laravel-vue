<?php

namespace App\Http\Controllers\Admin;

use App\Company;
use App\Http\Controllers\Controller;
use App\Http\Requests\Company\StoreCompany;
use App\Http\Requests\Company\UpdateCompany;
use App\Mail\MailtrapCompanyReg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $company = Company::simplePaginate(10);
        return response()->json([
            'company' => $company->toArray()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCompany $request)
    {
        $fields = [
            'name' => $request->name,
            'email' => $request->email,
            'website' => $request->website,
        ];

        if ($request->hasFile('logo')){
            $file = $request->file('logo')->store('/logo','public');
            $fields['logo'] = '/storage/'.$file;
        }else{
            $fields['logo'] = '/storage/logo/test.jpg';
        }

        Company::create($fields);

        Mail::to($request->email ?? 'standart@mail.com')->send(new MailtrapCompanyReg($request->name));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCompany $request, Company $company)
    {


        $fields = [
            'name' => $request->name,
            'email' => $request->email,
            'website' => $request->website,
        ];

        if ($request->hasFile('logo')){
            $file = $request->file('logo')->store('/logo','public');
            $fields['logo'] = '/storage/'.$file;
        }


        $company->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Company $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        $company->delete();
    }
}
