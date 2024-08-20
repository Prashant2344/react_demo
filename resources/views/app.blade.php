<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <meta name="api-base-url" content="{{ url('/') }}" />
    <link rel="stylesheet" href="{{asset('assets/css/customize.min.css')}}">
    <link rel="stylesheet" href="{{asset('fontawesome/css/font-awesome.css')}}">

    <script>
        window.base_url = "{{ url('/') }}"
    </script>
    @routes
</head>
<body>
    @inertia
    <script src="{{ asset('/js/app.js') }}?v={{substr(microtime(),-10)}}" defer></script>
</body>
</html>