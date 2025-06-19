<!DOCTYPE html>
<html lang="en">
  <head>
    <title>CyberLand Academy</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
  </head>
  <script>
    window.APP_URL = "{{ url('/') }}";
  </script>
  <body>
    @inertia
  </body>
</html>
