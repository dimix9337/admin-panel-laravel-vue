<?php


/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Employees;
use Faker\Generator as Faker;

$factory->define(Employees::class, function (Faker $faker) use ($factory) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'company_id' => factory(\App\Company::class)->create()->id,
        'email' => $faker->unique()->email,
        'phone' => $faker->phoneNumber,
    ];
});
