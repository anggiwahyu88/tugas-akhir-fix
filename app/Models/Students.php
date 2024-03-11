<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Students extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $hidden = [
        'id_major',
        'id_user',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'id_major', 'id');
    }
}
