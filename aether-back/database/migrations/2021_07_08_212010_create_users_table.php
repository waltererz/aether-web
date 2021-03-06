<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('unique_code', 255)->unique();
            $table->string('firstname', 100);
            $table->string('lastname', 100);
            $table->string('middlename', 100);
            $table->string('nickname', 100)->unique();
            $table->boolean('public')->default(false);
            $table->string('email', 255);
            $table->bigInteger('group_id')->unsigned();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('last_accessed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('group_id')->references('id')->on('groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
