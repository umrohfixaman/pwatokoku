self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPxnzgW0OmNC3wPeY8Ob56_JtuqgpHpyJS2om_RNvllbQ9yHgbfYp3whOXSXPCbiP-hTc50bGY9Z79wss2WSKMjf1P8sgFDVdgVHqLr4QKqJizKqPi0gVEtXbcAqBFDl29KDKfigQL4iEUL1DVm9o2QLF9sn2_JC2EixEnrrvVKmOBZ1mwPwHMqa1ISyA/s320/ChatGPT%20Image%2026%20Feb%202026,%2007.51.00.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

