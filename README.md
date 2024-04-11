# Svt.Ink

This is a URL shortener made with SvelteKit and MongoDB.

https://svtink.netlify.app/

(The previous URL, https://svt.ink, will not work anymore.)

## Schema

Redirection Schema in MongoDB:

-   shortcut: `string`
-   url: `string` (validated as URL)
-   visits: `number` (will be incremented with each visit)
-   createdAt: `timestamp`
-   updatedAt: `timestamp` (gets updated with each visit)
