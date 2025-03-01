// Post data
const posts = {
    'hosting-static-sites': {
        title: 'Hosting Static Sites on Fly.io',
        date: 'February 14, 2023',
        tags: ['cloudflare', 'fly.io'],
        excerpt: 'I recently joined the team at Fly.io, and have slowly been moving my various sites and hobby projects over...',
        content: `
            <p>I recently joined the team at <a href="https://fly.io" target="_blank">Fly.io</a>, and have slowly been moving my various sites and hobby projects over. In case you haven't heard of Fly.io, we help developers host apps (all sorts of apps, not only JavaScript-based ones) close to users – no devops skills required. I use Fly.io to host a few Python apps like <a href="#">this one</a> and <a href="#">this one</a>.</p>
            
            <p>While Fly.io is primarily designed for hosting applications, it's also a great place to host static sites. In this post, I'll show you how to deploy a static site to Fly.io in just a few minutes.</p>
            
            <h2>Getting Started</h2>
            
            <p>First, you'll need to install the Fly CLI. If you're on macOS and have Homebrew installed, you can run:</p>
            
            <pre><code>brew install flyctl</code></pre>
            
            <p>For other platforms, check out the <a href="https://fly.io/docs/hands-on/install-flyctl/" target="_blank">installation instructions</a>.</p>
            
            <p>Once you have the CLI installed, you'll need to sign up for a Fly.io account:</p>
            
            <pre><code>fly auth signup</code></pre>
            
            <p>Or if you already have an account, log in:</p>
            
            <pre><code>fly auth login</code></pre>
            
            <h2>Deploying a Static Site</h2>
            
            <p>Now, let's create a new directory for our static site and add a simple index.html file:</p>
            
            <pre><code>mkdir my-static-site
cd my-static-site
echo '&lt;html&gt;&lt;body&gt;&lt;h1&gt;Hello, Fly.io!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;' > index.html</code></pre>
            
            <p>Next, we'll create a Dockerfile to serve our static files:</p>
            
            <pre><code>FROM nginx:alpine
COPY . /usr/share/nginx/html</code></pre>
            
            <p>Now, let's initialize our Fly.io app:</p>
            
            <pre><code>fly launch</code></pre>
            
            <p>Follow the prompts to configure your app. When asked if you want to deploy now, say yes.</p>
            
            <p>That's it! Your static site is now deployed on Fly.io. You can visit it at https://your-app-name.fly.dev.</p>
            
            <h2>Custom Domains</h2>
            
            <p>If you want to use a custom domain for your static site, you can do that too:</p>
            
            <pre><code>fly certs create your-domain.com</code></pre>
            
            <p>Then, update your DNS settings to point to your Fly.io app. For more details, check out the <a href="https://fly.io/docs/app-guides/custom-domains-with-fly/" target="_blank">custom domains documentation</a>.</p>
            
            <h2>Conclusion</h2>
            
            <p>Fly.io makes it incredibly easy to deploy static sites, and with its global network, your site will be fast for users all around the world. Plus, you get all the benefits of Fly.io's platform, like automatic HTTPS, custom domains, and more.</p>
            
            <p>If you have any questions or run into any issues, feel free to reach out to me or check out the <a href="https://community.fly.io/" target="_blank">Fly.io community forum</a>.</p>
        `,
        prev: {
            slug: 'the-moon',
            title: 'The Moon'
        },
        next: null
    },
    'the-moon': {
        title: 'The Moon',
        date: 'November 8, 2022',
        tags: ['photography', 'astronomy'],
        excerpt: 'There was a "blood moon" eclipse tonight. I've never tried photographing the moon before...',
        content: `
            <p>There was a "blood moon" eclipse tonight. I've never tried photographing the moon before – mostly because I didn't own a telephoto lens until recently. The photo below was captured at 840mm (1260mm FF-equivalent). It's crazy to think this giant rock is just chilling up there.</p>
            
            <img src="https://source.unsplash.com/random/1200x800?moon,eclipse" alt="Blood Moon Eclipse" class="post-image">
            
            <p>The lunar eclipse was visible from North America, and I was lucky enough to have clear skies in my area. I set up my camera on a tripod and used a remote shutter release to minimize camera shake.</p>
            
            <h2>Camera Settings</h2>
            
            <p>For those interested in the technical details, here are the settings I used:</p>
            
            <ul>
                <li>Camera: Sony A7III</li>
                <li>Lens: Sony FE 200-600mm f/5.6-6.3 G OSS + 1.4x teleconverter</li>
                <li>Focal Length: 600mm × 1.4 = 840mm (1260mm full-frame equivalent)</li>
                <li>Aperture: f/9</li>
                <li>Shutter Speed: 1/125s</li>
                <li>ISO: 800</li>
            </ul>
            
            <p>I was surprised by how challenging it was to get a sharp image of the moon. Even with a sturdy tripod and remote shutter, the slightest vibration or atmospheric disturbance can affect the sharpness. I took about 50 photos and this was the sharpest one.</p>
            
            <h2>Processing</h2>
            
            <p>I processed the image in Adobe Lightroom, making the following adjustments:</p>
            
            <ul>
                <li>Increased clarity and texture to bring out the details of the lunar surface</li>
                <li>Slightly boosted the reds to enhance the "blood moon" effect</li>
                <li>Applied some noise reduction</li>
                <li>Added a slight vignette to draw attention to the moon</li>
            </ul>
            
            <p>I'm quite happy with the result, especially for a first attempt. Next time, I might try focus stacking to get even more detail.</p>
            
            <h2>The Science Behind the Blood Moon</h2>
            
            <p>A "blood moon" occurs during a total lunar eclipse when the Earth comes between the Sun and the Moon, casting its shadow on the Moon. The reddish color comes from sunlight filtering through Earth's atmosphere and bending around the edges of Earth to reach the Moon.</p>
            
            <p>It's the same phenomenon that makes sunrises and sunsets appear red – the shorter blue wavelengths of light are scattered by our atmosphere, while the longer red wavelengths pass through and reach the Moon.</p>
            
            <p>If you missed this eclipse, the next total lunar eclipse visible from North America will be on March 14, 2025.</p>
        `,
        prev: {
            slug: 'shonan-sunset',
            title: 'Shonan Sunset'
        },
        next: {
            slug: 'hosting-static-sites',
            title: 'Hosting Static Sites on Fly.io'
        }
    }
};

// Handle post links
document.addEventListener('DOMContentLoaded', () => {
    // Set up post links
    document.querySelectorAll('.post-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const postSlug = link.getAttribute('data-post');
            window.location.href = `/posts/${postSlug}.html`;
        });
    });
}); 