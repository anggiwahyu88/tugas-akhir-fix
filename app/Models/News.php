<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_author', 'id');
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(News_categorys::class, 'id_category', 'id');
    }
}
