<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use App\Models\News_categorys;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::all();
        $news_collection = NewsCollection::collection($news->loadMissing('author:id,name,email', 'category'));
        return Inertia::render('NewsUpdate', [
            "news" => $news_collection
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): RedirectResponse
    {
        $user = $request->user();
        $image_path = $request->file('thumnil')->store('thumnil', 'public');
        News::create([
            'thumnil' => $image_path,
            'title' => $request->title,
            'content' => $request->content,
            'id_category' => $request->category,
            'id_author' => $user->id,
        ]);
        return Redirect::route('dashboard');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $option = [[
            "title" => "::Pilih Category::",
            "value" => "DEFAULT",
        ]];
        $category = News_categorys::all();
        foreach ($category as $key => $value) {
            array_push($option, [
                "title" => $value->name,
                "value" => $value->id,
            ]);
        };
        return Inertia::render('FormNews', [
            "option" => $option,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news_collection = new NewsCollection($news->loadMissing('author:id,name,email', 'category'));
        return Inertia::render('News', [
            "news" => $news_collection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        $option = [[
            "title" => "::Pilih Category::",
            "value" => "DEFAULT",
        ]];
        $category = News_categorys::all();
        foreach ($category as $key => $value) {
            array_push($option, [
                "title" => $value->name,
                "value" => $value->id,
            ]);
        };
        return Inertia::render('FormNews', [
            "option" => $option,
            "news" => $news,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $news->update([
            "title"=>$request->title,
            "content"=>$request->content,
            "id_category"=>$request->category,
        ]);
        return Redirect::route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
