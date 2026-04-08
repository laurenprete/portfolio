# Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace old portfolio project showcase with six current projects using visual storytelling — hero banners, alternating feature screenshots, narrative descriptions.

**Architecture:** Build reusable Astro components (ProjectHero, FeatureBlock) for detail pages and a new React ProjectCard for the main page grid. Each project gets a dedicated detail page using these components. Content is written from repo context; images use placeholder paths that Lauren will fill in.

**Tech Stack:** Astro 4, React 18, Tailwind CSS 3, TypeScript

---

## Image Placeholders

All image paths below reference files Lauren needs to provide. Convention:

- Card/hero images: `/assets/images/projects/{project-name}-hero.png`
- Feature screenshots: `/assets/images/projects/{project-name}-{feature}.png`

Until images are provided, pages will show broken image tags. This is intentional — the code and content are correct, just awaiting assets.

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `src/components/ProjectHero.astro` | Hero banner for detail pages |
| Create | `src/components/FeatureBlock.astro` | Alternating screenshot + description block |
| Create | `src/partials/ProjectCard.tsx` | New main page card with gradient overlay |
| Modify | `src/partials/ProjectList.tsx` | New project data, use ProjectCard |
| Modify | `src/pages/index.astro` | Re-add `<ProjectList />` |
| Create | `src/pages/projects/gorgon-explorer.astro` | GorgonExplorer detail page |
| Create | `src/pages/projects/leagues-advisor.astro` | Leagues Advisor detail page |
| Create | `src/pages/projects/gravmagnet.astro` | GravMagnet detail page |
| Create | `src/pages/projects/starstuff-photos.astro` | StarStuff Photos detail page |
| Create | `src/pages/projects/ikim-mit.astro` | IKIM MIT detail page |
| Delete | `src/pages/projects/5squares.astro` | Old project page |
| Delete | `src/pages/projects/nai-landing-pages.astro` | Old project page |
| Modify | `src/templates/Base.astro` | Remove slick carousel CSS imports |
| Modify | `src/partials/Hero.tsx` | Update years of experience |
| Delete | `src/partials/Project.tsx` | Replaced by ProjectCard.tsx |

---

### Task 1: Create Detail Page Components

**Files:**
- Create: `src/components/ProjectHero.astro`
- Create: `src/components/FeatureBlock.astro`

- [ ] **Step 1: Create `src/components/` directory**

```bash
mkdir -p src/components
```

- [ ] **Step 2: Create ProjectHero.astro**

Create `src/components/ProjectHero.astro`:

```astro
---
interface Props {
  title: string;
  tagline: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const { title, tagline, image, techStack, liveUrl, githubUrl } = Astro.props;
---

<div class="mb-12">
  <img
    src={image}
    alt={title}
    class="w-full h-48 md:h-72 lg:h-80 object-cover rounded-lg shadow-2xl"
  />
  <div class="mt-6">
    <h1 class="text-3xl lg:text-4xl font-bold text-lightpurple mb-2">
      {title}
    </h1>
    <p class="text-lg lg:text-xl text-gray-300 mb-4">{tagline}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech) => (
        <span class="text-sm bg-medpurple/60 text-lightpurple px-3 py-1 rounded">
          {tech}
        </span>
      ))}
    </div>
    <div class="flex gap-4">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-lightblue font-semibold hover:underline"
        >
          Visit Live Site &rarr;
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-lightblue font-semibold hover:underline"
        >
          View on GitHub &rarr;
        </a>
      )}
    </div>
  </div>
</div>
```

- [ ] **Step 3: Create FeatureBlock.astro**

Create `src/components/FeatureBlock.astro`:

```astro
---
interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const { title, description, image, imageAlt, reverse = false } = Astro.props;
---

<div
  class:list={[
    'flex flex-col gap-6 md:gap-10 items-center my-10',
    reverse ? 'md:flex-row-reverse' : 'md:flex-row',
  ]}
>
  <div class="md:w-1/2">
    <img
      src={image}
      alt={imageAlt}
      class="rounded-lg shadow-xl w-full"
    />
  </div>
  <div class="md:w-1/2">
    <h3 class="text-xl font-bold text-lightpurple mb-3">{title}</h3>
    <p class="text-gray-200 leading-relaxed">{description}</p>
  </div>
</div>
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds (components exist but aren't imported anywhere yet).

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectHero.astro src/components/FeatureBlock.astro
git commit -m "feat: add ProjectHero and FeatureBlock components for detail pages"
```

---

### Task 2: Create ProjectCard and Update Main Page

**Files:**
- Create: `src/partials/ProjectCard.tsx`
- Modify: `src/partials/ProjectList.tsx`
- Modify: `src/pages/index.astro`
- Delete: `src/partials/Project.tsx`

- [ ] **Step 1: Create ProjectCard.tsx**

Create `src/partials/ProjectCard.tsx`:

```tsx
interface ProjectCardProps {
  image: string;
  title: string;
  tagline: string;
  techStack: string[];
  label: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  tagline,
  techStack,
  label,
  link,
}) => (
  <a
    href={link}
    className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute top-3 right-3">
      <span className="bg-darkpurple/80 text-lightpurple text-xs font-medium px-2 py-1 rounded">
        {label}
      </span>
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkpurple via-darkpurple/80 to-transparent p-4 pt-16">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm mb-2">{tagline}</p>
      <div className="flex flex-wrap gap-1">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-medpurple/60 text-lightpurple px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
```

- [ ] **Step 2: Rewrite ProjectList.tsx**

Replace the entire contents of `src/partials/ProjectList.tsx` with:

```tsx
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: '/assets/images/projects/gorgon-hero.png',
    title: 'GorgonExplorer',
    tagline: 'Interactive game data explorer for Project: Gorgon MMO',
    techStack: ['React', 'TypeScript', 'Hono', 'DynamoDB', 'Lambda'],
    label: 'Game Tool',
    link: '/projects/gorgon-explorer/',
  },
  {
    image: '/assets/images/projects/leagues-hero.png',
    title: 'Leagues Advisor',
    tagline: 'Task planner and progress tracker for OSRS Leagues',
    techStack: ['React', 'Java', 'RuneLite', 'AWS'],
    label: 'Game Tool',
    link: '/projects/leagues-advisor/',
  },
  {
    image: '/assets/images/projects/gravmagnet-hero.png',
    title: 'GravMagnet',
    tagline: 'Lead generation and CRM platform for service businesses',
    techStack: ['.NET 8', 'Angular', 'MySQL', 'AWS'],
    label: 'Client Work',
    link: '/projects/gravmagnet/',
  },
  {
    image: '/assets/images/projects/starstuff-hero.png',
    title: 'StarStuff Photos',
    tagline: 'Photography portfolio and fine art print store',
    techStack: ['Next.js', 'Prisma', 'Stripe', 'AWS'],
    label: 'Client Work',
    link: '/projects/starstuff-photos/',
  },
  {
    image: '/assets/images/projects/ikim-hero.png',
    title: 'IKIM MIT',
    tagline: 'Custom WordPress platform for MIT manufacturing research',
    techStack: ['WordPress', 'PHP', 'Gutenberg', 'AWS S3'],
    label: 'MIT',
    link: '/projects/ikim-mit/',
  },
];

const ProjectList: React.FC = () => (
  <div>
    <h2 className="my-6 text-3xl font-bold text-lightpurple">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export { ProjectList };
```

- [ ] **Step 3: Re-add ProjectList to index.astro**

In `src/pages/index.astro`, add `<ProjectList />` back after `<Hero />`:

```astro
<Base head={{ title, description }}>
  <Hero />
  <ProjectList />
</Base>
```

- [ ] **Step 4: Delete old Project.tsx**

```bash
rm src/partials/Project.tsx
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```

Expected: Build succeeds. The ProjectList import in `ProjectList.tsx` now points to `ProjectCard` instead of `Project`.

- [ ] **Step 6: Commit**

```bash
git add src/partials/ProjectCard.tsx src/partials/ProjectList.tsx src/pages/index.astro
git rm src/partials/Project.tsx
git commit -m "feat: replace project cards with visual storytelling design"
```

---

### Task 3: GorgonExplorer Detail Page

**Files:**
- Create: `src/pages/projects/gorgon-explorer.astro`

**Context:** GorgonExplorer (gorgonexplorer.com) is a web app for Project: Gorgon MMO players. React 19 + Hono + DynamoDB + Lambda. Repo: `github.com/laurenprete/gorgon-explorer`. Public, live site.

- [ ] **Step 1: Create gorgon-explorer.astro**

Create `src/pages/projects/gorgon-explorer.astro`:

```astro
---
import Base from '@/templates/Base.astro';
import ProjectHero from '@/components/ProjectHero.astro';
import FeatureBlock from '@/components/FeatureBlock.astro';
import { AppConfig } from '@/utils/AppConfig';

const title = `GorgonExplorer | ${AppConfig.title}`;
const description = 'Interactive game data explorer for Project: Gorgon MMO';
---

<Base head={{ title, description }}>
  <div class="max-w-4xl mx-auto">
    <ProjectHero
      title="GorgonExplorer"
      tagline="Interactive game data explorer for Project: Gorgon MMO"
      image="/assets/images/projects/gorgon-hero.png"
      techStack={['React 19', 'TypeScript', 'Hono', 'Tailwind CSS', 'DynamoDB', 'Lambda', 'shadcn/ui']}
      liveUrl="https://gorgonexplorer.com"
      githubUrl="https://github.com/laurenprete/gorgon-explorer"
    />

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-4">The Story</h2>
      <p class="text-gray-200 leading-relaxed mb-4">
        Project: Gorgon is a niche MMO with a passionate community but limited tooling
        for browsing and understanding game data. Players relied on wikis and scattered
        spreadsheets to look up item stats, skill synergies, and progression paths.
      </p>
      <p class="text-gray-200 leading-relaxed mb-4">
        I built GorgonExplorer as a modern web app that pulls publicly available game data
        and presents it through a clean, searchable interface with data visualization.
        The backend syncs game data into DynamoDB via a scheduled data pipeline, and
        a Hono API serves it to a React frontend with responsive tables and charts.
      </p>
      <p class="text-gray-200 leading-relaxed">
        The app is fully serverless on AWS — Lambda functions behind API Gateway,
        DynamoDB for storage, and the frontend deployed as a static site. Infrastructure
        is managed with AWS CDK.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-6">Features</h2>

      <FeatureBlock
        title="Searchable Game Data"
        description="Browse and filter game data through responsive, sortable tables powered by TanStack Table. Find items, skills, and recipes instantly with full-text search and column filtering."
        image="/assets/images/projects/gorgon-data-tables.png"
        imageAlt="GorgonExplorer data tables with search and filtering"
      />

      <FeatureBlock
        title="Data Visualization"
        description="Interactive charts built with Recharts help players visualize skill progression, item distributions, and other game data patterns that are hard to see in raw tables."
        image="/assets/images/projects/gorgon-charts.png"
        imageAlt="GorgonExplorer data visualization charts"
        reverse={true}
      />

      <FeatureBlock
        title="Serverless Architecture"
        description="Fully serverless on AWS — a Hono API on Lambda, DynamoDB for storage, and a scheduled data sync pipeline that keeps game data fresh. Infrastructure defined and deployed with AWS CDK."
        image="/assets/images/projects/gorgon-architecture.png"
        imageAlt="GorgonExplorer serverless architecture diagram"
      />

      <FeatureBlock
        title="Modern UI with shadcn/ui"
        description="Clean, accessible interface built with shadcn/ui and Tailwind CSS. Responsive design works seamlessly on desktop and mobile, with dark mode that matches the game's aesthetic."
        image="/assets/images/projects/gorgon-mobile.png"
        imageAlt="GorgonExplorer responsive mobile view"
        reverse={true}
      />
    </section>

    <a class="text-lightpurple font-bold hover:underline" href="/">&larr; Back to Portfolio</a>
  </div>
</Base>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds. Page available at `/projects/gorgon-explorer/`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/gorgon-explorer.astro
git commit -m "feat: add GorgonExplorer project detail page"
```

---

### Task 4: Leagues Advisor Detail Page

**Files:**
- Create: `src/pages/projects/leagues-advisor.astro`

**Context:** Leagues Advisor (leagues-advisor.com) is a web app + RuneLite plugin for OSRS Leagues. The plugin (Java/Gradle) syncs character data to the web app for task planning. Repos: `github.com/laurenprete/leagues-advisor-sync` (plugin). Public, live site.

- [ ] **Step 1: Create leagues-advisor.astro**

Create `src/pages/projects/leagues-advisor.astro`:

```astro
---
import Base from '@/templates/Base.astro';
import ProjectHero from '@/components/ProjectHero.astro';
import FeatureBlock from '@/components/FeatureBlock.astro';
import { AppConfig } from '@/utils/AppConfig';

const title = `Leagues Advisor | ${AppConfig.title}`;
const description = 'Task planner and progress tracker for Old School RuneScape Leagues';
---

<Base head={{ title, description }}>
  <div class="max-w-4xl mx-auto">
    <ProjectHero
      title="Leagues Advisor"
      tagline="Task planner and progress tracker for Old School RuneScape Leagues"
      image="/assets/images/projects/leagues-hero.png"
      techStack={['React', 'TypeScript', 'Java', 'RuneLite', 'AWS Lambda', 'DynamoDB']}
      liveUrl="https://leagues-advisor.com"
      githubUrl="https://github.com/laurenprete/leagues-advisor-sync"
    />

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-4">The Story</h2>
      <p class="text-gray-200 leading-relaxed mb-4">
        Old School RuneScape Leagues are temporary competitive game modes where players
        earn points by completing tasks across skills, quests, and achievements. With
        hundreds of tasks available, planning which ones to tackle — and in what order —
        is crucial for maximizing your score.
      </p>
      <p class="text-gray-200 leading-relaxed mb-4">
        Leagues Advisor is a two-part system: a web application for browsing and planning
        task routes, and a RuneLite plugin that automatically syncs your character's
        progress in real time. The plugin reads skill levels, quest completions, achievement
        diaries, combat achievements, and collection log entries every 10 seconds and pushes
        them to the web app.
      </p>
      <p class="text-gray-200 leading-relaxed">
        The result is a live dashboard that shows exactly where you stand and which tasks
        are within reach, so you can make informed decisions about what to do next.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-6">Features</h2>

      <FeatureBlock
        title="RuneLite Plugin — Automatic Progress Sync"
        description="A Java plugin for the RuneLite client that reads your character's state — skill levels, quest completions, achievement diaries, combat achievements, and collection log — and syncs it to the web app every 10 seconds. Uses a server-driven manifest system so new tracking variables can be added without a plugin update."
        image="/assets/images/projects/leagues-plugin.png"
        imageAlt="RuneLite plugin syncing character progress"
      />

      <FeatureBlock
        title="Task Planning and Route Optimization"
        description="Browse the full task list with filters for skill requirements, regions, and point values. Plan your route through tasks based on your current progress, seeing exactly which prerequisites you've already met."
        image="/assets/images/projects/leagues-tasks.png"
        imageAlt="Leagues Advisor task planning interface"
        reverse={true}
      />

      <FeatureBlock
        title="Live Progress Dashboard"
        description="See your character's progress at a glance — completed tasks, points earned, skills trained, quests finished. Updated in real time as the RuneLite plugin syncs new data."
        image="/assets/images/projects/leagues-dashboard.png"
        imageAlt="Leagues Advisor progress dashboard"
      />

      <FeatureBlock
        title="Collection and Achievement Tracking"
        description="Track collection log items with full snapshot and real-time new item detection. Combat achievements are captured via chat message parsing, giving comprehensive coverage of all league scoring categories."
        image="/assets/images/projects/leagues-collection.png"
        imageAlt="Leagues Advisor collection log tracking"
        reverse={true}
      />
    </section>

    <a class="text-lightpurple font-bold hover:underline" href="/">&larr; Back to Portfolio</a>
  </div>
</Base>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/leagues-advisor.astro
git commit -m "feat: add Leagues Advisor project detail page"
```

---

### Task 5: GravMagnet Detail Page

**Files:**
- Create: `src/pages/projects/gravmagnet.astro`

**Context:** GravMagnet (repo: neighbor-lead) is a lead generation/CRM SaaS for service businesses. ASP.NET Core 8, Angular 19, MySQL, AWS. Login-gated — showcase with screenshots only. Features: branded lead capture forms, real-time analytics, CRM integration (ServiceTitan), service area management, Facebook group marketing with AI-generated CTAs.

- [ ] **Step 1: Create gravmagnet.astro**

Create `src/pages/projects/gravmagnet.astro`:

```astro
---
import Base from '@/templates/Base.astro';
import ProjectHero from '@/components/ProjectHero.astro';
import FeatureBlock from '@/components/FeatureBlock.astro';
import { AppConfig } from '@/utils/AppConfig';

const title = `GravMagnet | ${AppConfig.title}`;
const description = 'Lead generation and CRM platform for service businesses';
---

<Base head={{ title, description }}>
  <div class="max-w-4xl mx-auto">
    <ProjectHero
      title="GravMagnet"
      tagline="Lead generation and CRM platform for service businesses"
      image="/assets/images/projects/gravmagnet-hero.png"
      techStack={['.NET 8', 'Angular 19', 'MySQL', 'AWS', 'SendGrid', 'OpenAI']}
    />

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-4">The Story</h2>
      <p class="text-gray-200 leading-relaxed mb-4">
        Service businesses like HVAC companies, plumbers, and electricians generate leads
        from dozens of sources — Facebook groups, neighborhood apps, referral networks —
        but most don't have a system for capturing and tracking those leads consistently.
        They end up scattered across text messages, emails, and sticky notes.
      </p>
      <p class="text-gray-200 leading-relaxed mb-4">
        GravMagnet solves this with branded intake forms that each get a unique short link.
        A technician can drop their form link in a Facebook group comment, a neighborhood
        app post, or a text message. When a homeowner fills it out, the lead flows into
        GravMagnet's dashboard with full attribution — which form, which channel, which
        campaign.
      </p>
      <p class="text-gray-200 leading-relaxed">
        The platform includes real-time analytics, CRM synchronization with ServiceTitan,
        and AI-assisted marketing tools. Built as a multi-tenant SaaS with a .NET 8 API
        backend, Angular 19 frontend, and MySQL on AWS RDS.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-6">Features</h2>

      <FeatureBlock
        title="Branded Lead Capture Forms"
        description="Each client gets branded intake forms with unique short links powered by Sqids. Forms are embeddable, shareable, and track attribution automatically — every submission records which form, channel, and campaign generated the lead."
        image="/assets/images/projects/gravmagnet-forms.png"
        imageAlt="GravMagnet branded lead capture form builder"
      />

      <FeatureBlock
        title="Real-Time Analytics Dashboard"
        description="Track impressions, conversions, and abandonment rates across all forms and campaigns. Visualize lead flow with Chart.js, identify top-performing channels, and spot drop-off points in the capture funnel."
        image="/assets/images/projects/gravmagnet-analytics.png"
        imageAlt="GravMagnet analytics dashboard with conversion metrics"
        reverse={true}
      />

      <FeatureBlock
        title="CRM Integration"
        description="Two-way synchronization with ServiceTitan via OAuth 2.0. Leads captured in GravMagnet automatically create customer records and jobs in ServiceTitan, eliminating double-entry and ensuring nothing falls through the cracks."
        image="/assets/images/projects/gravmagnet-crm.png"
        imageAlt="GravMagnet CRM integration settings"
      />

      <FeatureBlock
        title="Service Area Management"
        description="Define and visualize service areas using Google Places API. Forms automatically validate that incoming leads fall within the client's coverage zone, preventing wasted follow-ups on out-of-area requests."
        image="/assets/images/projects/gravmagnet-areas.png"
        imageAlt="GravMagnet service area map configuration"
        reverse={true}
      />

      <FeatureBlock
        title="AI-Powered Marketing Assist"
        description="Generate compelling call-to-action posts for Facebook groups and neighborhood apps using OpenAI. The system suggests posts tailored to the client's services and target neighborhoods, ready to copy and paste with the intake form link attached."
        image="/assets/images/projects/gravmagnet-ai.png"
        imageAlt="GravMagnet AI-generated marketing post suggestions"
      />
    </section>

    <a class="text-lightpurple font-bold hover:underline" href="/">&larr; Back to Portfolio</a>
  </div>
</Base>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/gravmagnet.astro
git commit -m "feat: add GravMagnet project detail page"
```

---

### Task 6: StarStuff Photos Detail Page

**Files:**
- Create: `src/pages/projects/starstuff-photos.astro`

**Context:** StarStuff Photos (starstuffphotos.com) is a photography portfolio + print store + CMS for photographer Adam Balbi. Next.js 16, Prisma, PostgreSQL (Supabase), Stripe, Backblaze B2 + CloudFront CDN, AWS Cognito, Amplify. Has a public storefront and a full admin CMS backend.

- [ ] **Step 1: Create starstuff-photos.astro**

Create `src/pages/projects/starstuff-photos.astro`:

```astro
---
import Base from '@/templates/Base.astro';
import ProjectHero from '@/components/ProjectHero.astro';
import FeatureBlock from '@/components/FeatureBlock.astro';
import { AppConfig } from '@/utils/AppConfig';

const title = `StarStuff Photos | ${AppConfig.title}`;
const description = 'Photography portfolio and fine art print store';
---

<Base head={{ title, description }}>
  <div class="max-w-4xl mx-auto">
    <ProjectHero
      title="StarStuff Photos"
      tagline="Photography portfolio and fine art print store"
      image="/assets/images/projects/starstuff-hero.png"
      techStack={['Next.js', 'React 19', 'Prisma', 'Stripe', 'CloudFront', 'AWS']}
      liveUrl="https://starstuffphotos.com"
    />

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-4">The Story</h2>
      <p class="text-gray-200 leading-relaxed mb-4">
        Photographer Adam Balbi needed more than a gallery site — he needed a platform
        where visitors could browse his landscape, astrophotography, and nature work,
        then seamlessly order fine art prints in various sizes and finishes. And he needed
        to manage it all himself without touching code.
      </p>
      <p class="text-gray-200 leading-relaxed mb-4">
        StarStuff Photos delivers both sides: a polished public storefront with gallery
        browsing, lightbox viewing, and Stripe-powered print ordering, plus a full admin
        CMS where Adam manages galleries, products, orders, and site content. The image
        pipeline automatically generates optimized variants (JPEG, WebP, AVIF) via a
        Lambda function and serves them through CloudFront CDN.
      </p>
      <p class="text-gray-200 leading-relaxed">
        Built with Next.js App Router, Prisma on PostgreSQL (Supabase), and deployed on
        AWS Amplify. Authentication is handled by Cognito with admin group-based access control.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-6">Features</h2>

      <FeatureBlock
        title="Gallery and Lightbox"
        description="Visitors browse photos organized by gallery with a responsive masonry-style layout. Clicking a photo opens a full-screen lightbox with high-resolution viewing, navigation between images, and direct links to order prints."
        image="/assets/images/projects/starstuff-gallery.png"
        imageAlt="StarStuff Photos gallery with lightbox viewing"
      />

      <FeatureBlock
        title="Print Ordering with Stripe"
        description="Customers select print size, finish, and framing options, add to cart (persisted via cookies), and check out through Stripe. Order confirmation emails go out automatically, and order status is tracked through the admin dashboard."
        image="/assets/images/projects/starstuff-checkout.png"
        imageAlt="StarStuff Photos print ordering and checkout flow"
        reverse={true}
      />

      <FeatureBlock
        title="Admin CMS"
        description="A full content management system where the photographer manages galleries, uploads photos, configures products and pricing, tracks orders, and edits site content (homepage, about page, contact info) — all without touching code."
        image="/assets/images/projects/starstuff-admin.png"
        imageAlt="StarStuff Photos admin CMS dashboard"
      />

      <FeatureBlock
        title="Image Processing Pipeline"
        description="When a photo is uploaded, it's stored in Backblaze B2. A Lambda function generates optimized variants in JPEG, WebP, and AVIF at multiple sizes. CloudFront CDN serves the best format based on the visitor's browser, keeping load times fast."
        image="/assets/images/projects/starstuff-pipeline.png"
        imageAlt="StarStuff Photos image processing architecture"
        reverse={true}
      />
    </section>

    <a class="text-lightpurple font-bold hover:underline" href="/">&larr; Back to Portfolio</a>
  </div>
</Base>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/starstuff-photos.astro
git commit -m "feat: add StarStuff Photos project detail page"
```

---

### Task 7: IKIM MIT Detail Page

**Files:**
- Create: `src/pages/projects/ikim-mit.astro`

**Context:** IKIM (ikim.mit.edu) — custom WordPress theme and gated content plugin for MIT's Initiative for Knowledge and Innovation in Manufacturing. Features: custom Gutenberg blocks (Hero, Content Grid, Icon Columns), two-tier gated content (Tier B: email-based 24hr tokens, Tier C: WordPress user accounts), AWS S3 integration with presigned URLs, newsletter management.

- [ ] **Step 1: Create ikim-mit.astro**

Create `src/pages/projects/ikim-mit.astro`:

```astro
---
import Base from '@/templates/Base.astro';
import ProjectHero from '@/components/ProjectHero.astro';
import FeatureBlock from '@/components/FeatureBlock.astro';
import { AppConfig } from '@/utils/AppConfig';

const title = `IKIM MIT | ${AppConfig.title}`;
const description = 'Custom WordPress platform for MIT manufacturing research initiative';
---

<Base head={{ title, description }}>
  <div class="max-w-4xl mx-auto">
    <ProjectHero
      title="IKIM MIT"
      tagline="Custom WordPress platform for MIT's manufacturing research initiative"
      image="/assets/images/projects/ikim-hero.png"
      techStack={['WordPress', 'PHP', 'Gutenberg', 'AWS S3', 'JavaScript']}
      liveUrl="https://ikim.mit.edu"
    />

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-4">The Story</h2>
      <p class="text-gray-200 leading-relaxed mb-4">
        MIT's Initiative for Knowledge and Innovation in Manufacturing (IKIM) brings
        together researchers, industry partners, and students working on the future of
        U.S. manufacturing. They needed a modern website that could serve multiple audiences —
        public-facing content about their programs, gated resources for consortium members,
        and newsletter distribution to keep stakeholders informed.
      </p>
      <p class="text-gray-200 leading-relaxed mb-4">
        I built a custom WordPress theme with a modern design and custom Gutenberg blocks
        that let the IKIM team create visually rich pages without developer involvement.
        Alongside the theme, I developed a gated content plugin that supports two-tier
        access control — email-based temporary tokens for casual access and full WordPress
        accounts for consortium members.
      </p>
      <p class="text-gray-200 leading-relaxed">
        Sensitive documents are stored in AWS S3 and delivered via time-limited presigned
        URLs, ensuring that gated files can't be shared via direct link. The platform also
        includes newsletter management and comprehensive security hardening.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-bold text-lightpurple mb-6">Features</h2>

      <FeatureBlock
        title="Custom Gutenberg Blocks"
        description="Three purpose-built blocks — Hero, Content Grid, and Icon Columns — let the IKIM team create visually consistent, on-brand pages directly in the WordPress editor. No custom code needed for new pages."
        image="/assets/images/projects/ikim-blocks.png"
        imageAlt="IKIM custom Gutenberg block editor"
      />

      <FeatureBlock
        title="Two-Tier Gated Content"
        description="Tier B access uses email-based 24-hour tokens — visitors request access, receive a magic link, and can view gated content for a day. Tier C requires a full WordPress account for ongoing access to consortium resources. Content and individual files can each be assigned their own access tier."
        image="/assets/images/projects/ikim-gated.png"
        imageAlt="IKIM gated content access management"
        reverse={true}
      />

      <FeatureBlock
        title="Secure File Delivery via S3"
        description="Documents are stored in AWS S3 rather than on the WordPress server. When an authorized user requests a file, the plugin generates a time-limited presigned URL. Files can't be bookmarked or shared via direct link — access is always validated."
        image="/assets/images/projects/ikim-files.png"
        imageAlt="IKIM secure file download with S3 presigned URLs"
      />

      <FeatureBlock
        title="Newsletter Management"
        description="Built-in newsletter subscription and distribution system integrated with the WordPress admin. The IKIM team manages subscriber lists and sends updates about programs, events, and research directly from their WordPress dashboard."
        image="/assets/images/projects/ikim-newsletter.png"
        imageAlt="IKIM newsletter management interface"
        reverse={true}
      />
    </section>

    <a class="text-lightpurple font-bold hover:underline" href="/">&larr; Back to Portfolio</a>
  </div>
</Base>
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/ikim-mit.astro
git commit -m "feat: add IKIM MIT project detail page"
```

---

### Task 8: Cleanup — Remove Old Pages, Assets, and Dependencies

**Files:**
- Delete: `src/pages/projects/5squares.astro`
- Delete: `src/pages/projects/nai-landing-pages.astro`
- Delete: `public/assets/images/projects/5sq.png`
- Delete: `public/assets/images/projects/NAILanding.png`
- Delete: `public/assets/images/projects/ethernet.png`
- Delete: `public/assets/images/projects/vpx.png`
- Delete: `public/assets/images/projects/youarehere.webp`
- Delete: `public/assets/videos/Recipes.mp4`
- Delete: `public/assets/videos/CustomerInfo.mp4`
- Modify: `src/templates/Base.astro`

- [ ] **Step 1: Delete old project pages**

```bash
rm src/pages/projects/5squares.astro src/pages/projects/nai-landing-pages.astro
```

- [ ] **Step 2: Delete old project images and videos**

```bash
rm public/assets/images/projects/5sq.png
rm public/assets/images/projects/NAILanding.png
rm public/assets/images/projects/ethernet.png
rm public/assets/images/projects/vpx.png
rm public/assets/images/projects/youarehere.webp
rm -rf public/assets/videos
```

- [ ] **Step 3: Remove slick carousel CSS imports from Base.astro**

In `src/templates/Base.astro`, remove these two lines from the `<head>`:

```html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
```

- [ ] **Step 4: Remove unused carousel dependencies**

```bash
npm uninstall react-alice-carousel react-slick
```

Note: `@types/react-slick` is a devDependency — remove it too:

```bash
npm uninstall @types/react-slick
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no warnings about missing imports.

- [ ] **Step 6: Commit**

```bash
git rm src/pages/projects/5squares.astro src/pages/projects/nai-landing-pages.astro
git rm public/assets/images/projects/5sq.png public/assets/images/projects/NAILanding.png public/assets/images/projects/ethernet.png public/assets/images/projects/vpx.png public/assets/images/projects/youarehere.webp
git rm -r public/assets/videos
git add src/templates/Base.astro package.json package-lock.json
git commit -m "chore: remove old project pages, unused assets, and carousel dependencies"
```

---

### Task 9: Update Hero and Privacy Cleanup

**Files:**
- Modify: `src/partials/Hero.tsx`

- [ ] **Step 1: Update years of experience in Hero.tsx**

In `src/partials/Hero.tsx`, change the experience description. The current text says "8 years of experience" — Lauren has been working since ~2016, so in 2026 it's approximately 10 years. Update the line:

Old:
```tsx
          <span className="font-semibold text-white">
            full-stack software engineer{' '}
          </span>
          with 8 years of experience.
```

New:
```tsx
          <span className="font-semibold text-white">
            full-stack software engineer{' '}
          </span>
          with 10 years of experience.
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/partials/Hero.tsx
git commit -m "fix: update years of experience"
```

- [ ] **Step 4: Resume privacy — manual step**

Lauren: update `public/assets/docs/LaurenPrete_Resume2025.pdf` to remove your street address and phone number. Keep name, LinkedIn URL, email, and location (city/state is fine). Replace the file in the same location.

---

### Task 10: Final Build Verification

- [ ] **Step 1: Full clean build**

```bash
npm run clean && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 2: Visual verification**

```bash
npm run dev
```

Open `http://localhost:4321/` in a browser and verify:

1. Hero section renders correctly (photo, bio, skills, updated years)
2. Project grid shows 5 cards with gradient overlays, taglines, tech badges, and category labels
3. Each card links to its detail page
4. Each detail page renders: hero banner, story section, alternating feature blocks, back link
5. Old project pages (`/projects/5squares/`, `/projects/nai-landing-pages/`) return 404
6. No console errors

- [ ] **Step 3: Note image placeholders**

The following images need to be provided by Lauren and placed in `public/assets/images/projects/`:

**GorgonExplorer:**
- `gorgon-hero.png` — main screenshot for card and hero banner
- `gorgon-data-tables.png` — data tables with search/filter
- `gorgon-charts.png` — Recharts data visualization
- `gorgon-architecture.png` — architecture diagram (can be a simple diagram)
- `gorgon-mobile.png` — mobile/responsive view

**Leagues Advisor:**
- `leagues-hero.png` — main screenshot for card and hero banner
- `leagues-plugin.png` — RuneLite plugin panel screenshot
- `leagues-tasks.png` — task planning interface
- `leagues-dashboard.png` — progress dashboard
- `leagues-collection.png` — collection log tracking

**GravMagnet:**
- `gravmagnet-hero.png` — main screenshot for card and hero banner
- `gravmagnet-forms.png` — lead capture form builder
- `gravmagnet-analytics.png` — analytics dashboard
- `gravmagnet-crm.png` — CRM integration settings
- `gravmagnet-areas.png` — service area map
- `gravmagnet-ai.png` — AI marketing post suggestions

**StarStuff Photos:**
- `starstuff-hero.png` — main screenshot for card and hero banner
- `starstuff-gallery.png` — gallery with lightbox
- `starstuff-checkout.png` — print ordering/checkout
- `starstuff-admin.png` — admin CMS dashboard
- `starstuff-pipeline.png` — image pipeline diagram (can be a simple diagram)

**IKIM MIT:**
- `ikim-hero.png` — main screenshot for card and hero banner
- `ikim-blocks.png` — Gutenberg block editor
- `ikim-gated.png` — gated content management
- `ikim-files.png` — file download/S3 integration
- `ikim-newsletter.png` — newsletter management
