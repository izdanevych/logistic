<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


This demo example of monolith app with Laravel and React using Inertia (with Tailwind as css framework)

## Set up with Docker 
#### (if you have Docker, but do not have Composer, PHP and Node)

1. Clone repository
2. Copy .example.env to .env
3. Run command to install Composer dependencies:  
`docker run -it --rm -u $(id -u):$(id -g) -v $(pwd):/app composer:latest composer install`
4. Run `./vendor/bin/sail up -d` to up containers
5. Run `./vendor/bin/sail artisan migrate --seed`
6. Run `./vendor/bin/sail npm install`
7. Run `./vendor/bin/sail npm run build`
8. App should be up and running on http://localhost


## Set up without Docker
#### (You should have Composer, PHP and Node installed. Dependencies check in composer.json and package.json)


1. Clone repository
2. Copy .example.env to .env
3. Run command to install Composer dependencies: `composer install`
4. Run `php artisan migrate --seed`
5. Run `npm install`
6. Run `npm run build`
7. Run `php artisan serve`
8. App should be up and running on http://localhost

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
