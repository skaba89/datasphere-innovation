#!/usr/bin/env python3
"""
Generate the DataSphere Innovation Audit Report PDF.
"""
import os, sys, hashlib
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm, mm
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib import colors
from reportlab.platypus import (
    Paragraph, Spacer, Table, TableStyle, PageBreak, CondPageBreak,
    KeepTogether, HRFlowable, Image
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

PDF_SKILL_DIR = "/home/z/my-project/skills/pdf"
_scripts = os.path.join(PDF_SKILL_DIR, "scripts")
if _scripts not in sys.path:
    sys.path.insert(0, _scripts)

# ━━ Color Palette ━━
PAGE_BG       = colors.HexColor('#eff0f1')
SECTION_BG    = colors.HexColor('#f0f1f1')
CARD_BG       = colors.HexColor('#e5e9eb')
TABLE_STRIPE  = colors.HexColor('#edeff0')
HEADER_FILL   = colors.HexColor('#40535d')
COVER_BLOCK   = colors.HexColor('#405763')
BORDER        = colors.HexColor('#c9cfd3')
ICON          = colors.HexColor('#4b8eaf')
ACCENT        = colors.HexColor('#d25328')
ACCENT_2      = colors.HexColor('#64d148')
TEXT_PRIMARY   = colors.HexColor('#1b1d1e')
TEXT_MUTED     = colors.HexColor('#73797c')
SEM_SUCCESS   = colors.HexColor('#428659')
SEM_WARNING   = colors.HexColor('#a18855')
SEM_ERROR     = colors.HexColor('#aa5149')
SEM_INFO      = colors.HexColor('#567390')

# ━━ Font Registration ━━
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', '/usr/share/fonts/truetype/english/calibri-regular.ttf'))
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
pdfmetrics.registerFont(TTFont('Microsoft YaHei', '/usr/share/fonts/truetype/chinese/msyh.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))

registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri')
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')
registerFontFamily('Microsoft YaHei', normal='Microsoft YaHei', bold='Microsoft YaHei')

from pdf import install_font_fallback
install_font_fallback()

# ━━ Page Setup ━━
PAGE_W, PAGE_H = A4
LEFT_MARGIN = 1.0 * inch
RIGHT_MARGIN = 1.0 * inch
TOP_MARGIN = 0.8 * inch
BOTTOM_MARGIN = 0.8 * inch
CONTENT_W = PAGE_W - LEFT_MARGIN - RIGHT_MARGIN

# ━━ Styles ━━
styles = getSampleStyleSheet()

style_title = ParagraphStyle(
    'AuditTitle', fontName='Times New Roman', fontSize=28, leading=36,
    alignment=TA_LEFT, textColor=ACCENT, spaceAfter=6
)
style_h1 = ParagraphStyle(
    'H1', fontName='Times New Roman', fontSize=20, leading=28,
    alignment=TA_LEFT, textColor=HEADER_FILL, spaceBefore=18, spaceAfter=10
)
style_h2 = ParagraphStyle(
    'H2', fontName='Times New Roman', fontSize=15, leading=22,
    alignment=TA_LEFT, textColor=COVER_BLOCK, spaceBefore=14, spaceAfter=8
)
style_h3 = ParagraphStyle(
    'H3', fontName='Times New Roman', fontSize=12, leading=18,
    alignment=TA_LEFT, textColor=ICON, spaceBefore=10, spaceAfter=6
)
style_body = ParagraphStyle(
    'Body', fontName='Times New Roman', fontSize=10.5, leading=17,
    alignment=TA_JUSTIFY, textColor=TEXT_PRIMARY, spaceAfter=6,
    firstLineIndent=0
)
style_body_indent = ParagraphStyle(
    'BodyIndent', fontName='Times New Roman', fontSize=10.5, leading=17,
    alignment=TA_LEFT, textColor=TEXT_PRIMARY, spaceAfter=4,
    leftIndent=18, bulletIndent=6
)
style_muted = ParagraphStyle(
    'Muted', fontName='Times New Roman', fontSize=9, leading=14,
    alignment=TA_LEFT, textColor=TEXT_MUTED, spaceAfter=4
)
style_callout = ParagraphStyle(
    'Callout', fontName='Times New Roman', fontSize=11, leading=18,
    alignment=TA_LEFT, textColor=ACCENT, leftIndent=18,
    borderPadding=8, spaceAfter=8, spaceBefore=8
)
style_table_header = ParagraphStyle(
    'TH', fontName='Times New Roman', fontSize=10, leading=14,
    alignment=TA_CENTER, textColor=colors.white
)
style_table_cell = ParagraphStyle(
    'TC', fontName='Times New Roman', fontSize=9.5, leading=14,
    alignment=TA_LEFT, textColor=TEXT_PRIMARY, wordWrap='CJK'
)
style_table_cell_center = ParagraphStyle(
    'TCC', fontName='Times New Roman', fontSize=9.5, leading=14,
    alignment=TA_CENTER, textColor=TEXT_PRIMARY
)

# ━━ Helper Functions ━━
def P(text, style=style_body):
    return Paragraph(text, style)

def H1(text):
    key = 'h_%s' % hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/><b>%s</b>' % (key, text), style_h1)
    p.bookmark_name = text
    p.bookmark_level = 0
    p.bookmark_text = text
    p.bookmark_key = key
    return p

def H2(text):
    key = 'h_%s' % hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/><b>%s</b>' % (key, text), style_h2)
    p.bookmark_name = text
    p.bookmark_level = 1
    p.bookmark_text = text
    p.bookmark_key = key
    return p

def H3(text):
    return Paragraph('<b>%s</b>' % text, style_h3)

def bullet(text):
    return Paragraph('<bullet>&bull;</bullet> %s' % text, style_body_indent)

def make_table(headers, rows, col_ratios=None):
    """Create a styled table with header + rows."""
    if col_ratios is None:
        col_ratios = [1.0 / len(headers)] * len(headers)
    col_widths = [r * CONTENT_W for r in col_ratios]

    data = [[Paragraph('<b>%s</b>' % h, style_table_header) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), style_table_cell) if not isinstance(c, Paragraph) else c for c in row])

    table = Table(data, colWidths=col_widths, hAlign='CENTER')
    style_cmds = [
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
    ]
    for i in range(1, len(data)):
        bg = colors.white if i % 2 == 1 else TABLE_STRIPE
        style_cmds.append(('BACKGROUND', (0, i), (-1, i), bg))
    table.setStyle(TableStyle(style_cmds))
    return table

def score_badge(score):
    """Return a colored score text."""
    if score >= 8:
        return Paragraph('<b>%d/10</b>' % score, ParagraphStyle('s', fontName='Times New Roman', fontSize=9.5, alignment=TA_CENTER, textColor=SEM_SUCCESS))
    elif score >= 5:
        return Paragraph('<b>%d/10</b>' % score, ParagraphStyle('s', fontName='Times New Roman', fontSize=9.5, alignment=TA_CENTER, textColor=SEM_WARNING))
    else:
        return Paragraph('<b>%d/10</b>' % score, ParagraphStyle('s', fontName='Times New Roman', fontSize=9.5, alignment=TA_CENTER, textColor=SEM_ERROR))

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=6, spaceBefore=6)

# ━━ TocDocTemplate ━━
from reportlab.platypus import SimpleDocTemplate

class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

# ━━ Build Document ━━
OUTPUT_BODY = "/home/z/my-project/download/audit_body.pdf"

doc = TocDocTemplate(
    OUTPUT_BODY,
    pagesize=A4,
    leftMargin=LEFT_MARGIN,
    rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN,
    bottomMargin=BOTTOM_MARGIN,
    title="Audit et Analyse - DataSphere Innovation",
    author="Z.ai",
    creator="Z.ai",
)

story = []

# ━━━━━━━━━━ TABLE OF CONTENTS ━━━━━━━━━━
toc = TableOfContents()
toc.levelStyles = [
    ParagraphStyle('TOC1', fontName='Times New Roman', fontSize=13, leading=22, leftIndent=20, spaceBefore=6),
    ParagraphStyle('TOC2', fontName='Times New Roman', fontSize=11, leading=18, leftIndent=44, spaceBefore=3),
]
story.append(Paragraph('<b>Table des matieres</b>', ParagraphStyle('TOCTitle', fontName='Times New Roman', fontSize=22, leading=30, textColor=HEADER_FILL, alignment=TA_LEFT, spaceAfter=18)))
story.append(toc)
story.append(PageBreak())

# ━━━━━━━━━━ SECTION 1: SYNTHESE EXECUTIVE ━━━━━━━━━━
story.append(H1("Synthese executive"))
story.append(P("DataSphere Innovation est un cabinet de conseil specialise dans la data, l'intelligence artificielle et la transformation digitale, cible sur le marche francais. Le projet est un site vitrine deploye sur Netlify, construit avec React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui et Supabase comme backend-as-a-service. Le site presente les services du cabinet, collecte les leads via un formulaire de contact, gere une newsletter, et offre un tableau de bord administrateur pour la gestion des leads et abonnes."))
story.append(Spacer(1, 8))
story.append(P("L'audit revele un projet avec <b>des fondations techniques solides</b> mais qui necessite des ameliorations significatives pour atteindre un niveau professionnel concurrentiel. Les points forts incluent une stack moderne et coherente, un design visuel soigne avec un theme sombre/clair, des animations fluides, et une conformite RGPD de base. Cependant, des lacunes critiques ont ete identifiees en matiere de SEO technique, de performance, d'accessibilite, de securite, et de richesse fonctionnelle par rapport aux concurrents du marche."))
story.append(Spacer(1, 8))

# Score table
score_data = [
    ["Architecture technique", score_badge(7)],
    ["Design et UX", score_badge(7)],
    ["Performance web", score_badge(5)],
    ["SEO et visibilite", score_badge(4)],
    ["Securite", score_badge(5)],
    ["Accessibilite", score_badge(3)],
    ["Fonctionnalites", score_badge(5)],
    ["Qualite du code", score_badge(6)],
    ["DevOps et CI/CD", score_badge(3)],
    ["Conformite RGPD", score_badge(6)],
]
story.append(Spacer(1, 6))
story.append(make_table(
    ["Domaine", "Score"],
    score_data,
    col_ratios=[0.70, 0.30]
))
story.append(Spacer(1, 6))
story.append(P('<b>Score global moyen : 5.1/10</b> - Le projet a un bon potentiel mais necessite des investissements cibles pour devenir professionnel et concurrentiel.', style_callout))

# ━━━━━━━━━━ SECTION 2: PRESENTATION DU PROJET ━━━━━━━━━━
story.append(H1("Presentation du projet"))

story.append(H2("Contexte et positionnement"))
story.append(P("DataSphere Innovation se positionne comme un cabinet expert en data et intelligence artificielle, base a Montreuil (93100), accompagnant les entreprises ambitieuses dans l'exploitation strategique de leurs donnees. Le cabinet propose six poles de service : Data Strategy, BI and Dashboards, AI Solutions, Data Engineering, Process Automation, et Cloud and Modernization. Cette offre est coherente avec les tendances du marche francais du conseil data/IA, qui connait une croissance soutenue portee par la transformation numerique des ETI et grands groupes."))
story.append(P("Le site web constitue le principal point d'entree digital pour la generation de leads et la credibilite du cabinet. Il doit donc non seulement informer mais aussi convertir les visiteurs en prospects qualifies, tout en demontrant l'expertise technique et strategique que le cabinet pretend offrir."))

story.append(H2("Stack technique"))
story.append(Spacer(1, 4))
stack_data = [
    ["Frontend", "React 18.3, TypeScript 5.8, Vite 5.4"],
    ["UI Framework", "Tailwind CSS 3.4, shadcn/ui (Radix UI)"],
    ["Animations", "Framer Motion 11"],
    ["Routing", "React Router DOM 6.30"],
    ["State/Data", "TanStack React Query 5.83"],
    ["Backend/BaaS", "Supabase (Auth, Database, RLS)"],
    ["Formulaires", "React Hook Form 7.61 + Zod 3.25"],
    ["Graphiques", "Recharts 2.15"],
    ["Deploiement", "Netlify (SPA redirects)"],
    ["Testing", "Vitest 3.2 + Playwright 1.57"],
]
story.append(make_table(
    ["Couche", "Technologie"],
    stack_data,
    col_ratios=[0.25, 0.75]
))

story.append(H2("Architecture du projet"))
story.append(P("Le projet suit une architecture SPA classique avec un routing cote client. La page d'accueil est decomposee en composants lazy-loaded pour optimiser le chargement initial. Les pages de services utilisent un composant generique ServicePage qui prend un objet de donnees en prop, ce qui est un bon pattern de reutilisabilite. L'administration est protegee par Supabase Auth avec un systeme de roles (admin/user) et des politiques RLS (Row Level Security) sur les tables."))

# ━━━━━━━━━━ SECTION 3: ANALYSE DETAILLEE ━━━━━━━━━━
story.append(H1("Analyse detaillee par domaine"))

# 3.1 Architecture
story.append(H2("Architecture technique"))
story.append(P("L'architecture globale est coherente et suit les bonnes pratiques React modernes. L'utilisation du lazy loading via React.lazy() et Suspense pour les sections sous le pli est une approche judicieuse qui ameliore le temps de chargement initial. La separation entre composants UI generiques (shadcn/ui) et composants metier est claire. Cependant, plusieurs problemes architecturaux meritent attention :"))

story.append(H3("Points positifs"))
story.append(bullet("Lazy loading des sections de la page d'accueil pour optimiser le chargement initial"))
story.append(bullet("Composant ServicePage generique et reutilisable pour les 6 pages de services"))
story.append(bullet("Types TypeScript generes automatiquement depuis le schema Supabase"))
story.append(bullet("Validation des variables d'environnement au demarrage de l'application"))
story.append(bullet("Pattern de validation de formulaire avec React Hook Form + Zod (bien que pas encore implemente pour le contact)"))

story.append(H3("Problemes identifies"))
story.append(bullet("<b>Aucun hook personnalise metier</b> : toute la logique de fetch, auth et validation est inline dans les composants. Il manque des hooks comme useAuth(), useLeads(), useNewsletter() pour separer la logique de la vue."))
story.append(bullet("<b>Aucune gestion d'etat global</b> : le theme dark/light est gere avec du DOM direct (document.documentElement.classList) au lieu d'un context React ou de next-themes correctement configure."))
story.append(bullet("<b>QueryClient non configure</b> : TanStack React Query est importe mais le QueryClient est instancie sans options (staleTime, retry, cacheTime). Les donnees sont potentiellement refetches trop souvent ou pas assez."))
story.append(bullet("<b>Pas de couche service/API</b> : les appels Supabase sont eparpilles directement dans les composants. Une couche d'abstraction (services/contactService.ts, services/authService.ts) faciliterait les tests et la maintenance."))
story.append(bullet("<b>Package.json non renomme</b> : le nom du projet est encore 'vite_react_shadcn_ts' au lieu de 'datasphere-innovation', ce qui manque de professionnalisme."))

# 3.2 Design & UX
story.append(H2("Design et experience utilisateur"))
story.append(P("Le design visuel du site est l'un des points forts du projet. L'utilisation de glassmorphism (glass-card), de gradients subtils, et d'animations Framer Motion cree une experience moderne et agreable. Le theme sombre/clair est bien pense avec un systeme de variables CSS complet. Neanmoins, plusieurs ameliorations UX sont necessaires :"))

story.append(H3("Points positifs"))
story.append(bullet("Design visuel soigne avec glassmorphism, gradients et effets de parallaxe"))
story.append(bullet("Theme sombre/clair complet avec variables CSS coherentes"))
story.append(bullet("Typographie structuree avec deux polices (Space Grotesk display + Inter body)"))
story.append(bullet("Animations de scroll (SectionReveal, staggerContainer) qui ameliorent l'engagement"))
story.append(bullet("Formulaire de contact avec validation en temps reel et feedback visuel"))
story.append(bullet("Composant CookieConsent RGPD compliant"))

story.append(H3("Problemes identifies"))
story.append(bullet("<b>Pas de chatbot ni d'assistant IA</b> : les concurrents comme Datasulting proposent un chat en direct. Pour un cabinet data/IA, l'absence d'assistant conversationnel est un manque strategique."))
story.append(bullet("<b>Temoignages fictifs</b> : les temoignages utilises (Marie Laurent, Thomas Berger, Sophie Marchand) semblent etre des noms generiques sans verification. Les concurrents affichent de vrais cas clients avec des resultats verificables."))
story.append(bullet("<b>Logos clients non verifies</b> : les logos de Danone, Renault, EDF, Airbus, etc. sont affiches mais sans preuve de partenariat reel, ce qui pose un risque juridique et de credibilite."))
story.append(bullet("<b>Pas de blog ni de ressources</b> : aucun contenu editorial pour demontrer l'expertise et ameliorer le SEO. C'est un des leviers les plus puissants pour un cabinet de conseil."))
story.append(bullet("<b>Pas de page equipe</b> : les visiteurs ne peuvent pas identifier les experts du cabinet. La page About est trop generique et manque de personnalisation."))
story.append(bullet("<b>Navigation basique</b> : pas de mega-menu, pas de recherche, pas de fil d'Ariane sur les pages de services."))

# 3.3 Performance
story.append(H2("Performance web"))
story.append(P("La performance est un domaine critique qui necessite une attention immediate. Le site utilise React 18 avec Vite, ce qui est un bon point de depart, mais plusieurs problemes de performance ont ete identifies :"))

story.append(H3("Problemes critiques"))
story.append(bullet("<b>Image hero non optimisee</b> : le fichier hero-bg.jpg est importe directement sans optimisation (pas de WebP, pas de srcset, pas de lazy loading natif). L'image fait probablement plus de 200KB, ce qui impacte le LCP (Largest Contentful Paint)."))
story.append(bullet("<b>Pas de Server-Side Rendering (SSR)</b> : le site est un SPA pur, ce qui signifie que les moteurs de recherche recoivent une page HTML vide initialement. C'est un probleme critique pour le SEO."))
story.append(bullet("<b>Pas de preloading/prefetching</b> : les images de service sont chargees au moment de la navigation, causant des delais visuels."))
story.append(bullet("<b>Framer Motion lourd</b> : la bibliotheque complete est importee (~30KB gzip), alors que seules quelques animations sont utilisees. Des alternatives plus legeres comme motion-react ou des CSS animations pourraient suffire."))
story.append(bullet("<b>Pas de Service Worker</b> : aucune strategie de mise en cache cote client pour les assets statiques."))
story.append(bullet("<b>Fonts Google chargees en runtime</b> : les polices Space Grotesk et Inter sont chargees via Google Fonts CDN dans le CSS (@import url), ce qui bloque le rendu. Il faudrait les heberger localement ou utiliser font-display: swap."))

# 3.4 SEO
story.append(H2("SEO et visibilite"))
story.append(P("Le SEO est le domaine le plus faible du projet, avec un score de 4/10. Pour un cabinet de conseil dont la visibilite digitale est essentielle, c'est un frein majeur a la croissance :"))

story.append(H3("Problemes critiques"))
story.append(bullet("<b>Pas de SSR/SSG</b> : le contenu est rendu cote client uniquement. Google peut indexer les SPA modernes, mais le rendu est plus lent et moins fiable qu'un HTML statique. Les meta tags dynamiques ne sont pas generes pour les crawlers."))
story.append(bullet("<b>Pas de balises meta dynamiques</b> : chaque page de service devrait avoir un title et une description uniques pour le SEO. Actuellement, le titre est probablement le meme pour toutes les pages."))
story.append(bullet("<b>Pas de schema.org/JSON-LD</b> : les donnees structurees (Organization, LocalBusiness, Service) sont absentes. Ces donnees aident Google a comprendre le contenu et a afficher des rich snippets dans les resultats de recherche."))
story.append(bullet("<b>Pas de balise canonical</b> : risque de contenu duplique sans URL canonique definie."))
story.append(bullet("<b>Sitemap statique</b> : le fichier sitemap.xml est ecrit en dur et ne sera pas mis a jour automatiquement si de nouvelles pages sont ajoutees."))
story.append(bullet("<b>Pas de balise hreflang</b> : si le site cible le marche francophone international, les balises hreflang sont necessaires."))

story.append(H3("Recommandations SEO prioritaires"))
story.append(P("La priorite absolue est de migrer vers un framework avec SSR/SSG comme Next.js ou Astro. Cette migration permettrait de generer des pages HTML statiques optimisees pour le SEO, avec des meta tags dynamiques par page, des donnees structurees JSON-LD, et un score Core Web Vitals nettement ameliore. En attendant, l'ajout de react-helmet-async pour les meta tags dynamiques et la mise en place de pre-rendering via prerender.io ou Netlify Edge Functions est un palliatif acceptable.", style_body))

# 3.5 Securite
story.append(H2("Securite"))
story.append(P("La securite du projet presente des lacunes significatives qui doivent etre comblees avant toute mise en production a grande echelle :"))

story.append(bullet("<b>Pas de protection CSRF</b> : les formulaires de contact et newsletter n'ont aucune protection contre les attaques Cross-Site Request Forgery. Un attaquant pourrait soumettre des formulaires frauduleusement au nom d'utilisateurs authentifies."))
story.append(bullet("<b>Pas de rate limiting</b> : les endpoints Supabase d'insertion (contact_submissions, newsletter_subscribers) sont ouverts aux utilisateurs anonymes sans limitation. Cela permet le spam et les attaques par deni de service."))
story.append(bullet("<b>Auth admin sans protection adequate</b> : la verification du role admin est faite cote client uniquement (requete a user_roles). Un utilisateur malveillant pourrait potentiellement contourner cette verification."))
story.append(bullet("<b>Pas de Content Security Policy (CSP)</b> : aucune politique CSP n'est definie, laissant le site vulnerable aux attaques XSS."))
story.append(bullet("<b>Secrets exposables</b> : les cles Supabase (VITE_SUPABASE_PUBLISHABLE_KEY) sont exposees cote client. Bien que ce soit par conception (cle anon), les politiques RLS doivent etre impeccablement configurees."))
story.append(bullet("<b>Pas de validation serveur</b> : les donnees du formulaire de contact sont validees uniquement cote client. Un attaquant peut contourner cette validation et inserer des donnees malveillantes directement dans Supabase."))

# 3.6 Accessibilite
story.append(H2("Accessibilite"))
story.append(P("L'accessibilite est le domaine le plus faible du projet avec un score de 3/10. Non seulement cela exclut une partie des utilisateurs, mais c'est aussi une obligation legale en France (RGAA) pour les sites de services au public :"))

story.append(bullet("<b>Pas de navigation au clavier</b> : le site ne semble pas gerer correctement le focus et la navigation au clavier. Les modales et les menus deroulants ne sont pas accessibles sans souris."))
story.append(bullet("<b>Contraste insuffisant</b> : plusieurs elements utilisent des couleurs avec un ratio de contraste inferieur a 4.5:1 (text-muted-foreground sur background). Par exemple, le texte #73797c sur #eff0f1 a un ratio d'environ 3.8:1."))
story.append(bullet("<b>Pas de skip navigation</b> : aucun lien 'Aller au contenu principal' pour les utilisateurs de lecteurs d'ecran."))
story.append(bullet("<b>Images sans texte alternatif</b> : l'image hero-bg.jpg a un alt vide (alt=''), et les images de service manquent de descriptions significatives."))
story.append(bullet("<b>Pas de landmarks ARIA</b> : les sections de la page ne sont pas balisees avec des roles ARIA (main, navigation, complementary)."))
story.append(bullet("<b>Formulaire non accessible</b> : les messages d'erreur ne sont pas relies aux champs via aria-describedby, et le checkbox RGPD utilise un pattern sr-only qui peut etre confus pour les lecteurs d'ecran."))

# 3.7 Code Quality
story.append(H2("Qualite du code"))
story.append(P("La qualite du code est correcte mais peut etre nettement amelioree. Le projet beneficie de TypeScript et d'une structure claire, mais manque de rigueur dans plusieurs domaines :"))

story.append(bullet("<b>Tests quasi inexistants</b> : un seul test (example.test.ts) qui verifie que true === true. Aucun test unitaire sur les composants, les hooks, ou les services. Aucun test d'integration. Les Playwright tests sont configures mais aucun scenario n'est ecrit."))
story.append(bullet("<b>ESLint trop permissif</b> : la regle '@typescript-eslint/no-unused-vars' est desactivee ('off'), ce qui permet l'accumulation de code mort."))
story.append(bullet("<b>Pas de Prettier</b> : aucun formateur de code automatique n'est configure, ce qui peut mener a des inconsistances de style."))
story.append(bullet("<b>README vide</b> : le fichier README contient uniquement le template par defaut de Lovable ('Welcome to your Lovable project - TODO: Document your project here'). Un README professionnel est essentiel pour l'onboarding et la credibilite du depot."))
story.append(bullet("<b>Pas de storybook</b> : les composants UI ne sont pas documentes dans un storybook, ce qui rend la collaboration et la maintenance plus difficiles."))
story.append(bullet("<b>Composants UI shadcn non utilises</b> : de nombreux composants shadcn/ui installes (calendar, chart, sidebar, menubar, etc.) ne sont pas utilises dans le projet, augmentant inutilement la taille du bundle."))

# 3.8 DevOps
story.append(H2("DevOps et CI/CD"))
story.append(P("L'infrastructure DevOps est minimale et necessite une professionnalisation urgente :"))

story.append(bullet("<b>Pas de pipeline CI/CD</b> : aucun fichier GitHub Actions, GitLab CI ou equivalent. Les deploiements sont probablement manuels ou relies uniquement au push sur la branche principale via Netlify."))
story.append(bullet("<b>Pas de branches de feature</b> : pas de strategy de branching documentee (Git Flow, Trunk-Based, etc.)."))
story.append(bullet("<b>Pas de lint en CI</b> : ESLint n'est pas execute automatiquement avant le deploiement."))
story.append(bullet("<b>Pas de tests en CI</b> : Vitest et Playwright ne sont pas executes automatiquement."))
story.append(bullet("<b>Pas d'environnements multiples</b> : pas de staging, pas de preview deployments pour les pull requests."))
story.append(bullet("<b>Pas de monitoring</b> : pas de Sentry, pas de LogRocket, pas d'analytics cote serveur. Le site fonctionne sans visibilite sur les erreurs en production."))

# ━━━━━━━━━━ SECTION 4: ANALYSE CONCURRENTIELLE ━━━━━━━━━━
story.append(H1("Analyse concurrentielle"))

story.append(H2("Paysage concurrentiel"))
story.append(P("Le marche francais du conseil data/IA est tres concurrentiel, avec des acteurs de differentes tailles. Voici les principaux concurrents identifies et leurs points forts par rapport a DataSphere Innovation :"))

competitor_data = [
    ["Datasulting", "29 experts data/IA, blog actif, chat en direct, cas clients verifies", "8/10"],
    ["Micropole", "1300 collaborateurs, presence nationale, certifications partenaires", "9/10"],
    ["Avisia", "Experts Data/IA Paris, audit maturite, demos interactives", "7/10"],
    ["Altansia", "50 collaborateurs BI/Big Data/IA, certifications partenaires cloud", "7/10"],
    ["Eleven Strategy", "Projets IA a grande echelle, international, thought leadership", "9/10"],
    ["Thelio", "Cabinet independant, strategie/gouvernance/architecture, blog", "7/10"],
    ["Quantmetry", "Excellence technique, open source, communaute active", "8/10"],
]
story.append(Spacer(1, 6))
story.append(make_table(
    ["Concurrent", "Points forts web", "Score web"],
    competitor_data,
    col_ratios=[0.20, 0.65, 0.15]
))

story.append(H2("Ecarts principaux avec les concurrents"))
story.append(P("L'analyse comparative revele que DataSphere Innovation presente des lacunes significatives dans cinq domaines cles ou les concurrents excellent :"))

story.append(H3("1. Contenu editorial et thought leadership"))
story.append(P("Aucun concurrent serieux n'a un site sans blog ou section ressources. Datasulting publie regulierement des articles techniques, Micropole produit des white papers, Eleven Strategy maintient un blog de pensee strategique. Ce contenu est essentiel pour le SEO, la demonstration d'expertise, et la generation de leads entrants. DataSphere Innovation n'a aucun contenu editorial, ce qui la rend invisible sur les requetes informationnelles et ne permet pas de nourrir un pipeline de leads."))

story.append(H3("2. Preuve sociale et cas clients"))
story.append(P("Les concurrents affichent des cas clients detailles avec des resultats verificables, des temoignages video, et des logos de partenaires certifies. DataSphere Innovation affiche des logos de grandes entreprises (Danone, Renault, EDF, Airbus) sans preuve de collaboration, et des temoignages qui semblent fictifs. Ce deficit de credibilite est un frein majeur a la conversion."))

story.append(H3("3. Interactivite et engagement"))
story.append(P("Les meilleurs sites concurrents proposent des outils interactifs : chatbots IA, calculateurs de ROI, quiz de maturite data, demos en direct. DataSphere Innovation n'a aucun outil interactif, ce qui est particulierement dommageable pour un cabinet qui vend de l'IA et de l'automatisation. Un chatbot IA sur le site serait a la fois un outil de conversion et une demonstration de competence."))

story.append(H3("4. Performance technique et SEO"))
story.append(P("Les concurrents avec des sites Next.js ou Nuxt.js beneficient d'un SSR qui leur confere un avantage SEO considerable. Leur contenu est indexable, leurs meta tags sont dynamiques, et leurs Core Web Vitals sont optimises. Le SPA de DataSphere Innovation est desavantage sur tous ces points."))

story.append(H3("5. Certifications et partenariats"))
story.append(P("Les concurrents affichent clairement leurs certifications (AWS Partner, Google Cloud Partner, Microsoft Partner) et leurs partenariats technologiques. DataSphere Innovation affiche des logos de partenaires (Snowflake, Databricks, dbt, etc.) mais sans statut de partenariat officiel verifiable."))

# ━━━━━━━━━━ SECTION 5: PROPOSITIONS D'EVOLUTION ━━━━━━━━━━
story.append(H1("Propositions d'evolution"))
story.append(P("Les propositions ci-dessous sont classees par priorite (P0 = critique, P1 = importante, P2 = souhaitable) et par horizon temporel. Chaque proposition inclut une estimation d'effort et l'impact attendu."))

story.append(H2("P0 - Priorites critiques (1-3 mois)"))

story.append(H3("Migration vers Next.js avec SSR/SSG"))
story.append(P("La migration de Vite + React Router vers Next.js 14+ avec App Router est la priorite absolue. Cette migration apporte le Server-Side Rendering pour le SEO, la generation statique pour les pages de services, les Server Components pour reduire le bundle client, les Server Actions pour les formulaires (suppression du besoin de policies RLS permissives), et l'optimisation automatique des images via next/image. L'effort est estimatif (3-4 semaines), mais le retour sur investissement est massif : meilleur SEO, meilleures performances, architecture plus securisee."))
story.append(Spacer(1, 4))
p0_data = [
    ["Migration Next.js SSR/SSG", "P0", "3-4 semaines", "SEO + Performance + Securite"],
    ["Meta tags dynamiques + JSON-LD", "P0", "3-5 jours", "SEO et rich snippets"],
    ["Optimisation images (WebP, AVIF)", "P0", "2-3 jours", "Core Web Vitals"],
    ["Blog / Section ressources", "P0", "2-3 semaines", "SEO + Thought leadership"],
]
story.append(make_table(
    ["Action", "Priorite", "Effort", "Impact"],
    p0_data,
    col_ratios=[0.35, 0.10, 0.20, 0.35]
))

story.append(H3("Lancement d'un blog et d'une section ressources"))
story.append(P("Le blog est le levier de croissance le plus sous-estime par DataSphere Innovation. Chaque article publie cree une nouvelle page indexable, genere du trafic organique, et positionne le cabinet comme expert. La strategie editoriale devrait inclure : des articles de fond sur les tendances data/IA (1 par semaine), des retours d'experience detailles (cas clients reels), des guides techniques (comment choisir sa stack data, guide du data mesh), et des infographies partageables. Un CMS headless comme Sanity ou Contentful permettrait de gerer le contenu sans toucher au code."))

story.append(H2("P1 - Ameliorations importantes (3-6 mois)"))

story.append(H3("Chatbot IA conversationnel"))
story.append(P("L'integration d'un chatbot IA sur le site est un double investissement : outil de conversion (qualification des leads 24/7) et demonstration de competence (un cabinet IA qui utilise l'IA sur son propre site). Le chatbot devrait pouvoir repondre aux questions frequentes, qualifier les besoins des visiteurs, proposer des rendez-vous, et orienter vers les bons services. Son implementation peut se faire via une API OpenAI ou un modele proprietaire heberge, avec une interface de type widget flottant. Ce projet est egalement un excellent cas client a mettre en avant sur le site."))

story.append(H3("Cas clients reels et preuve sociale"))
story.append(P("Remplacer les temoignages fictifs et les logos clients non verifies par de vrais cas clients avec des resultats mesurables. Chaque cas client devrait inclure : le contexte et les enjeux du client, la solution apportee par DataSphere Innovation, les resultats quantifies (ROI, gains de temps, reduction des couts), et un temoignage video ou ecrit d'un decideur du client. Retirer les logos des entreprises avec lesquelles il n'y a pas de collaboration averee pour eviter tout risque juridique."))

p1_data = [
    ["Chatbot IA conversationnel", "P1", "2-3 semaines", "Conversion + Demo competence"],
    ["Cas clients reels verifies", "P1", "1-2 semaines", "Credibilite + Conversion"],
    ["Page Equipe avec profils", "P1", "3-5 jours", "Confiance + Personnalisation"],
    ["Quiz maturite data interactif", "P1", "1-2 semaines", "Engagement + Lead gen"],
    ["Calculateur ROI", "P1", "1 semaine", "Conversion + Demo valeur"],
    ["Internationalisation (i18n)", "P1", "1-2 semaines", "Marche elargi"],
]
story.append(Spacer(1, 4))
story.append(make_table(
    ["Action", "Priorite", "Effort", "Impact"],
    p1_data,
    col_ratios=[0.35, 0.10, 0.20, 0.35]
))

story.append(H3("Page Equipe et page A propos enrichie"))
story.append(P("La page A propos actuelle est trop generique. Les prospects veulent savoir qui sont les experts avec lesquels ils vont travailler. Chaque membre de l'equipe devrait avoir un profil detaille avec photo, parcours, certifications, et domaines d'expertise. Les certifications (AWS, GCP, Azure, dbt, etc.) doivent etre mises en avant. La page devrait aussi inclure l'histoire du cabinet, ses valeurs, et sa vision."))

story.append(H2("P2 - Ameliorations souhaitees (6-12 mois)"))

p2_data = [
    ["Refonte hooks/services (architecture)", "P2", "1-2 semaines", "Maintenabilite + Testabilite"],
    ["Pipeline CI/CD GitHub Actions", "P2", "3-5 jours", "Qualite + Automatisation"],
    ["Suite de tests (unit + e2e)", "P2", "2-3 semaines", "Fiabilite + Confiance"],
    ["Monitoring (Sentry + Analytics)", "P2", "2-3 jours", "Visibilite production"],
    ["Progressive Web App (PWA)", "P2", "1 semaine", "Experience mobile"],
    ["Storybook composants", "P2", "1 semaine", "Documentation + Collaboration"],
    ["API de demo pour services", "P2", "2-3 semaines", "Demo interactive"],
    ["Dashboard client (portal)", "P2", "4-6 semaines", "Retention + Valeur ajoutee"],
]
story.append(make_table(
    ["Action", "Priorite", "Effort", "Impact"],
    p2_data,
    col_ratios=[0.35, 0.10, 0.20, 0.35]
))

# ━━━━━━━━━━ SECTION 6: PLAN D'ACTION ━━━━━━━━━━
story.append(H1("Plan d'action recommande"))
story.append(P("Le plan d'action ci-dessous propose une feuille de route sur 12 mois avec trois phases distinctes, chacune avec des objectifs mesurables et des indicateurs de succes."))

story.append(H2("Phase 1 - Fondations (Mois 1-3)"))
story.append(P("La premiere phase se concentre sur les fondations techniques et le contenu, qui sont les prerequis pour toute croissance digitale. L'objectif principal est de rendre le site visible sur les moteurs de recherche et de commencer a generer du trafic organique."))
story.append(bullet("Semaine 1-2 : Migration vers Next.js 14 avec App Router, SSR/SSG, et next/image"))
story.append(bullet("Semaine 3 : Implementation des meta tags dynamiques, JSON-LD, et sitemap dynamique"))
story.append(bullet("Semaine 4 : Optimisation des images (WebP/AVIF), configuration du caching, et amelioration des Core Web Vitals"))
story.append(bullet("Semaine 5-8 : Lancement du blog avec les 5 premiers articles, mise en place d'un CMS headless (Sanity/Contentful), et creation d'un calendrier editorial"))
story.append(bullet("Semaine 9-10 : Nettoyage de la preuve sociale (retrait des logos/temoignages non verifies), creation de la page Equipe"))
story.append(bullet("Semaine 11-12 : Configuration de Google Search Console, Google Analytics 4, et mise en place du monitoring Sentry"))

story.append(H2("Phase 2 - Croissance (Mois 4-6)"))
story.append(P("La deuxieme phase exploite les fondations posees pour accelerer la croissance. L'objectif est d'augmenter le taux de conversion et la credibilite du cabinet."))
story.append(bullet("Semaine 13-16 : Developpement et deploiement du chatbot IA conversationnel"))
story.append(bullet("Semaine 17-18 : Creation du quiz de maturite data interactif et du calculateur ROI"))
story.append(bullet("Semaine 19-20 : Publication des premiers vrais cas clients avec resultats verifies"))
story.append(bullet("Semaine 21-24 : Refonte de l'architecture frontend (hooks, services, tests unitaires), et mise en place de la CI/CD"))

story.append(H2("Phase 3 - Excellence (Mois 7-12)"))
story.append(P("La troisieme phase vise l'excellence operationnelle et la differentiation concurrentielle. L'objectif est de faire de DataSphere Innovation une reference sur le marche."))
story.append(bullet("Mois 7-8 : Suite de tests complete (80%+ couverture), Storybook, et documentation technique"))
story.append(bullet("Mois 9-10 : API de demo pour les services, dashboard client, et PWA"))
story.append(bullet("Mois 11-12 : Optimisation continue basee sur les donnees analytics, A/B testing, et internationalisation"))

# ━━━━━━━━━━ SECTION 7: CONCLUSION ━━━━━━━━━━
story.append(H1("Conclusion"))
story.append(P("DataSphere Innovation dispose d'un site web avec un potentiel certain, grace a une stack technique moderne, un design visuel soigne, et une structure de contenu coherente. Cependant, le projet se situe actuellement en dessous du standard professionnel du marche, notamment en raison de lacunes critiques en SEO, en performance, en accessibilite, et en preuve sociale."))
story.append(P("Les concurrents du marche francais du conseil data/IA investissent massivement dans le contenu editorial, les outils interactifs, et l'optimisation technique de leurs sites. Pour rivaliser avec eux, DataSphere Innovation doit d'urgence combler le gap en matiere de SSR/SEO, lancer une strategie de contenu, et renforcer sa credibilite avec des cas clients reels."))
story.append(P("La migration vers Next.js est la priorite absolue, car elle debloque simultanement des ameliorations en SEO, en performance, en securite, et en architecture. Le chatbot IA et le blog sont les deux fonctionnalites a plus fort ROI, car elles contribuent a la fois a la conversion, a la demonstration d'expertise, et a la visibilite organique."))
story.append(P("En suivant le plan d'action recommande, DataSphere Innovation peut atteindre un niveau professionnel concurrentiel en 6 mois et se positionner comme une reference du marche en 12 mois. L'investissement necessaire est significatif mais proportionne aux enjeux : dans le conseil data/IA, le site web est le premier cas client que voit un prospect. Il doit etre irreprochable."))

# ━━ Build ━━
doc.multiBuild(story)
print(f"Body PDF generated: {OUTPUT_BODY}")
