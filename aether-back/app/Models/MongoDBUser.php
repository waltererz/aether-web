<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class MongoDBUser extends Model
{
    use SoftDeletes;

    protected $connection = 'mongodb';

    protected $collection = 'users';

    protected $fillable = [
        'uuid',
        'authorization_history',
    ];

    protected $dates = ['deleted_at'];
}
