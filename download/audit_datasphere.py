# -*- coding: utf-8 -*-
import os, sys, hashlib
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, CondPageBreak, HRFlowable, Image
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ── Font Registration ──
pdfmetrics.registerFont(TTFont('Microsoft YaHei', '/usr/share/fonts/truetype/chinese/msyh.ttf'))
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', '/usr/share/fonts/truetype/english/calibri-regular.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))

registerFontFamily('Microsoft YaHei', normal='Microsoft YaHei', bold='Microsoft YaHei')
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri')
registerFontFamily('DejaVuSans', normal='DejaVuSans', bold='DejaVuSans')

# ── Color Palette ──
ACCENT       = colors.HexColor('#c7233e')
TEXT_PRIMARY  = colors.HexColor('#212324')
TEXT_MUTED    = colors.HexColor('#767f83')
BG_SURFACE   = colors.HexColor('#dee3e5')
BG_PAGE      = colors.HexColor('#ebedee')
TABLE_HEADER_COLOR = ACCENT
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = BG_SURFACE

# ── Styles ──
body_font = 'Times New Roman'
heading_font = 'Times New Roman'

styles = getSampleStyleSheet()

h1_style = ParagraphStyle(
    name='H1Custom', fontName=heading_font, fontSize=20, leading=28,
    textColor=ACCENT, spaceBefore=18, spaceAfter=12, alignment=TA_LEFT
)
h2_style = ParagraphStyle(
    name='H2Custom', fontName=heading_font, fontSize=16, leading=22,
    textColor=TEXT_PRIMARY, spaceBefore=14, spaceAfter=8, alignment=TA_LEFT
)
h3_style = ParagraphStyle(
    name='H3Custom', fontName=heading_font, fontSize=13, leading=18,
    textColor=TEXT_PRIMARY, spaceBefore=10, spaceAfter=6, alignment=TA_LEFT
)
body_style = ParagraphStyle(
    name='BodyCustom', fontName=body_font, fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=2, spaceAfter=6, alignment=TA_JUSTIFY
)
body_left = ParagraphStyle(
    name='BodyLeft', fontName=body_font, fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=2, spaceAfter=4, alignment=TA_LEFT
)
bullet_style = ParagraphStyle(
    name='BulletCustom', fontName=body_font, fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=2, spaceAfter=4, leftIndent=20,
    bulletIndent=8, alignment=TA_LEFT
)
muted_style = ParagraphStyle(
    name='MutedCustom', fontName=body_font, fontSize=9.5, leading=14,
    textColor=TEXT_MUTED, spaceBefore=2, spaceAfter=4, alignment=TA_LEFT
)
callout_style = ParagraphStyle(
    name='CalloutCustom', fontName=body_font, fontSize=11, leading=17,
    textColor=ACCENT, spaceBefore=6, spaceAfter=6, leftIndent=24,
    borderPadding=8, borderColor=ACCENT, borderWidth=0, alignment=TA_LEFT
)
header_cell_style = ParagraphStyle(
    name='HeaderCell', fontName=heading_font, fontSize=10, leading=14,
    textColor=TABLE_HEADER_TEXT, alignment=TA_CENTER
)
cell_style = ParagraphStyle(
    name='CellStyle', fontName=body_font, fontSize=9.5, leading=14,
    textColor=TEXT_PRIMARY, alignment=TA_LEFT
)
cell_center = ParagraphStyle(
    name='CellCenter', fontName=body_font, fontSize=9.5, leading=14,
    textColor=TEXT_PRIMARY, alignment=TA_CENTER
)
toc_h1 = ParagraphStyle(name='TOCH1', fontName=heading_font, fontSize=13, leftIndent=20, leading=22, textColor=TEXT_PRIMARY)
toc_h2 = ParagraphStyle(name='TOCH2', fontName=body_font, fontSize=11, leftIndent=40, leading=18, textColor=TEXT_MUTED)

# ── TOC Doc Template ──
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

def add_heading(text, style, level=0):
    key = 'h_%s' % hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/>%s' % (key, text), style)
    p.bookmark_name = text
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p

def make_table(headers, rows, col_ratios=None):
    page_width = A4[0]
    left_margin = 1.0 * inch
    right_margin = 1.0 * inch
    available_width = page_width - left_margin - right_margin

    data = [[Paragraph('<b>%s</b>' % h, header_cell_style) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), cell_style) for c in row])

    if col_ratios:
        col_widths = [r * available_width for r in col_ratios]
    else:
        col_widths = None

    t = Table(data, colWidths=col_widths, hAlign='CENTER')
    style_commands = [
        ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, TEXT_MUTED),
    ]
    for i in range(1, len(data)):
        bg = TABLE_ROW_EVEN if i % 2 == 1 else TABLE_ROW_ODD
        style_commands.append(('BACKGROUND', (0, i), (-1, i), bg))
    t.setStyle(TableStyle(style_commands))
    return t

def make_score_table(items):
    """items = [(label, score, comment)]"""
    headers = ['Critere', 'Note /10', 'Commentaire']
    rows = [[l, s, c] for l, s, c in items]
    return make_table(headers, rows, [0.25, 0.12, 0.63])

# ── Build Document ──
output_path = '/home/z/my-project/download/audit_datasphere_innovation.pdf'
doc = TocDocTemplate(
    output_path, pagesize=A4,
    leftMargin=1*inch, rightMargin=1*inch,
    topMargin=0.8*inch, bottomMargin=0.8*inch
)

story = []

# ── TOC ──
toc = TableOfContents()
toc.levelStyles = [toc_h1, toc_h2]
story.append(Paragraph('<b>Table des matieres</b>', ParagraphStyle(
    name='TOCTitle', fontName=heading_font, fontSize=22, leading=30,
    textColor=ACCENT, spaceBefore=20, spaceAfter=20, alignment=TA_LEFT
)))
story.append(toc)
story.append(PageBreak())

# ══════════════════════════════════════════════════════════════
# SECTION 1: SYNTHESE EXECUTIVE
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>1. Synthese executive</b>', h1_style, 0))

story.append(Paragraph(
    'DataSphere Innovation est un site vitrine pour un cabinet de conseil specialise en data, intelligence artificielle et transformation digitale. '
    'Le projet est construit avec un stack moderne (Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui), deploye sur Netlify avec Supabase comme backend-as-a-service. '
    'Le site presente les services du cabinet, des temoignages clients, une section partenaires technologiques, un formulaire de contact fonctionnel avec conservation RGPD, '
    'ainsi qu\'un back-office d\'administration pour la gestion des leads et de la newsletter.', body_style))

story.append(Paragraph(
    'L\'audit revele un projet avec de solides fondations techniques et une identite visuelle coherente, mais qui presente des lacunes significatives '
    'en termes de performance, d\'accessibilite, de securite, de tests, de SEO avance et de fonctionnalites differentiantes par rapport aux concurrents du marche. '
    'Le site est fonctionnel mais manque de profondeur pour etre percu comme un acteur professionnel de premier plan. '
    'Les recommandations ci-dessous visent a transformer ce projet d\'un site vitrine correct en une plateforme professionnelle competitive et differentiante.', body_style))

# Score summary table
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Scores globaux par domaine</b>', h3_style))
scores = [
    ['Architecture et code', '6.5', 'Fondations solides mais patterns a ameliorer (duplication, absence de state management)'],
    ['Design et UX', '7.5', 'Identite visuelle coherente et moderne, animations fluides'],
    ['Performance', '5.0', 'Pas de SSR/SSG, bundle size elevee, pas d\'optimisation images'],
    ['SEO', '6.0', 'Bases presentes (meta, sitemap, schema.org) mais routing SPA limitant'],
    ['Accessibilite', '4.5', 'Contrastes insuffisants, navigation clavier incomplete, pas de skip links'],
    ['Securite', '5.5', 'RLS Supabase correcte mais validation client-only, pas de rate limiting'],
    ['Tests', '2.0', 'Test unitaire unique et trivial, aucun test E2E, integration ou composant'],
    ['DevOps / CI-CD', '3.0', 'Pas de pipeline CI/CD, pas de linting automatise, pas de pre-commit hooks'],
    ['Fonctionnalites', '5.5', 'Site vitrine fonctionnel mais pas de blog, casier etudes, demo, chatbot'],
]
story.append(make_table(['Domaine', 'Note /10', 'Commentaire'], scores, [0.22, 0.10, 0.68]))
story.append(Spacer(1, 12))

# ══════════════════════════════════════════════════════════════
# SECTION 2: ANALYSE TECHNIQUE
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>2. Analyse technique detaillee</b>', h1_style, 0))

# 2.1 Stack technique
story.append(add_heading('<b>2.1 Stack technique et dependances</b>', h2_style, 1))
story.append(Paragraph(
    'Le projet utilise Vite 5 comme bundler avec le plugin React SWC pour une compilation rapide, React 18.3 avec TypeScript 5.8, '
    'Tailwind CSS 3.4 avec le plugin tailwindcss-animate, et shadcn/ui comme bibliotheque de composants basee sur Radix UI. '
    'Le routing est assure par react-router-dom v6, les animations par framer-motion v11, et le backend par Supabase via son SDK JS v2.101. '
    'La gestion des formulaires repose sur react-hook-form avec zod pour la validation, et react-query (TanStack Query v5) pour le data fetching.', body_style))

story.append(Paragraph('<b>Points forts du stack :</b>', h3_style))
story.append(Paragraph('- Vite + SWC offre des temps de build et de HMR tres rapides, ce qui ameliore significativement la productivite des developpeurs.', bullet_style))
story.append(Paragraph('- shadcn/ui + Radix UI garantit des composants accessibles par defaut et personnalisation complete via Tailwind.', bullet_style))
story.append(Paragraph('- Supabase elimine le besoin d\'un backend custom pour les fonctionnalites actuelles (auth, DB temps reel, storage).', bullet_style))
story.append(Paragraph('- react-query fournit un cache, du refetch automatique et une gestion des etats de loading/error robuste.', bullet_style))

story.append(Paragraph('<b>Problemes identifies :</b>', h3_style))
story.append(Paragraph('- <b>Surcharge de dependances Radix UI</b> : 27 packages Radix individuels installes alors que seuls 6-8 sont reellement utilises dans les composants metier. Les autres sont des residus de l\'initialisation shadcn/ui qui alourdissent inutilement le bundle (estimation : +150 KB gzipped).', bullet_style))
story.append(Paragraph('- <b>next-themes installe mais inutilise</b> : Le projet gere le theme manuellement dans Navbar.tsx avec localStorage, rendant ce package redondant.', bullet_style))
story.append(Paragraph('- <b>react-day-picker + date-fns</b> : Installes mais aucun composant de calendrier ou de selection de date n\'est present dans l\'application.', bullet_style))
story.append(Paragraph('- <b>recharts installe mais inutilise</b> : Aucun graphique n\'est actuellement implemente dans le site vitrine ou le dashboard admin.', bullet_style))
story.append(Paragraph('- <b>Version React 18 au lieu de React 19</b> : React 19 apporte les Server Components, le compilateur React et des ameliorations de performance significatives.', bullet_style))
story.append(Paragraph('- <b>react-router-dom v6</b> : La v7 est disponible avec un support natif du data loading, des loaders et des actions qui remplaceraient react-query pour le routing.', bullet_style))

# 2.2 Architecture
story.append(add_heading('<b>2.2 Architecture et organisation du code</b>', h2_style, 1))
story.append(Paragraph(
    'L\'architecture suit un pattern component-based classique pour un SPA React. Les fichiers sont organises en dossiers fonctionnels '
    '(components, pages, hooks, integrations, assets, lib). Les pages de services utilisent un pattern data-driven via le composant ServicePage '
    'qui recoit un objet de configuration, evitant ainsi la duplication de layout. Le lazy loading est applique sur les sections below-the-fold de la page d\'accueil, '
    'ce qui est une bonne pratique pour le chargement initial.', body_style))

story.append(Paragraph('<b>Problemes architecturaux :</b>', h3_style))
story.append(Paragraph('- <b>Absence de state management global</b> : Pas de store (Zustand, Jotai, ou meme Context API) pour gerer l\'etat de l\'authentification admin. '
    'Chaque page admin (AdminDashboard, AdminNewsletter) verifie independamment l\'auth avec useEffect, creant de la duplication et des race conditions potentielles.', bullet_style))
story.append(Paragraph('- <b>Validation cote client uniquement</b> : Le formulaire de contact valide les donnees en JavaScript mais n\'utilise pas react-hook-form + zod '
    'malgre ces dependances installees. La validation cote serveur (Supabase) est absente, ce qui signifie qu\'un appel API direct peut inserer des donnees invalides.', bullet_style))
story.append(Paragraph('- <b>Pas de couche service/abstraction</b> : Les appels Supabase sont directement dans les composants UI. Un couche service (api/contact.ts, api/newsletter.ts) '
    'separerait les preoccupations et faciliterait les tests et les changements de backend.', bullet_style))
story.append(Paragraph('- <b>Composants UI non utilises</b> : 35+ composants shadcn/ui installes mais jamais importes dans le code metier, '
    'augmentant la surface de maintenance et la confusion pour les developpeurs.', bullet_style))
story.append(Paragraph('- <b>Duplication de logique d\'authentification</b> : La verification admin (checkAuth) est copiee-collee dans AdminDashboard et AdminNewsletter. '
    'Un hook useAdminAuth() ou un ProtectedRoute component eliminait cette duplication.', bullet_style))
story.append(Paragraph('- <b>Absence de gestion d\'erreurs globale</b> : Pas de Error Boundary React ni de page d\'erreur 500 personnalisee. Une erreur dans un composant '
    'peut casser toute l\'application sans feedback utilisateur.', bullet_style))

# 2.3 Performance
story.append(add_heading('<b>2.3 Performance et optimisation</b>', h2_style, 1))
story.append(Paragraph(
    'La performance est le point faible majeur du projet. Le site est un SPA (Single Page Application) pur, ce qui signifie que le contenu '
    'est genere entierement cote client. Pour un site vitrine a vocation SEO et commerciale, c\'est un choix technique qui penalise fortement '
    'le referencement et le temps de premier rendu perceptible (FCP - First Contentful Paint).', body_style))

story.append(Paragraph('<b>Problemes de performance identifies :</b>', h3_style))
story.append(Paragraph('- <b>Pas de Server-Side Rendering (SSR) ou Static Site Generation (SSG)</b> : Le HTML initial est vide (un div#root), '
    'tout le contenu est genere par JavaScript. Les moteurs de recherche comme Google peuvent indexer le JS mais avec des delais et des limitations. '
    'Bing, DuckDuckGo et les reseaux sociaux (previsualisation de liens) ne pourront pas indexer correctement le contenu.', bullet_style))
story.append(Paragraph('- <b>Bundle size elevee</b> : framer-motion (+30 KB gzip), 27 packages Radix UI, recharts, react-day-picker, date-fns, '
    'et de nombreux composants shadcn non utilises gonflent le bundle. Estimation du JS total : >400 KB gzip, alors qu\'un site vitrine '
    'devrait viser <150 KB gzip pour le JS initial.', bullet_style))
story.append(Paragraph('- <b>Images non optimisees</b> : Les images de service (service-*.jpg) et le hero-bg.jpg sont servies en JPEG classique '
    'sans format WebP/AVIF, sans srcset pour le responsive, et sans lazy loading natif via loading="lazy" sur les images above-the-fold du hero. '
    'L\'image hero-bg.jpg est laissee sans dimensions natives, causant un CLS (Cumulative Layout Shift).', bullet_style))
story.append(Paragraph('- <b>Pas de code splitting par route</b> : Les pages de services, admin et legales sont importees statiquement dans App.tsx. '
    'React.lazy + Suspense n\'est utilise que pour les sections de la page d\'accueil, pas pour le routing.', bullet_style))
story.append(Paragraph('- <b>Font loading non optimise</b> : Google Fonts (Space Grotesk + Inter) sont chargees via @import dans le CSS, '
    'ce qui bloque le rendu. L\'utilisation de font-display: swap et du prechargement des polices ameliorerait le FCP.', bullet_style))

# 2.4 SEO
story.append(add_heading('<b>2.4 SEO et referencement</b>', h2_style, 1))
story.append(Paragraph(
    'Le SEO de base est correctement implemente avec des balises meta, un sitemap XML, un fichier robots.txt, des donnees structurees JSON-LD '
    '(Organization + LocalBusiness + WebSite), et des balises Open Graph / Twitter Cards. Cependant, le choix du SPA sans SSR limite considerablement '
    'l\'efficacite de ces optimisations.', body_style))

story.append(Paragraph('<b>Ameliorations SEO necessaires :</b>', h3_style))
story.append(Paragraph('- <b>Migrer vers un framework avec SSR</b> : Next.js ou Astro permettraient un rendu cote serveu r, essentiel pour que les '
    'moteurs de recherche indexent correctement les pages de services et le contenu dynamique.', bullet_style))
story.append(Paragraph('- <b>Implementer le dynamic rendering</b> : Si la migration SSR n\'est pas immediate, configurer un pre-rendering via '
    'prerender.io ou Netlify Edge Functions pour servir du HTML statique aux bots.', bullet_style))
story.append(Paragraph('- <b>Ajouter des balises hreflang</b> : Si une version anglaise est prevue, preparer les balises hreflang des maintenant.', bullet_style))
story.append(Paragraph('- <b>Enrichir le schema.org</b> : Ajouter des schemas FAQPage (pour la section FAQ), Service (pour chaque page de service), '
    'et Review (pour les temoignages) pour obtenir des rich snippets dans les resultats Google.', bullet_style))
story.append(Paragraph('- <b>Optimiser les meta descriptions par page</b> : Actuellement, seul le titre change dans le head. Chaque page de service '
    'devrait avoir sa propre meta description et titre optimises SEO.', bullet_style))
story.append(Paragraph('- <b>Generer un sitemap dynamique</b> : Le sitemap actuel est statique. Un sitemap genere automatiquement via next-sitemap '
    'ou un script de build serait plus maintenable.', bullet_style))

# 2.5 Accessibilite
story.append(add_heading('<b>2.5 Accessibilite (a11y)</b>', h2_style, 1))
story.append(Paragraph(
    'L\'accessibilite est un domaine ou le projet presente des lacunes importantes. Malgre l\'utilisation de Radix UI (qui fournit une base accessible), '
    'les choix de design et d\'implementation creent des barrieres significatives pour les utilisateurs de technologies d\'assistance et les personnes '
    'avec des handicaps visuels.', body_style))

story.append(Paragraph('<b>Problemes d\'accessibilite critiques :</b>', h3_style))
story.append(Paragraph('- <b>Contrastes insuffisants</b> : Le texte muted-foreground utilise hsl(228 10% 45%) sur un fond hsl(220 20% 97%), soit un ratio de contraste '
    'd\'environ 3.2:1, bien en dessous du minimum WCAG AA de 4.5:1 pour le texte normal. Cela rend de nombreuses sections du site illisibles '
    'pour les personnes avec une deficience visuelle.', bullet_style))
story.append(Paragraph('- <b>Pas de skip navigation link</b> : Aucun lien "Aller au contenu principal" pour les utilisateurs de clavier, '
    'qui doivent tabuler a travers tous les liens de navigation avant d\'atteindre le contenu.', bullet_style))
story.append(Paragraph('- <b>Navigation clavier incomplete</b> : Les cartes de service et les elements cliquables n\'ont pas toujours d\'indicateur '
    'de focus visible. Le menu mobile ne trappe pas le focus (focus trap).', bullet_style))
story.append(Paragraph('- <b>Images decoratives sans alt vide</b> : L\'image hero-bg.jpg a un alt="" correct, mais les logos de partenaires et clients '
    'manquent de textes alternatifs descriptifs pour les lecteurs d\'ecran.', bullet_style))
story.append(Paragraph('- <b>Formulaire sans labels associes</b> : Le champ de sujet (select) dans le formulaire de contact n\'a pas d\'id '
    'lie au label, ce qui empeche les lecteurs d\'ecran d\'associer correctement le label au controle.', bullet_style))
story.append(Paragraph('- <b>Animations non respectueuses de prefers-reduced-motion</b> : Les animations Framer Motion ne desactivent pas '
    'automatiquement quand l\'utilisateur a active "reduire les animations" dans son systeme.', bullet_style))

# 2.6 Securite
story.append(add_heading('<b>2.6 Securite</b>', h2_style, 1))
story.append(Paragraph(
    'La securite du projet repose principalement sur les Row Level Security (RLS) de Supabase, qui sont correctement configurees avec des politiques '
    'd\'insertion publique et de lecture reservee aux admins. Cependant, plusieurs vulnerabilites et absences de protection sont identifiees.', body_style))

story.append(Paragraph('<b>Vulnerabilites et manques :</b>', h3_style))
story.append(Paragraph('- <b>Absence de rate limiting</b> : Les endpoints d\'insertion (contact_submissions, newsletter_subscribers) sont ouverts '
    'sans aucune limitation de debit. Un attaquant peut spammer le formulaire de contact ou inscrire des milliers d\'emails a la newsletter. '
    'Solution : implementer un rate limiting via Supabase Edge Functions ou Netlify Edge Functions.', bullet_style))
story.append(Paragraph('- <b>Validation cote serveur absente</b> : Aucune contrainte NOT NULL ou CHECK sur les colonnes phone, name (min 2 chars), '
    'message (min 10 chars) dans le schema Supabase. Un appel API direct peut inserer des donnees invalides ou malveillantes. '
    'Solution : ajouter des contraintes SQL et une Edge Function de validation.', bullet_style))
story.append(Paragraph('- <b>Pas de CAPTCHA ou protection anti-bot</b> : Le formulaire de contact et la newsletter sont vulnerables aux bots. '
    'L\'integration de reCAPTCHA v3, hCaptcha ou Cloudflare Turnstile est essentielle.', bullet_style))
story.append(Paragraph('- <b>Pas de sanitisation des inputs</b> : Les champs de texte (name, company, message) sont inseres tels quels dans la base. '
    'Bien que Supabase escape les requetes SQL, le contenu XSS pourrait etre injecte dans le dashboard admin si les donnees sont rendues sans sanitisation.', bullet_style))
story.append(Paragraph('- <b>Cle Supabase publique exposee</b> : La cle VITE_SUPABASE_PUBLISHABLE_KEY est par nature publique (cote client), '
    'mais il est recommande d\'ajouter une verification CORS et de limiter les scopes de la cle anon dans le dashboard Supabase.', bullet_style))
story.append(Paragraph('- <b>Pas de Content Security Policy (CSP)</b> : Aucun header CSP n\'est configure dans Netlify. L\'ajout d\'un CSP '
    'dans netlify.toml ou via les headers HTTP reduirait les risques d\'injection de scripts.', bullet_style))
story.append(Paragraph('- <b>Mentions legales incompletes</b> : Les champs SIRET, TVA, directeur de la publication sont marques "[A completer]". '
    'Pour un site commercial en France, c\'est une obligation legale.', bullet_style))

# ══════════════════════════════════════════════════════════════
# SECTION 3: ANALYSE UX/DESIGN
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>3. Analyse UX et design</b>', h1_style, 0))

story.append(add_heading('<b>3.1 Points forts du design</b>', h2_style, 1))
story.append(Paragraph(
    'L\'identite visuelle de DataSphere Innovation est coherente et moderne. Le choix des polices (Space Grotesk pour les titres, Inter pour le corps) '
    'est excellent et correspond aux standards des startups tech et cabinets de conseil innovants. Le systeme de couleurs base sur le teal/cyan (hsl 190) '
    'comme couleur primaire avec un accent violet (hsl 250) cree une palette distinctive et professionnelle. Les animations Framer Motion sont fluides, '
    'subtiles et ne nuisent pas a la performance percue. Les effets glass-morphism (glass-card), les degradees de texte (gradient-text) et les motifs '
    'de fond (grid-bg, dot-bg) ajoutent de la profondeur visuelle sans surcharger l\'interface.', body_style))

story.append(add_heading('<b>3.2 Problemes UX identifies</b>', h2_style, 1))
story.append(Paragraph('- <b>Temoignages fictifs</b> : Les temoignages utilisent des noms generiques (Marie Laurent, Thomas Berger) et des entreprises '
    'inexistantes (Finova Group, NeoRetail, MedTech Solutions). Pour un cabinet B2B, des temoignages reels (meme anonymises) sont indispensables '
    'pour la credibilite.', bullet_style))
story.append(Paragraph('- <b>Logos clients non verifies</b> : Les logos de grandes entreprises francaises (Airbus, Sanofi, L\'Oreal, etc.) sont affiches '
    'sans mention de partenariat reel. Cela peut constituer une utilisation abusive de marque et un risque juridique. Si ce sont d\'anciens clients '
    'des consultants, une mention "Nos consultants ont accompagne..." est necessaire.', bullet_style))
story.append(Paragraph('- <b>Pas de page equipe</b> : Un cabinet de conseil sans page equipe perd en credibilite. Les prospects veulent connaitre '
    'les experts avec qui ils vont travailler.', bullet_style))
story.append(Paragraph('- <b>Section A propos trop courte</b> : Deux paragraphes seulement pour presenter le cabinet. C\'est insuffisant pour '
    'convaincre un prospect qualifie.', bullet_style))
story.append(Paragraph('- <b>Pas de preuve sociale quantitative</b> : Les statistiques (50+ projets, 98% satisfaction) ne sont pas liees a des '
    'etudes de cas detaillees. Des liens vers des PDF de references ou des pages de cas clients renforceraient la credibilite.', bullet_style))
story.append(Paragraph('- <b>Dashboard admin basique</b> : Le dashboard affiche les leads dans un tableau simple sans fonctionnalites de filtrage, '
    'tri, recherche, export, ou notification en temps reel. Un CRM minimal integrerait ces fonctionnalites.', bullet_style))
story.append(Paragraph('- <b>Pas de live chat ou chatbot</b> : Les prospects B2B attendent une reponse immediate. Un chatbot IA (me me basique) '
    'ou un widget de chat en direct ameliorerait considerablement le taux de conversion.', bullet_style))

# ══════════════════════════════════════════════════════════════
# SECTION 4: ANALYSE CONCURRENTIELLE
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>4. Analyse concurrentielle et differentiation</b>', h1_style, 0))
story.append(Paragraph(
    'Le marche des cabinets de conseil data et IA en France est tres concurrentiel, avec des acteurs comme Dataiku (qui a evolue vers une plateforme), '
    'Squad, Altares Dun & Bradstreet, et de nombreux cabinets independants. Pour se differencier, DataSphere Innovation doit aller au-dela du site vitrine '
    'et proposer une experience digitale qui reflète l\'expertise technique du cabinet.', body_style))

story.append(make_table(
    ['Fonctionnalite', 'DataSphere (actuel)', 'Concurrents typiques', 'Objectif cible'],
    [
        ['Blog / Contenu editorial', 'Absent', 'Present', 'Blog avec CMS + SEO'],
        ['Etudes de cas detaillees', 'Absent', '1-3 cas basiques', 'Cas interactifs avec KPIs'],
        ['Demo live / POC', 'Absent', 'Rare', 'Dashboard demo interactif'],
        ['Chatbot IA', 'Absent', 'Rare', 'Chatbot RAG sur le site'],
        ['Calculateur ROI', 'Absent', 'Rare', 'Outil interactif'],
        ['Page equipe', 'Absent', 'Present', 'Profils detailles + LinkedIn'],
        ['SSR / SEO avance', 'SPA uniquement', 'SSR/SSG', 'Next.js SSG'],
        ['Newsletter avancee', 'Inscription basique', 'Segments + auto', 'Brevo/ConvertKit + sequences'],
        ['Mobile PWA', 'Non', 'Partiel', 'PWA avec offline'],
        ['Analytics avance', 'Absent', 'GA4 basique', 'Plausible + event tracking'],
    ],
    [0.25, 0.22, 0.22, 0.31]
))
story.append(Spacer(1, 12))

# ══════════════════════════════════════════════════════════════
# SECTION 5: RECOMMANDATIONS
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>5. Plan de recommandations priorisees</b>', h1_style, 0))
story.append(Paragraph(
    'Les recommandations sont classees par priorite (P0 = critique, P1 = importante, P2 = desirable) et par horizon temporel. '
    'Chaque recommandation inclut une estimation d\'effort et l\'impact attendu.', body_style))

# P0
story.append(add_heading('<b>5.1 Priorite P0 - Critique (0-2 mois)</b>', h2_style, 1))

story.append(Paragraph('<b>R1 : Migration vers Next.js avec App Router</b>', h3_style))
story.append(Paragraph(
    'C\'est la recommandation la plus impactique. Migrer de Vite SPA vers Next.js 14+ avec l\'App Router permet d\'obtenir le SSR/SSG, '
    'le code splitting automatique par page, l\'optimisation des images via next/image, le routing base sur le systeme de fichiers, '
    'et les Server Components pour reduire le JS client. L\'estimation est de 3-4 semaines pour un developpeur, avec un impact massif '
    'sur le SEO, la performance (LCP ameliore de 3-5x) et l\'experience utilisateur.', body_style))

story.append(Paragraph('<b>R2 : Nettoyage des dependances inutiles</b>', h3_style))
story.append(Paragraph(
    'Supprimer les 27+ composants shadcn/ui non utilises, recharts, react-day-picker, date-fns, next-themes, input-otp, react-resizable-panels, '
    'et autres packages morts. Cela reduira le bundle JS de 30-40% et simplifiera la maintenance. Effort : 2-3 jours. '
    'Commande : identifier les imports inutilises avec depcheck, puis desinstaller les packages orphelins.', body_style))

story.append(Paragraph('<b>R3 : Securisation du formulaire de contact</b>', h3_style))
story.append(Paragraph(
    'Ajouter : (a) un CAPTCHA (Cloudflare Turnstile recommande pour sa discretion), (b) un rate limiting via Supabase Edge Functions, '
    '(c) des contraintes SQL NOT NULL et CHECK sur les colonnes critiques, (d) une validation server-side via Edge Function. '
    'Effort : 3-5 jours. Impact : elimination du risque de spam et d\'injection de donnees invalides.', body_style))

story.append(Paragraph('<b>R4 : Correction des contrastes et accessibilite de base</b>', h3_style))
story.append(Paragraph(
    'Augmenter la luminosite du texte muted-foreground de hsl(228 10% 45%) a hsl(228 10% 55%) minimum pour atteindre le ratio WCAG AA de 4.5:1. '
    'Ajouter un skip-link en debut de page, implementer les focus visibles sur tous les elements interactifs, et ajouter '
    'prefers-reduced-motion dans les animations Framer Motion. Effort : 2-3 jours.', body_style))

# P1
story.append(add_heading('<b>5.2 Priorite P1 - Importante (2-4 mois)</b>', h2_style, 1))

story.append(Paragraph('<b>R5 : Creation d\'un blog avec CMS headless</b>', h3_style))
story.append(Paragraph(
    'Un blog est le canal d\'acquisition organique le plus puissant pour un cabinet de conseil. Utiliser un CMS headless (Sanity, Contentful ou '
    'meme MDX avec Next.js) pour permettre aux consultants de publier sans competence technique. Objectif : 2-4 articles par mois sur '
    'des sujets data/IA/tendances. Effort : 2-3 semaines. Impact : +200-400% de trafic organique en 6-12 mois selon les benchmarks du secteur.', body_style))

story.append(Paragraph('<b>R6 : Pages d\'etudes de cas interactives</b>', h3_style))
story.append(Paragraph(
    'Transformer les 3 cas d\'usage actuels (Retail, Finance, Industrie) en pages dediees avec : problematique detaillee, solution technique '
    'illustree, KPIs avant/apres avec visualisations, temoignage client, et stack technique utilisee. Ajouter des mini-dashboard interactifs '
    '(recharts) montrant les metriques cles. Effort : 2 semaines. Impact : augmentation de la credibilite et du taux de conversion estimée à +25-40%.', body_style))

story.append(Paragraph('<b>R7 : Page equipe et profil des experts</b>', h3_style))
story.append(Paragraph(
    'Creer une page equipe avec photos, bio, expertise, certifications et liens LinkedIn pour chaque consultant. Ajouter un systeme de rendez-vous '
    'en ligne (Calendly embed ou Cal.com) directement sur les profils. Effort : 1 semaine. Impact : humanise le cabinet et facilite la prise de contact.', body_style))

story.append(Paragraph('<b>R8 : Dashboard admin enrichi</b>', h3_style))
story.append(Paragraph(
    'Transformer le dashboard admin basique en un mini-CRM avec : filtrage et tri des leads, tags et statuts (nouveau, contacte, qualifie, converti), '
    'notifications en temps reel via Supabase Realtime, export CSV/PDF ameliore, graphiques de tendance (recharts), et integration email '
    '(Resend ou Brevo) pour repondre directement depuis le dashboard. Effort : 3 semaines.', body_style))

story.append(Paragraph('<b>R9 : Optimisation des images et des performances</b>', h3_style))
story.append(Paragraph(
    'Convertir toutes les images en WebP/AVIF avec fallback JPEG. Implementer next/image pour le lazy loading automatique, le redimensionnement '
    'responsive et les placeholder blur. Ajouter un Service Worker pour la mise en cache des assets statiques. Objectif : LCP < 2.5s, '
    'FID < 100ms, CLS < 0.1 (seuils Core Web Vitals "Good"). Effort : 1 semaine.', body_style))

# P2
story.append(add_heading('<b>5.3 Priorite P2 - Desireable (4-8 mois)</b>', h2_style, 1))

story.append(Paragraph('<b>R10 : Chatbot IA conversationnel</b>', h3_style))
story.append(Paragraph(
    'Integrer un chatbot IA base sur un modele RAG (Retrieval Augmented Generation) entraine sur le contenu du site, les services et les cas d\'usage. '
    'Le chatbot peut qualifier les leads en posant des questions sur leurs besoins et proposer une mise en relation avec un expert. '
    'Technologie : OpenAI API + embeddings + Supabase pgvector. Effort : 3-4 semaines.', body_style))

story.append(Paragraph('<b>R11 : Calculateur ROI interactif</b>', h3_style))
story.append(Paragraph(
    'Creer un outil interactif permettant aux prospects d\'estimer le ROI d\'un projet data/IA en fonction de leur secteur, taille d\'entreprise '
    'et objectifs. Basé sur les metriques des cas d\'usage existants, cet outil genere un rapport personnalise et capture les coordonnees du prospect. '
    'C\'est un outil de lead generation puissant et differentiateur. Effort : 2-3 semaines.', body_style))

story.append(Paragraph('<b>R12 : PWA et experience mobile avancee</b>', h3_style))
story.append(Paragraph(
    'Convertir le site en Progressive Web App avec : manifest.json, Service Worker pour le mode offline, notifications push pour la newsletter, '
    'et installation sur l\'ecran d\'accueil. Ajouter des animations de scroll avancees et des micro-interactions tactiles. Effort : 2 semaines.', body_style))

story.append(Paragraph('<b>R13 : Internationalisation (i18n)</b>', h3_style))
story.append(Paragraph(
    'Preparer le site pour une version anglaise avec next-intl ou react-i18next. Les cabinet de conseil data francais qui s\'exportent '
    'internationalement ont un avantage concurrentiel significatif. Effort : 1 semaine pour la structure, 2 semaines pour la traduction.', body_style))

story.append(Paragraph('<b>R14 : Analytics et tracking avance</b>', h3_style))
story.append(Paragraph(
    'Integrer Plausible Analytics (respectueux de la vie privee, conforme RGPD sans consentement requis) avec un suivi d\'evenements personnalise : '
    'clics sur CTA, soumissions de formulaire, temps passe par section, scroll depth. Ajouter un tracking de conversion pour mesurer '
    'l\'efficacite du funnel marketing. Effort : 3-5 jours.', body_style))

story.append(Paragraph('<b>R15 : CI/CD et automatisation DevOps</b>', h3_style))
story.append(Paragraph(
    'Mettre en place : (a) GitHub Actions pour le lint, les tests et le deploiement automatique, (b) pre-commit hooks avec lint-staged et husky, '
    '(c) Lighthouse CI pour surveiller les Core Web Vitals a chaque PR, (d) Dependabot ou Renovate pour les mises a jour de securite, '
    '(e) un environnement de preview par PR sur Netlify. Effort : 1 semaine.', body_style))

# ══════════════════════════════════════════════════════════════
# SECTION 6: FEUILLE DE ROUTE
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>6. Feuille de route proposee</b>', h1_style, 0))

story.append(make_table(
    ['Phase', 'Periode', 'Recommandations', 'Effort total'],
    [
        ['Phase 1 - Fondations', 'Mois 1-2', 'R1 (Next.js), R2 (dependances), R3 (securite), R4 (a11y)', '6-8 semaines'],
        ['Phase 2 - Contenu', 'Mois 2-4', 'R5 (blog), R6 (cas clients), R7 (equipe), R9 (perf)', '5-7 semaines'],
        ['Phase 3 - Differentiation', 'Mois 4-8', 'R8 (CRM), R10 (chatbot), R11 (calculateur), R14 (analytics)', '7-10 semaines'],
        ['Phase 4 - Scale', 'Mois 8-12', 'R12 (PWA), R13 (i18n), R15 (DevOps)', '4-5 semaines'],
    ],
    [0.15, 0.15, 0.50, 0.20]
))
story.append(Spacer(1, 12))

story.append(Paragraph(
    'L\'investissement total estime est de 22-30 semaines de developpement, reparti sur 12 mois. '
    'Le retour sur investissement est attendu des la Phase 2 avec l\'augmentation du trafic organique (blog + SEO), '
    'et s\'accelere en Phase 3 avec les outils de lead generation (chatbot, calculateur ROI) qui augmentent le taux de conversion. '
    'A moyen terme, ces investissements transforment le site d\'une simple vitrine en un moteur d\'acquisition et de qualification automatique.', body_style))

# ══════════════════════════════════════════════════════════════
# SECTION 7: TESTS
# ══════════════════════════════════════════════════════════════
story.append(add_heading('<b>7. Strategie de tests recommandee</b>', h1_style, 0))
story.append(Paragraph(
    'L\'etat actuel des tests est critique : un seul test unitaire trivial (expect(true).toBe(true)). Voici une strategie de tests '
    'completee a implementer progressivement.', body_style))

story.append(make_table(
    ['Type de test', 'Outil', 'Couverture cible', 'Priorite'],
    [
        ['Tests unitaires (composants)', 'Vitest + Testing Library', '80% des composants metier', 'P0'],
        ['Tests d\'integration (API)', 'Vitest + MSW', '100% des appels Supabase', 'P1'],
        ['Tests E2E (parcours critiques)', 'Playwright', 'Parcours contact + admin', 'P1'],
        ['Tests d\'accessibilite', 'axe-core + jest-axe', '0 violation WCAG AA', 'P1'],
        ['Tests visuels (regression)', 'Playwright screenshots', 'Pages cles', 'P2'],
        ['Tests de performance', 'Lighthouse CI', 'Score > 90', 'P2'],
    ],
    [0.30, 0.25, 0.30, 0.15]
))
story.append(Spacer(1, 12))

# Build
doc.multiBuild(story)
print(f"PDF generated: {output_path}")
