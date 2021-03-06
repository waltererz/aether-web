<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Group;
use App\Models\Advisor;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasApiTokens;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'unique_code',
        'firstname',
        'lastname',
        'middlename',
        'nickname',
        'email',
        'group_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id',
        'group_id',
        'unique_code',
        'deleted_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = true;

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function advisor()
    {
        return $this->hasOne(Advisor::class);
    }
}
