<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Advisor;

class InvestmentTheme extends Model
{
    use HasFactory;

    protected $table = 'investment_themes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid',
        'name',
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
