<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsCollection;
use App\Models\News;
use App\Models\News_categorys;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::all();
        $news_collection = NewsCollection::collection($news->loadMissing('author:id,name,email', 'category'));
        return Inertia::render('Admin/NewsUpdate', [
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
        $data[] = [
            'thumnil' => $image_path,
            'title' => $request->title,
            'content' => $request->content,
            'id_category' => $request->category,
            'id_author' => $user->id,
        ];
        foreach (array_chunk($data, 3) as $item) {
            News::insert($item);
        }
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
        $category = Cache::get('category');
        if ($category == null) {
            $category = News_categorys::all();
            Cache::put('category', $category, 300);
        }
        foreach ($category as  $value) {
            array_push($option, [
                "title" => $value->name,
                "value" => $value->id,
            ]);
        };
        return Inertia::render('Admin/FormNews', [
            "option" => $option,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $news = News::findorfail($id);
        $news_collection = new NewsCollection($news->loadMissing('author:id,name,email', 'category'));
        return Inertia::render('Admin/News', [
            "news" => $news_collection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $news = News::findorfail($id);
        $option = [[
            "title" => "::Pilih Category::",
            "value" => "DEFAULT",
        ]];
        $category = Cache::get('category');
        if ($category == null) {
            $category = News_categorys::all();
            Cache::put('category', $category, 300);
        }
        foreach ($category as $value) {
            array_push($option, [
                "title" => $value->name,
                "value" => $value->id,
            ]);
        };
        return Inertia::render('Admin/FormNews', [
            "option" => $option,
            "news" => $news,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $news = News::findorfail($id);
        $news->update([
            "title" => $request->title,
            "content" => $request->content,
            "id_category" => $request->category,
        ]);
        return Redirect::route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $news = News::findorfail($id);
        Storage::delete('public/' . $news->thumnil . '');
        $news->delete();
        return Redirect::route('dashboard');
    }
}
