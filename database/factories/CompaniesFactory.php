<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    $name = $faker->company;
    return [
        'name' => $name,
        'email' => $faker->unique()->companyEmail,
        'logo' => '\/storage\/logo\/test.jpg',
        'website' => 'https://'.$faker->slug(2).'.'.$faker->countryCode,
    ];
});
