<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = ['id'];

    protected $hidden = [
        'password',
        'remember_token',
        'id_father',
        'id_mother',
        'id_school',
    ];

    public function mother(): BelongsTo
    {
        return $this->belongsTo(Mothers::class, 'id_mother', 'id');
    } 
    public function father(): BelongsTo
    {
        return $this->belongsTo(Fathers::class, 'id_father', 'id');
    }
     public function school(): BelongsTo
    {
        return $this->belongsTo(Schools::class, 'id_school', 'id');
    }
}
