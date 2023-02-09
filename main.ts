import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'
import { serveDir } from 'https://deno.land/std@0.140.0/http/file_server.ts'
import { join } from 'https://deno.land/std@0.165.0/path/mod.ts'

const staticPath = Deno.cwd()

serve(
  async (req) => {
    const { pathname } = new URL(req.url)

    if (pathname.endsWith === '/') {
      return new Response(await Deno.readFile(join(pathname, '/index.html')))
    }
    return serveDir(req, { fsRoot: staticPath })
  },
  { port: 3000 }
)
