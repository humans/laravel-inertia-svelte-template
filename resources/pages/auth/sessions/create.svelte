<script>
    import {useForm} from "@inertiajs/svelte";

    export let links

    const form = useForm({
        email: '',
        password: '',
    })

    function submit () {
        $form.post(links.store_path)
    }
</script>

<form action={links.store_path} method="POST" on:submit|preventDefault={submit}>
    <input type="email" bind:value={$form.email}>
    <input type="password" bind:value={$form.password}>
    <button type="submit">Signin</button>
</form>

