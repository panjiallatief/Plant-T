<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BuahModel;
use App\surveimodel;

class buahController extends Controller
{
    public function index(){
        $data['buah'] = BuahModel::get();
        return response($data, 200, ['Content-Type => application/json']);
    }
    public function buah(Request $request){
        $data = BuahModel::leftJoin('syarat','syarat.id_syarat','=','buah.id_syarat')->where('buah.id',$request->id)->first();
        return response($data, 200, ['Content-Type => application/json']);
       // echo json_encode($data)
    }
    public function survei(Request $request){
        $data = surveimodel::where('tipe',$request->tipe)->first();
        return response($data, 200, ['Content-Type => application/json']);
    }
    public function hasil(Request $request){
        $table = BuahModel::select('id','nama','ket','gambar')->where([['ph',$request->ph],['suhu',$request->suhu],['musim',$request->musim]])->get();
        if(!empty($table[0])){
            $data['buah'] = $table;
            $data['avail'] = true;
        }else{
            $data['buah'] = "tidak ditemukan";
            $data['avail'] = false;
        }
        return response($data, 200, ['Content-Type => application/json']);
    }
}
