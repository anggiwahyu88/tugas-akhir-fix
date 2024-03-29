<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Major_user extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public $timestamps = false;

    protected $hidden = [
        'option_1',
        'option_2',
        'option_3',
    ];

    public function major_1(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'option_1', 'id');
    }
    public function major_2(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'option_2', 'id');
    }
    public function major_3(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'option_3', 'id');
    }
}
