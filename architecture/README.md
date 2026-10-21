# PaperPhone code architecture

Generated on 2026-10-21 using [Archify 3.2.0](https://github.com/tt-a1i/archify).

- Plus source: https://github.com/619dev/Paperphone-plus/tree/bc1d6e0c7f62e4220d81af0dc810fc9d60b0c8a8
- Lite source: https://github.com/619dev/PaperPhoneLite/tree/bcca78d8e58a749c6725cea7a6bc65d3bc159436

These are system overviews of the shared client and Rust server, not exhaustive module trees. Native shell internals live in separate repositories and are not expanded. Tor represents Lite's production network entry. Push services are conditional on configuration and device registration; Lite includes a server APNs path, which does not imply that its production client registers APNs tokens. Messages are encrypted on clients; uploaded attachment bytes and metadata remain server responsibilities.

The JSON candidates in `../.archify/architecture-paperphone-20261021/` retain source ranges and diagram layout. Every component links to the pinned source revision. Plus had an unrelated local `.gitignore` edit; all cited files were committed and unchanged.

To regenerate from the website repository with Archify installed and source repositories alongside it:

```sh
node "$HOME/.codex/skills/archify/bin/archify.mjs" finalize architecture .archify/architecture-paperphone-20261021/plus.json architecture/paperphoneplus.html --repo-root ../Paperphone-plus --quality showcase --out-dir /tmp/archify-plus-review --json
node "$HOME/.codex/skills/archify/bin/archify.mjs" finalize architecture .archify/architecture-paperphone-20261021/lite.json architecture/paperphonelite.html --repo-root ../PaperPhoneLite --quality showcase --out-dir /tmp/archify-lite-review --json
```

Both diagrams passed schema, delivery, strict artifact and real Chrome browser checks. The generated standalone HTML includes its viewer and works without a build step. Layout includes an automatically routed bend on the offline-push connection.
