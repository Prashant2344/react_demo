<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(){
        $title = "Account";
        return Inertia::render('Test/Test',compact('title'));
    }

    public function store(Request $request){

        Test::create([
            'name' => $request->companyName,
            'print_name' => $request->printName,
            'date' => $request->date
        ]);

        return Inertia::render('Test/TestList');

        // return response()->json([
        //     'success' => true,
        //     'message' => 'Test Created successfully'
        // ]);
    }

    public function getList(){
        $tests = Test::select('name','print_name')->get();
        return response()->json([
            'success' => true,
            'data' => $tests,
        ]);
        return Inertia::render('Test/TestList');
    }

    public function contact(){
        $title = "Contact";
        return Inertia::render('Test/Contact',compact('title'));
    }

    public function getJsonPostList(){
        $tests = Test::select('name','print_name')->get();
        return response()->json([
            'success' => true,
            'data' => $tests,
        ], 200);
    }

}
