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
        return [
            "id" => $this->id,
            "title" => $this->title,
            "content" => $this->whenLoaded('content'),
            "thumnil" => $this->whenLoaded('thumnil'),
            "category" => $this->whenLoaded('category'),
            "author" => $this->whenLoaded('author'),
            "created_at" => $this->whenLoaded('created_at'),
        ];
    }
}
