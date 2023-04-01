<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Petitioner;


class PetitionerController extends Controller
{

    public function getAllPetitioners() {
        return response()->json(Petitioner::select('id','name')->get());
    }

    public function getOnePetitioner($id) {
        return response()->json(Petitioner::find($id));
    }

    public function createPetitioner(Request $request) {
        $this->validate($request,[
            'name' => 'required',
        ]);
        $petitioner = Petitioner::create($request->all());
        return response()->json($petitioner, 201); 
    }

}