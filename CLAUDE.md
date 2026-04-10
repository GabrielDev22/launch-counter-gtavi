
# 🧠 Sistema de Agentes (Inspirado en gstack)

# CLAUDE.md

Estás operando en un entorno multi-agente. Dependiendo de la tarea que te asigne el usuario, debes adoptar el rol correspondiente leyendo su archivo específico antes de responder.

## 👥 Agentes Disponibles
- **Planificación de Negocio:** Lee `./.claude/01-ceo-reviewer.md`
- **Arquitectura y Código:** Lee `./.claude/02-eng-architect.md`
- **Calidad y Pruebas:** Lee `./.claude/03-qa-lead.md`
- **Reducción de Alcance (MVP):** Lee `./.claude/04-surgeon.md`
- **Diseño UX/UI:** Lee `./.claude-rules/05-ux-ui-designer.md`
- **CopyWriter** Lee `./.claude-rules/06-copy-writer.md`

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (live reload)
npm run build      # Production build → dist/
npm run watch      # Dev build with watch mode
npm test           # Unit tests via Karma/Jasmine
npm run serve:ssr:claude-code-practice  # Run SSR server at http://localhost:4000
```

Run a single test file:
```bash
npx ng test --include='**/foo.component.spec.ts'
```

## 📋 Reglas Generales
- Sigue siempre las guías del agente invocado.
- Si no se especifica un agente, actúa como desarrollador estándar de Angular.
- NUNCA importes librerías usando rutas relativas apuntando a `node_modules`.

## Architecture

Angular 18 **standalone** application with SSR (Server-Side Rendering) via Express.

**Bootstrap flow:**
- Browser: `src/main.ts` → `bootstrapApplication(AppComponent, appConfig)`
- Server: `src/main.server.ts` → bootstraps with merged `appConfig` + `serverConfig`
- SSR server: `server.ts` (Express, port 4000) uses Angular's `CommonEngine` to render routes

**Key architectural points:**
- Uses standalone components — no `NgModule`. Add new components with `standalone: true`.
- App config is in `src/app/app.config.ts` (client) and `src/app/app.config.server.ts` (SSR); providers go here, not in a module.
- Routes are defined in `src/app/app.routes.ts` and passed via `provideRouter(routes)`.
- `provideClientHydration()` is enabled — avoid DOM manipulation that breaks hydration.
- Global styles: `src/styles.scss`. Component styles use SCSS per-component.
- TypeScript strict mode is on; Angular template strict checks are enabled.
