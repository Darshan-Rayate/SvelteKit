
<script>
import {page} from '$app/stores';
export let form;
const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<form method="POST" action="?/login&redirectTo={redirectTo}">
<p>{form?.message || ''}</p>
<input type="text" name="username" placeholder="username" value={form?.username ?? ''}/>
<input type="password" name="password" placeholder="password" />
<button type="submit">Login</button>
<button formaction="?/register&redirectTo={redirectTo}">Register</button>


</form>