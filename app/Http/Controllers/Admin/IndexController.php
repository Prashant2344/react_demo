<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(){
        $latestLogs = DB::table('logs')
            ->select('logs.user_id', DB::raw('MAX(logs.created_at) as latest_log_date'))
            ->groupBy('logs.user_id');

        $latestLogsWithActivity = DB::table('logs')
            ->joinSub($latestLogs, 'latest_logs', function ($join) {
                $join->on('logs.user_id', '=', 'latest_logs.user_id')
                    ->on('logs.created_at', '=', 'latest_logs.latest_log_date');
            })
            ->select('latest_logs.user_id', 'latest_logs.latest_log_date', 'logs.activity');

        $users = DB::table('users')
            ->joinSub($latestLogsWithActivity, 'latest_logs_with_activity', function ($join) {
                $join->on('users.id', '=', 'latest_logs_with_activity.user_id');
            })
            ->get(['users.id', 'users.name', 'latest_logs_with_activity.latest_log_date', 'latest_logs_with_activity.activity']);
    
        dd($users);

        // $latestLogs = DB::table('logs')
        //         ->select('user_id', DB::raw('MAX(created_at) as latest_log_date'))
        //         ->groupBy('user_id');

        // $users = DB::table('users')
        //     ->joinSub($latestLogs, 'latest_logs', function ($join) {
        //         $join->on('users.id', '=', 'latest_logs.user_id');
        //     })
        //     ->get(['users.id', 'users.name', 'latest_logs.latest_log_date']);
        
        $title = 'Company Details';
        return Inertia::render('Home',compact('title'));
    }

    public function category(){
        return Inertia::render('Test/TestList');
        return Inertia::render('Category');
    }
}
