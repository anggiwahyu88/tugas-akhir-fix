<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $path = $request->path();
        $check_path = $path != "/" && $path != "dashboard/news/update";
        return [
            "id" => $this->id,
            "title" => $this->title,
            "content" => $this->when($check_path, $this->content),
            "thumnil" => $this->when($path != "dashboard/news/update", $this->thumnil),
            "category" => $this->whenLoaded('category'),
            "author" => $this->whenLoaded('author'),
            "created_at" => $this->when($check_path, $this->created_at),
        ];
    }
}
