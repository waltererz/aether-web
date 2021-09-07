<script type="text/javascript">
    window._aether = {
        name: "{{ config('app.name') }}",
        domain: "{{ config('session.domain') }}",
        baseUrl: "{{ config('app.url') }}",
        client: "{{ request()->ip() }}",
        auth: "{{ isset($__auth) ? $__auth : '' }}",
        is_mobile: {{ isset($__mobile) ? ($__mobile ? 'true' : 'false') : 'false' }},
        agent: {
            'device': "{{ $__agent['device'] }}",
            'platform': "{{ $__agent['platform'] }}",
            'platform_version': "{{ $__agent['platform_version'] }}",
            'browser': "{{ $__agent['browser'] }}",
        },
        @if (isset($__user))
            user: {
            'email': "{{ $__user->email }}",
            'name': "{{ $__user->lastname . $__user->firstname }}",
            'nickname': "{{ $__user->nickname }}",
            'group': "{{ $__user->group }}",
            'image': "{{ $__user->image }}",
            },
        @endif
    };
</script>
