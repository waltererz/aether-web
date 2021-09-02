<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Advisor;

class InvestmentTheme extends Model
{
    use SoftDeletes;

    protected $table = 'investment_themes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'name',
        'slug',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id',
        'deleted_at',
    ];

    public $timestamps = true;

    public function advisors()
    {
        return $this->hasMany(Advisor::class, 'theme_id');
    }
}
