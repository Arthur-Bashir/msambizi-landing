<template>
  <footer class="border-t border-ink-900/10 bg-white py-14 dark:border-white/10 dark:bg-midnight-900">
    <div class="page-container">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" class="flex items-center gap-2.5">
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900 text-white dark:bg-brand-600">
              <GraduationCap class="h-5 w-5" />
            </span>
            <span class="font-display text-xl font-semibold tracking-tight">Msambizi<span class="text-brand-600">.</span></span>
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-300">
            The governed AI learning platform for universities, colleges and tutors. Empowering
            educators and learners to thrive with AI.
          </p>
          <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-verified-500/30 bg-verified-500/10 px-3 py-1 text-xs font-semibold text-verified-600 dark:text-verified-400">
            <ShieldCheck class="h-3.5 w-3.5" /> Curriculum-Grounded • Institution-Owned
          </div>
        </div>

        <div>
          <h4 class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Platform</h4>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="#why" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Why Msambizi</a></li>
            <li><a href="#capabilities" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Capabilities</a></li>
            <li><a href="#how" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">How it works</a></li>
            <li><a href="#workspaces" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Workspaces</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Workspaces</h4>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="#workspaces" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Universities &amp; Faculties</a></li>
            <li><a href="#workspaces" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Colleges &amp; Institutes</a></li>
            <li><a href="#workspaces" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Tutors &amp; Centers</a></li>
            <li><a href="#workspaces" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Students</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Resources</h4>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="https://app.msambizi.school/login" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Sign in / Portal</a></li>
            <li><a href="#demo" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Book a demo</a></li>
            <li><a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Contact support</a></li>
            <li><a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request" class="text-ink-500 hover:text-brand-600 dark:text-ink-300">Help Center</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-900/10 pt-6 text-xs text-ink-400 sm:flex-row dark:border-white/10">
        <p>© 2026 Msambizi. All rights reserved. Built for African higher education.</p>
        <div class="flex gap-4">
          <a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request" class="hover:text-brand-600">Privacy</a>
          <a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request" class="hover:text-brand-600">Terms</a>
          <a href="mailto:support@msambizi.school?subject=Msambizi%20support%20request" class="hover:text-brand-600">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { GraduationCap, ShieldCheck } from 'lucide-vue-next'
</script>