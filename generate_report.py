#!/usr/bin/env python3
"""Generate the OpenClaw Market Guide PDF report."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, HRFlowable,
)
from reportlab.lib import colors

# ── Colors ──
NAVY = HexColor("#0f172a")
DARK_SLATE = HexColor("#1e293b")
ACCENT = HexColor("#6366f1")
ACCENT_LIGHT = HexColor("#818cf8")
MUTED = HexColor("#64748b")
TEXT_DARK = HexColor("#1e293b")
TEXT_BODY = HexColor("#334155")
TABLE_HEADER_BG = HexColor("#1e293b")
TABLE_ROW_ALT = HexColor("#f1f5f9")
TABLE_BORDER = HexColor("#cbd5e1")
SECTION_BG = HexColor("#f8fafc")

OUTPUT = "/Users/colinlowenberg/clawcamp-deck/public/openclaw-market-guide-2026.pdf"

# ── Styles ──
styles = getSampleStyleSheet()

styles.add(ParagraphStyle(
    "CoverTitle", parent=styles["Title"],
    fontSize=32, leading=38, textColor=white, alignment=TA_CENTER,
    spaceAfter=12, fontName="Helvetica-Bold",
))
styles.add(ParagraphStyle(
    "CoverSub", parent=styles["Normal"],
    fontSize=14, leading=20, textColor=HexColor("#94a3b8"), alignment=TA_CENTER,
    spaceAfter=6, fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "CoverMeta", parent=styles["Normal"],
    fontSize=11, leading=16, textColor=HexColor("#64748b"), alignment=TA_CENTER,
    fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "SectionHeader", parent=styles["Heading1"],
    fontSize=20, leading=26, textColor=NAVY, fontName="Helvetica-Bold",
    spaceBefore=24, spaceAfter=8,
))
styles.add(ParagraphStyle(
    "SubHeader", parent=styles["Heading2"],
    fontSize=14, leading=18, textColor=ACCENT, fontName="Helvetica-Bold",
    spaceBefore=16, spaceAfter=6,
))
styles.add(ParagraphStyle(
    "TierHeader", parent=styles["Heading3"],
    fontSize=12, leading=16, textColor=TEXT_DARK, fontName="Helvetica-Bold",
    spaceBefore=12, spaceAfter=4,
))
styles.add(ParagraphStyle(
    "BodyTextCustom", parent=styles["Normal"],
    fontSize=10, leading=15, textColor=TEXT_BODY, alignment=TA_JUSTIFY,
    spaceAfter=8, fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "BulletCustom", parent=styles["Normal"],
    fontSize=10, leading=15, textColor=TEXT_BODY,
    leftIndent=20, bulletIndent=6, spaceAfter=6, fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "NumberedItem", parent=styles["Normal"],
    fontSize=10, leading=15, textColor=TEXT_BODY,
    leftIndent=20, spaceAfter=8, fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "SmallMuted", parent=styles["Normal"],
    fontSize=9, leading=13, textColor=MUTED, fontName="Helvetica",
    spaceAfter=4,
))
styles.add(ParagraphStyle(
    "TableCell", parent=styles["Normal"],
    fontSize=8, leading=11, textColor=TEXT_BODY, fontName="Helvetica",
))
styles.add(ParagraphStyle(
    "TableCellBold", parent=styles["Normal"],
    fontSize=8, leading=11, textColor=TEXT_DARK, fontName="Helvetica-Bold",
))
styles.add(ParagraphStyle(
    "TableHeader", parent=styles["Normal"],
    fontSize=8, leading=11, textColor=white, fontName="Helvetica-Bold",
))
styles.add(ParagraphStyle(
    "FooterStyle", parent=styles["Normal"],
    fontSize=8, leading=10, textColor=MUTED, fontName="Helvetica",
))


def hr():
    return HRFlowable(width="100%", thickness=1, color=TABLE_BORDER, spaceAfter=12, spaceBefore=4)


def bullet(text):
    return Paragraph(f"\u2022  {text}", styles["BulletCustom"])


def numbered(num, text):
    return Paragraph(f"<b>{num}.</b>  {text}", styles["NumberedItem"])


def body(text):
    return Paragraph(text, styles["BodyTextCustom"])


def section(text):
    return Paragraph(text, styles["SectionHeader"])


def subsection(text):
    return Paragraph(text, styles["SubHeader"])


def tier(text):
    return Paragraph(text, styles["TierHeader"])


def make_table(headers, rows, col_widths=None):
    """Create a styled table with header row and alternating shading."""
    header_cells = [Paragraph(h, styles["TableHeader"]) for h in headers]
    data = [header_cells]
    for row in rows:
        data.append([Paragraph(str(c), styles["TableCell"]) for c in row])

    t = Table(data, colWidths=col_widths, repeatRows=1)
    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), TABLE_HEADER_BG),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, TABLE_BORDER),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ]
    for i in range(1, len(data)):
        if i % 2 == 0:
            style_cmds.append(("BACKGROUND", (0, i), (-1, i), TABLE_ROW_ALT))
    t.setStyle(TableStyle(style_cmds))
    return t


# ── Header / Footer ──
def header_footer(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(72, letter[1] - 36, "ClawCamp Research  |  April 2026  |  Confidential")
        canvas.drawRightString(letter[0] - 72, 36, f"Page {doc.page}")
        # thin line under header
        canvas.setStrokeColor(TABLE_BORDER)
        canvas.setLineWidth(0.5)
        canvas.line(72, letter[1] - 42, letter[0] - 72, letter[1] - 42)
        canvas.line(72, 48, letter[0] - 72, 48)
    canvas.restoreState()


def first_page(canvas, doc):
    """Cover page."""
    canvas.saveState()
    # Full navy background
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)

    # Accent bar — positioned below the subtitle area
    canvas.setFillColor(ACCENT)
    canvas.rect(72, 220, letter[0] - 144, 3, fill=1, stroke=0)

    canvas.restoreState()


# ── Build story ──
story = []

# ╔══════════════════════════════════════════╗
# ║  COVER PAGE                              ║
# ╚══════════════════════════════════════════╝
story.append(Spacer(1, 2.5 * inch))
story.append(Paragraph("MARKET GUIDE", ParagraphStyle(
    "CoverLabel", parent=styles["CoverMeta"], fontSize=12,
    textColor=ACCENT_LIGHT, fontName="Helvetica-Bold",
    spaceBefore=0, spaceAfter=8,
)))
story.append(Paragraph(
    "OpenClaw Agent Hosting<br/>and Execution Platforms",
    styles["CoverTitle"],
))
story.append(Spacer(1, 8))
story.append(Paragraph(
    "A comprehensive analysis of 31 platforms across 5 market segments",
    styles["CoverSub"],
))
story.append(Spacer(1, 1.2 * inch))
story.append(Paragraph("April 2026", styles["CoverMeta"]))
story.append(Spacer(1, 6))
story.append(Paragraph(
    "Prepared for CIOs, CTOs, VP Engineering,<br/>and Platform Engineering Leaders",
    styles["CoverMeta"],
))
story.append(Spacer(1, 0.8 * inch))
story.append(Paragraph("ClawCamp Research", ParagraphStyle(
    "CoverBrand", parent=styles["CoverMeta"],
    fontSize=13, textColor=white, fontName="Helvetica-Bold",
)))
story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  EXECUTIVE SUMMARY                      ║
# ╚══════════════════════════════════════════╝
story.append(section("Executive Summary"))
story.append(hr())

story.append(bullet(
    "<b>Market emergence:</b> OpenClaw has become the dominant open-source AI agent framework in 2026, "
    "creating a rapidly growing hosting ecosystem that did not exist 12 months ago. Organizations must "
    "now choose between six distinct deployment models — from turnkey managed platforms to self-hosted infrastructure."
))
story.append(bullet(
    "<b>Five market segments:</b> OpenClaw-Native Managed Platforms (6 vendors), General Managed Agent "
    "Platforms (4 vendors), Code Execution Sandboxes (5 vendors), Agent Orchestration frameworks "
    "(3 vendors), and Self-Hosted Infrastructure including NeoCloud (13 vendors)."
))
story.append(bullet(
    "<b>Security as primary criterion:</b> The ClawJacked vulnerability (CVE-2026-25253) exposed credential "
    "isolation weaknesses, accelerating demand for dedicated VM isolation. Only a minority of current "
    "platforms offer hardware-level isolation guarantees."
))
story.append(bullet(
    "<b>Cost optimization through model routing:</b> With LLM API costs comprising 60-80% of agent "
    "operating expenses, platforms offering automatic routing between premium and budget models "
    "(e.g., Coral's claimed 10x savings) are gaining traction."
))
story.append(bullet(
    "<b>Open-source pricing pressure:</b> Both OpenClaw and several hosting platforms (ClawHost under MIT, "
    "Temporal under MIT, Kagent under Apache 2.0) are open source, creating credible self-hosted "
    "alternatives that constrain managed platform pricing and reduce lock-in risk."
))
story.append(bullet(
    "<b>Managed platforms lack enterprise track records:</b> While managed OpenClaw-as-a-service is the "
    "fastest-growing segment, virtually all OpenClaw-native hosting providers have been operating for "
    "fewer than six months. Production track records at enterprise scale are limited across the board."
))
story.append(bullet(
    "<b>Recommendation:</b> Technology leaders should start with a managed OpenClaw platform to validate "
    "agent ROI before investing in self-hosted infrastructure, but must require dedicated VM or microVM "
    "isolation for agents handling production data and enforce independent security assessments beyond "
    "vendor claims."
))
story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  MARKET OVERVIEW                        ║
# ╚══════════════════════════════════════════╝
story.append(section("Market Overview"))
story.append(hr())

story.append(body(
    "The OpenClaw agent hosting market encompasses all platforms, services, and infrastructure that "
    "enable organizations to deploy, run, and manage OpenClaw-based AI agents in production. This "
    "market emerged in late 2025 following OpenClaw's open-source release and has grown rapidly "
    "through early 2026, with over 30 vendors now offering some form of OpenClaw-compatible hosting."
))
story.append(body(
    "The OpenClaw stack creates specific infrastructure requirements: persistent compute for "
    "long-running agent sessions, secure credential management for API keys and OAuth tokens, "
    "network isolation to prevent unauthorized data exfiltration, MCP (Model Context Protocol) "
    "tool server hosting, and multi-model routing across providers including Anthropic Claude, "
    "OpenAI GPT-4, Google Gemini, Meta Llama, and Mistral. These requirements have driven the "
    "emergence of purpose-built hosting platforms that abstract away operational complexity."
))
story.append(body(
    "The market serves four distinct customer segments with different needs. SMBs seeking turnkey "
    "\"AI employees\" gravitate toward no-code managed platforms like ZenClaw AI and KlausAI. "
    "Engineering teams building custom agent pipelines prefer sandbox and orchestration platforms "
    "like E2B, Sprites.dev, and Temporal.io. Sales and GTM teams adopt vertical platforms like "
    "Relevance AI. Security-conscious enterprises with compliance requirements demand dedicated "
    "isolation, driving them toward platforms like Coral or self-hosted deployments on Hetzner or "
    "Contabo infrastructure."
))
story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  TAM & COMPETITIVE LANDSCAPE            ║
# ╚══════════════════════════════════════════╝
story.append(section("Total Addressable Market and Competitive Landscape"))
story.append(hr())

story.append(body(
    "To size the OpenClaw hosting opportunity, it is necessary to understand where OpenClaw sits "
    "within the broader AI agent framework ecosystem and how that ecosystem maps to hosting demand. "
    "The agent framework market in 2026 divides into two distinct categories: general-purpose "
    "developer orchestration frameworks and personal AI agent platforms. OpenClaw dominates the "
    "latter but does not compete in the former."
))

# ── OpenClaw Ecosystem (primary focus — placed first) ──
story.append(subsection("The OpenClaw Personal Agent Ecosystem"))
story.append(body(
    "OpenClaw and its derivatives form a distinct market: personal AI agents deployed via messaging "
    "platforms (WhatsApp, Telegram, Slack, Discord) and web interfaces. This ecosystem — while "
    "large by open-source standards — is not a general-purpose developer framework. It does not "
    "compete with LangChain, CrewAI, or OpenAI's SDK. This is the specific TAM for OpenClaw-native "
    "managed hosting providers."
))

story.append(tier("OpenClaw"))
story.append(body(
    "The dominant personal AI agent with ~160-280K GitHub stars. Deploys via WhatsApp, Telegram, "
    "Slack, Discord, and web interfaces. Multi-model support (Claude, GPT-4, Gemini, Llama, "
    "Mistral). The primary driver of all OpenClaw-native hosting demand."
))
story.append(body(
    "<b>Governance and funding:</b> OpenClaw is maintained by the OpenClaw Foundation, which "
    "received strategic funding from OpenAI in early 2026. Despite this corporate backing, the "
    "project remains fully open source under its original license. The OpenAI investment was "
    "structured to preserve the Foundation's independence and ensure OpenClaw remains "
    "vendor-neutral across LLM providers. Technology leaders should note that this funding "
    "relationship strengthens the project's long-term viability while introducing no "
    "exclusivity constraints — OpenClaw continues to support Anthropic, Google, Meta, and "
    "Mistral models alongside OpenAI."
))
story.append(body(
    "<b>Skills as the primary extension model:</b> While MCP (Model Context Protocol) servers "
    "have become the standard tool integration layer across the broader agent ecosystem, "
    "OpenClaw has invested heavily in its own Skills framework as the primary mechanism for "
    "extending agent capabilities. Skills are self-contained, portable packages of agent "
    "behavior — combining prompts, tool definitions, and execution logic into shareable units. "
    "This has created a secondary marketplace around agents: ClawHub (integrated into ClawHost), "
    "IronClaw's curated marketplace (~600 skills), and Hermes Agent's agentskills.io standard "
    "all represent competing skill distribution channels. OpenClaw also supports MCP servers, "
    "but the community gravitates toward skills as the more opinionated and composable "
    "abstraction. For hosting providers, skills marketplaces represent a differentiation vector "
    "and a source of platform stickiness — ClawHost's integrated ClawHub and KlausAI's "
    "pre-configured tool bundles are direct examples."
))

story.append(tier("Hermes Agent"))
story.append(body(
    "Self-improving autonomous agent from Nous Research, launched Feb 2026, already at ~24,600 "
    "GitHub stars. Core differentiator: a genuine learning loop where completed tasks become "
    "searchable Skill Documents (agentskills.io standard) that the agent retrieves on future "
    "problems. Uses FTS5 session search and Honcho for persistent user modeling. Model-agnostic "
    "(OpenRouter 200+ models). Ships with 40+ built-in tools, MCP support, natural-language cron "
    "scheduling, and multi-channel gateway. Also offers batch trajectory generation and native "
    "Atropos RL for fine-tuning from agent experience. The only major open-source agent with a "
    "built-in procedural learning loop. Worth watching but not yet in the same tier as "
    "LangGraph/CrewAI for enterprise adoption."
))

story.append(tier("IronClaw"))
story.append(body(
    "Rust-based, security-first agent harness built by NEAR AI as a direct response to OpenClaw's "
    "credential exposure issues. Five-layer defense-in-depth: TLS 1.3 with SSRF protection, "
    "endpoint allowlist filtering, AES-256-GCM encrypted credential management (22 regex patterns "
    "with Aho-Corasick leak scanning), WebAssembly sandbox isolation for tool execution, and Docker "
    "containers with per-job resource limits. 3.4MB binary, <10ms startup, ~7.8MB memory. Includes "
    "iron-verify static analysis. ~600 curated skills. Best for regulated industries needing "
    "policy-compliant agent deployments with audit trails."
))

story.append(tier("ZeroClaw"))
story.append(body(
    "Rust-based, edge-first alternative to OpenClaw with 20K+ GitHub stars. Compiles to a ~3.4-5MB "
    "static binary, <50ms startup, ~5-6MB RAM. Supports 22+ LLM providers, 5 channels, 17+ "
    "built-in tools, agent swarms with per-agent tool whitelists, and container isolation per "
    "request. Trait-based modular architecture. SQLite with vector embeddings for persistent "
    "memory. Backwards-compatible with OpenClaw identity files (zeroclaw migrate openclaw). "
    "1,800+ tests. Apache 2.0 license. Best for edge deployments, IoT, and resource-constrained "
    "environments."
))

story.append(tier("NanoClaw"))
story.append(body(
    "Ultra-minimal agent runtime — ~500 lines of core TypeScript across 15 files, auditable in "
    "about 8 minutes. Architecture: a single Node.js process that spawns isolated containers "
    "(Docker or Apple Container on macOS) per conversation/group. Uses Claude Agent SDK as the "
    "\"brain\" inside containers and OpenAI Agents SDK for multi-agent orchestration/handoffs. "
    "Features Agent Swarms (parallel specialized agents in isolated containers), per-group SQLite "
    "memory, and native MCP support. First personal AI assistant to support Agent Swarms. "
    "Intentionally opinionated: trades generality for simplicity and auditability."
))

story.append(tier("NemoClaw"))
story.append(body(
    "NVIDIA-backed enterprise variant of the OpenClaw runtime, built on NVIDIA's NIM (NVIDIA "
    "Inference Microservices) and NeMo frameworks. Adds hardware-accelerated guardrails, "
    "enterprise-grade credential isolation via OpenShell sandboxing, and native GPU inference "
    "routing. Designed for organizations that need OpenClaw's agent capabilities with NVIDIA's "
    "enterprise security and compliance guarantees. Available exclusively through ZenClaw AI's "
    "managed hosting. Positions OpenClaw for regulated enterprise deployments that require "
    "vendor-backed SLAs and hardware-level trust boundaries."
))

story.append(Spacer(1, 8))
story.append(make_table(
    ["Project", "Language", "Stars", "Key Differentiator", "Hosting Impact"],
    [
        ["OpenClaw", "TypeScript", "~160-280K",
         "Dominant personal AI agent, multi-channel", "Primary hosting demand driver"],
        ["NemoClaw", "Python/CUDA", "N/A (NVIDIA)",
         "Enterprise OpenShell, GPU guardrails, NIM", "Drives ZenClaw managed hosting"],
        ["Hermes Agent", "Python", "~24.6K",
         "Self-improving skill loop, RL fine-tuning", "Emerging; cloud-hosted preferred"],
        ["IronClaw", "Rust", "~2.7K",
         "5-layer security, WASM sandbox, audit trails", "Self-hosted / regulated industries"],
        ["ZeroClaw", "Rust", "20K+",
         "3.4MB binary, edge-first, <50ms startup", "Reduces cloud hosting demand (runs locally)"],
        ["NanoClaw", "TypeScript", "Growing",
         "500-line auditable core, container isolation", "Self-hosted; minimal hosting demand"],
    ],
    col_widths=[1.0*inch, 0.7*inch, 0.7*inch, 1.8*inch, 1.9*inch],
))

story.append(PageBreak())

# ── Mainstream Frameworks (for TAM context) ──
story.append(subsection("Established Mainstream Agent Frameworks"))
story.append(body(
    "For TAM context, the following general-purpose developer frameworks represent the broader "
    "agent market. They appear in every major industry roundup and generate the primary demand for "
    "framework-agnostic hosting infrastructure (sandboxes, orchestration, cloud) — but not for "
    "OpenClaw-native managed platforms."
))

story.append(tier("CrewAI"))
story.append(body(
    "Role-based multi-agent orchestration in Python. Agents are defined with a role, goal, and "
    "backstory, then grouped into \"crews\" that execute tasks sequentially, hierarchically, or "
    "consensually. 14,800 monthly searches and 20K+ GitHub stars. Model-agnostic (OpenAI, "
    "Anthropic, Ollama). CrewAI AMP adds serverless cloud hosting, real-time tracing, and "
    "human-in-the-loop training. Lowest barrier to entry — functional multi-agent systems in "
    "under 20 lines of Python."
))

story.append(tier("LangChain / LangGraph"))
story.append(body(
    "Two layers of the same ecosystem. LangChain is the high-level component library (models, "
    "tools, retrievers, prompts). LangGraph (v1.0 stable since Sept 2025) adds stateful, "
    "cyclic-graph orchestration with built-in checkpointing, rollback, and node-level retries. "
    "27,100 monthly searches — the most adopted multi-agent framework. Native LangSmith "
    "observability. Best for enterprise-grade stateful workflows and production systems."
))

story.append(make_table(
    ["Framework", "Language", "Stars / Adoption", "Key Differentiator", "Best For"],
    [
        ["CrewAI", "Python", "20K+ stars, 5.2M dl",
         "Role-based team metaphor, 20-line setup", "Fast multi-agent prototyping"],
        ["LangGraph", "Python", "27.1K searches/mo",
         "Stateful graph orchestration, checkpointing", "Enterprise workflows"],
        ["OpenAI Agents SDK", "Python", "19K stars, 10.3M dl",
         "Handoffs, guardrails, tracing", "OpenAI-ecosystem teams"],
        ["Claude Agent SDK", "Python", "New (2026)",
         "Native OS access, multi-cloud", "Anthropic-ecosystem teams"],
        ["AutoGen", "Python", "54.6K stars",
         "Multi-agent, now Microsoft Agent Framework", "Microsoft-ecosystem teams"],
        ["Google ADK", "Python", "17.8K stars, 3.3M dl",
         "Hierarchical agents, native A2A protocol", "Cross-framework interop"],
    ],
    col_widths=[1.0*inch, 0.6*inch, 1.1*inch, 1.6*inch, 1.5*inch],
))

story.append(Spacer(1, 10))
story.append(body(
    "<b>Hosting implications:</b> These frameworks generate demand for code execution sandboxes "
    "(E2B, Modal, Daytona, Sprites.dev), orchestration infrastructure (Temporal, LangGraph Cloud), "
    "and general-purpose cloud hosting (AWS, Railway, Hetzner). They do <b>not</b> generate demand "
    "for OpenClaw-native managed platforms. The total developer population building with these "
    "frameworks — estimated at 500K-1M active developers based on combined download volumes — "
    "represents the TAM for framework-agnostic hosting providers."
))

story.append(PageBreak())

# ── TAM Sizing ──
story.append(subsection("TAM Sizing"))
story.append(body(
    "The agent hosting TAM splits into two non-overlapping segments with fundamentally different "
    "characteristics:"
))
story.append(bullet(
    "<b>Framework-agnostic infrastructure</b> (sandboxes, orchestration, cloud/VPS, NeoCloud): "
    "Serves all agent frameworks — LangChain (34.5M monthly downloads), CrewAI (5.2M downloads), "
    "OpenAI SDK (10.3M downloads), Google ADK (3.3M downloads), plus Claude SDK and AutoGen. "
    "TAM driven by an estimated 500K-1M active developers. This segment is large, growing rapidly, "
    "and contested by well-funded vendors (Modal, Temporal, E2B)."
))
story.append(bullet(
    "<b>OpenClaw-native managed platforms</b> (ZenClaw, KlausAI, Coral, ClawHost, Claw Cloud, "
    "Zo Computer): Serves only OpenClaw and derivative users. TAM is a subset of OpenClaw's "
    "~160-280K GitHub star community, with the addressable segment being non-technical users and "
    "SMBs willing to pay for managed hosting rather than self-deploy. This segment is smaller but "
    "higher-margin, with less competition from general infrastructure providers."
))
story.append(bullet(
    "<b>Edge/self-hosted counterpressure:</b> ZeroClaw's edge-first design (~3.4MB binary, runs on "
    "Raspberry Pi) and NanoClaw's container-per-conversation model actively reduce cloud hosting "
    "demand within the OpenClaw ecosystem. IronClaw's security-first posture drives deployments "
    "toward self-hosted infrastructure in regulated industries. These trends constrain the "
    "OpenClaw-native managed platform TAM from within."
))
story.append(body(
    "<b>Key insight:</b> Technology leaders evaluating the hosting landscape should understand "
    "this distinction clearly: investments in framework-agnostic infrastructure (sandboxes, "
    "orchestration) serve the entire agent market across all frameworks, while investments in "
    "OpenClaw-native platforms serve only the OpenClaw community — a meaningful but bounded "
    "addressable market."
))

story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  DECISION FRAMEWORK                     ║
# ╚══════════════════════════════════════════╝
story.append(section("The OpenClaw Hosting Decision Framework"))
story.append(hr())

story.append(body(
    "Organizations deploying OpenClaw face a consequential infrastructure decision that will shape "
    "their agent deployment posture for years. The spectrum from fully managed to fully self-hosted "
    "carries distinct implications for cost, control, security, and operational burden."
))

# Tier comparison table
story.append(Spacer(1, 8))
story.append(make_table(
    ["Tier", "Representative Vendors", "Infra Mgmt", "Per-Agent Cost", "Time-to-Value", "Control"],
    [
        ["Turnkey / No-Code", "ZenClaw, KlausAI, Coral, Lindy", "Zero", "Highest ($19-400/mo)", "Hours", "Limited"],
        ["OC-Optimized", "ClawHost, Claw Cloud, Zo Computer", "Minimal", "Moderate ($1.50-25/mo)", "Hours-Days", "Moderate"],
        ["Sandbox + Orchestration", "E2B, Sprites, Modal, Temporal, LangGraph", "Moderate", "Usage-based", "Days-Weeks", "High"],
        ["Self-Hosted", "Hetzner, Contabo, AWS EC2, Railway", "Full", "Lowest per-unit", "Weeks", "Full"],
    ],
    col_widths=[1.1*inch, 1.5*inch, 0.7*inch, 1.1*inch, 0.8*inch, 0.7*inch],
))
story.append(Spacer(1, 12))

story.append(tier("Tier 1 — Turnkey / No-Code"))
story.append(Paragraph(
    "<i>ZenClaw AI, KlausAI, Coral, Lindy AI</i>", styles["SmallMuted"]))
story.append(body(
    "These platforms offer zero infrastructure management with deployment times ranging from "
    "9 seconds (ZenClaw) to 5 minutes (KlausAI). They provide the fastest time-to-value but "
    "carry the highest per-agent cost ($19-$400/month) and the least customization flexibility. "
    "Best suited for business teams validating agent use cases and SMBs without dedicated "
    "engineering resources."
))

story.append(tier("Tier 2 — OpenClaw-Optimized Hosting"))
story.append(Paragraph(
    "<i>ClawHost, Claw Cloud, Zo Computer</i>", styles["SmallMuted"]))
story.append(body(
    "These platforms provide OpenClaw-specific tooling — agent playgrounds, skills marketplaces, "
    "pre-configured integrations — on managed VPS or container infrastructure. They offer moderate "
    "control with lower operational burden than self-hosting. ClawHost's open-source (MIT) nature "
    "provides an escape hatch. Best suited for technical teams wanting OpenClaw-specific features "
    "without building from scratch."
))

story.append(tier("Tier 3 — Sandbox + Orchestration"))
story.append(Paragraph(
    "<i>E2B, Sprites.dev, Modal, Temporal, LangGraph Cloud</i>", styles["SmallMuted"]))
story.append(body(
    "Developer-first platforms that provide the isolation, persistence, and durability primitives "
    "needed for production agent workloads. Requires integration work to assemble a complete "
    "OpenClaw hosting stack. Offers the most architectural flexibility. Best suited for engineering "
    "teams building differentiated agent infrastructure as a competitive advantage."
))

story.append(tier("Tier 4 — Self-Hosted"))
story.append(Paragraph(
    "<i>Hetzner, Contabo, AWS EC2, Railway, OVHcloud</i>", styles["SmallMuted"]))
story.append(body(
    "Full control over the entire stack — OS, runtime, networking, security. Lowest per-unit "
    "compute cost but highest operational burden (patching, monitoring, scaling, security). "
    "Best suited for enterprises with strict data residency requirements, teams with existing "
    "Kubernetes expertise, and cost-optimized deployments at scale."
))

story.append(Spacer(1, 8))
story.append(subsection("Key Decision Factors"))
story.append(bullet("<b>Team technical depth</b> — does the organization have platform engineering capability?"))
story.append(bullet("<b>Security and compliance</b> — does the deployment handle regulated data?"))
story.append(bullet("<b>Budget model</b> — optimizing for time-to-value or long-term unit economics?"))
story.append(bullet("<b>Number of agents</b> — single pilot vs. fleet of hundreds affects build-vs-buy calculus"))
story.append(bullet("<b>Integration ecosystem</b> — how many external tools must the agent connect to?"))
story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  KEY TRENDS AND DRIVERS                 ║
# ╚══════════════════════════════════════════╝
story.append(section("Key Trends and Drivers"))
story.append(hr())

trends = [
    ("The OpenClaw Ecosystem Is Driving Vertical SaaS Formation",
     "The open-source OpenClaw framework has spawned a wave of hosting providers differentiating on "
     "narrow dimensions: integration breadth (KlausAI: 40+ SaaS connectors), security posture "
     "(Coral: dedicated VM per user with authenticated proxy), model access (ZenClaw: NVIDIA NemoClaw "
     "partnership), and price point (Claw Cloud: free tier). This vertical SaaS pattern mirrors the "
     "earlier WordPress hosting ecosystem and suggests similar consolidation dynamics ahead."),
    ("Security Is the Primary Enterprise Buying Criterion",
     "The ClawJacked vulnerability (CVE-2026-25253) demonstrated that OpenClaw agents handling "
     "production credentials require robust isolation. The market now segments clearly on isolation "
     "models: shared kernel containers (Daytona, Railway), Firecracker microVMs with dedicated "
     "kernels (E2B, Sprites.dev), gVisor user-space kernels (Modal), and dedicated VMs per user "
     "(Coral, AgentComputer.ai). Enterprises handling sensitive data should require dedicated "
     "kernel isolation at minimum."),
    ("Cost Optimization Through Model Routing Is Becoming Table Stakes",
     "With LLM API costs dominating agent operating expenses, automatic model routing — sending "
     "simple tasks to cheaper models (Haiku, Flash) and reserving expensive models (Opus, GPT-4) "
     "for complex reasoning — is emerging as a critical capability. Coral claims approximately 10x "
     "cost reduction through this approach. Expect all managed platforms to adopt similar routing "
     "within 12 months."),
    ("Open Source Creates Pricing Pressure and Reduces Lock-In",
     "The availability of ClawHost (MIT), Temporal (MIT), Kagent (Apache 2.0), and OpenClaw itself "
     "as open-source projects provides a credible self-hosted alternative at every layer of the "
     "stack. This constrains managed platform pricing and gives enterprises negotiating leverage."),
    ("Checkpoint/Hibernate Patterns Enable Pay-Only-When-Active Models",
     "Sprites.dev's approximately 300ms checkpoint/restore and auto-sleep after 30 seconds of idle "
     "time represents a paradigm shift from always-on to always-available agent infrastructure. "
     "This pattern — full state preservation with zero cost during idle periods — is expected to "
     "become the standard billing model for agent hosting."),
    ("Multi-Agent Composition Drives Orchestration Demand",
     "As OpenClaw deployments mature from single agents to multi-agent systems (where one agent "
     "spawns and coordinates child agents), the need for durable orchestration layers (Temporal, "
     "LangGraph) underneath OpenClaw is increasing. Organizations planning multi-agent architectures "
     "should invest in orchestration infrastructure early."),
]

for i, (title, desc) in enumerate(trends, 1):
    story.append(numbered(i, f"<b>{title}</b>"))
    story.append(body(desc))

story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  VENDOR LANDSCAPE                       ║
# ╚══════════════════════════════════════════╝
story.append(section("Vendor Landscape Summary"))
story.append(hr())

# -- OpenClaw-Native --
story.append(subsection("OpenClaw-Native Managed Platforms"))
w1 = [0.85*inch, 0.55*inch, 0.95*inch, 0.85*inch, 0.6*inch, 1.2*inch, 1.2*inch]
story.append(make_table(
    ["Vendor", "OC Focus", "Isolation", "Integrations", "Price", "Key Strength", "Key Limitation"],
    [
        ["ZenClaw AI", "Primary", "NVIDIA NemoClaw", "Multi-model", "$400/mo",
         "9-second deploy, NVIDIA-backed", "Highest entry price"],
        ["KlausAI", "Primary", "Isolated cloud", "40+ SaaS", "$19/mo",
         "Broadest SaaS integrations", "Limited isolation"],
        ["Coral", "Primary", "Dedicated VM", "500+", "$50/mo",
         "Strongest security, auto cost routing", "Limited track record"],
        ["ClawHost", "Primary", "Hetzner VPS", "Agent playground", "$25/mo",
         "Open-source (MIT), ClawHub", "Self-managed upgrades"],
        ["Claw Cloud", "Primary", "Container (Run)", "MCP tools", "Free/$1.50",
         "Free tier, 128 vCPU max", "Shared kernel isolation"],
        ["Zo Computer", "Primary", "Managed server", "Personal cloud", "Free/$18",
         "Always-on, free tier", "Consumer-oriented"],
    ],
    col_widths=w1,
))

story.append(Spacer(1, 16))
story.append(subsection("General Managed Agent Platforms"))
w1g = [0.85*inch, 0.7*inch, 0.95*inch, 0.85*inch, 0.6*inch, 1.15*inch, 1.15*inch]
story.append(make_table(
    ["Vendor", "OC Focus", "Isolation", "Focus Area", "Price", "Key Strength", "Key Limitation"],
    [
        ["Lindy AI", "Secondary", "Managed cloud", "Business auto.", "Free/$49.99",
         "6,000+ integrations, computer use", "Not OpenClaw-specific"],
        ["Relevance AI", "Secondary", "Managed cloud", "Sales / GTM", "Free/$19",
         "Deep GTM specialization", "Narrow vertical focus"],
        ["Cognition", "Secondary", "Cloud IDE", "SWE", "$20+ACU",
         "Autonomous end-to-end SWE", "Narrow SWE scope"],
        ["Dialog Tools", "Secondary", "Sandboxed cloud", "Product intel.", "Free",
         "74+ integrations, scheduled research", "Niche use case"],
    ],
    col_widths=w1g,
))

story.append(PageBreak())

# -- Sandboxes --
story.append(subsection("Code Execution Sandboxes"))
w2 = [0.9*inch, 1.0*inch, 0.8*inch, 0.6*inch, 0.4*inch, 0.6*inch, 1.1*inch, 1.1*inch]
story.append(make_table(
    ["Vendor", "Isolation", "Persistence", "Cold Start", "GPU", "Price", "Strength", "Limitation"],
    [
        ["Daytona", "Containers (shared kernel)", "Stateful, unlimited", "~90ms", "Yes",
         "$200 credit", "GPU support, unlimited runtime", "Shared kernel isolation"],
        ["E2B", "Firecracker microVM", "Ephemeral / pause (beta)", "~150ms", "No",
         "$100 credit", "Dedicated kernel, SDK-first", "Ephemeral, 24h max"],
        ["Sprites.dev", "Firecracker microVM", "Indefinite + hibernate", "Instant", "No",
         "Per-sec", "Hibernate ~300ms, zero idle cost", "No GPU, CPU-only"],
        ["Modal", "gVisor sandbox", "Snapshots", "Sub-sec", "Yes",
         "$30/mo", "50K+ concurrency, full GPU", "Lighter than full VM"],
        ["AgentComputer", "Ubuntu 24.04 VMs", "25 GB persistent", "Sub-sec", "No",
         "$20/mo", "Built for Claude/Codex agents", "No GPU, 25 machine limit"],
    ],
    col_widths=w2,
))

story.append(Spacer(1, 16))
story.append(subsection("Agent Orchestration"))
w3 = [1.1*inch, 1.0*inch, 0.7*inch, 0.7*inch, 0.8*inch, 1.3*inch, 1.0*inch]
story.append(make_table(
    ["Vendor", "Type", "Open Source", "Self-Hosted", "Price", "Key Strength", "Limitation"],
    [
        ["LangGraph Cloud", "Managed hosting", "Yes (framework)", "Enterprise", "Free / $39/user",
         "Durable runtime, LangSmith observability", "$150K+/yr enterprise"],
        ["Temporal.io", "Durable execution", "Yes (MIT)", "Yes (free)", "$100/mo managed",
         "Battle-tested, language-native SDKs", "Not agent-specific"],
        ["Kagent", "K8s framework", "Yes (Apache 2.0)", "Yes (free)", "Free OSS",
         "K8s-native, CNCF, multi-framework", "K8s operations only"],
    ],
    col_widths=w3,
))

story.append(PageBreak())

# -- Self-hosted --
story.append(subsection("Self-Hosted Infrastructure (Cloud, VPS, NeoCloud)"))
w4 = [1.0*inch, 1.2*inch, 0.5*inch, 0.9*inch, 1.4*inch, 1.5*inch]
story.append(make_table(
    ["Vendor", "Type", "GPU", "Starting Price", "Key Strength", "Key Limitation"],
    [
        ["AWS Lambda", "Serverless functions", "No", "$0.20/1M req", "Massive scale, ecosystem", "15-min max runtime"],
        ["AWS EC2", "Virtual machines", "Yes", "On-demand", "Full control, GPU range", "Operational complexity"],
        ["DigitalOcean", "Droplets (VMs)", "Yes", "$4/mo", "Developer-friendly, managed K8s", "Smaller GPU selection"],
        ["Fly.io", "Firecracker VMs", "Ltd", "Per-second", "30+ regions, Sprites integration", "Limited GPU"],
        ["Render", "Persistent containers", "No", "Free / $25", "SOC 2, HIPAA, ISO 27001", "No GPU"],
        ["Railway", "Containers", "No", "$5/mo", "Hard spending caps, MCP server", "No GPU"],
        ["Heroku", "Dynos (containers)", "No", "$5/mo", "Simple git-push, 200+ add-ons", "Ephemeral FS, no GPU"],
        ["Hetzner", "Cloud VPS + Dedicated", "Yes", "EUR 3.79", "Exceptional price-to-performance", "Limited managed services"],
        ["OVHcloud", "VPS + Bare Metal", "Yes", "EUR 3.50", "EU data sovereignty, 40+ DCs", "Complex portfolio"],
        ["Hostinger", "VPS", "No", "$4.99/mo", "Budget-friendly, global reach", "No GPU"],
        ["GTHost", "Dedicated + GPU", "Yes", "Custom", "AI/ML optimized", "No self-service"],
        ["Contabo", "VPS + Bare Metal + GPU", "Yes", "EUR 3.60", "Aggressive pricing, H200", "Basic managed services"],
    ],
    col_widths=w4,
))
story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  SECURITY                               ║
# ╚══════════════════════════════════════════╝
story.append(section("Security Considerations for OpenClaw Deployments"))
story.append(hr())

sec_items = [
    ("Credential Storage and Isolation",
     "OpenClaw agents require access to API keys, OAuth tokens, and service credentials for the "
     "tools they operate. Critically, the default OpenClaw configuration stores these in plaintext "
     "configuration files — a practice that is unacceptable for enterprise deployments. The security "
     "of credential storage varies dramatically across hosting platforms — from browser-exposed keys "
     "(vulnerable to ClawJacked) to encrypted, row-isolated credential vaults (Coral). Enterprise "
     "deployments should require that credentials are encrypted at rest, rotated automatically, "
     "isolated per-agent, and never transit the client browser."),
    ("Network Isolation Models",
     "The market offers four distinct isolation tiers: <b>Shared kernel containers</b> (Daytona, "
     "Railway) — fastest startup, container escape exposes host. <b>gVisor user-space kernel</b> "
     "(Modal) — intercepts syscalls, stronger than containers. <b>Firecracker microVMs</b> (E2B, "
     "Sprites.dev) — hardware-level isolation with dedicated kernels. <b>Dedicated VM per user</b> "
     "(Coral) — strongest isolation, network-undiscoverable."),
    ("ClawJacked Vulnerability (CVE-2026-25253)",
     "This vulnerability exposed a class of attacks where malicious skill code could exfiltrate "
     "credentials from OpenClaw's configuration layer. While the core framework has been patched, "
     "the vulnerability highlighted systemic risks in the OpenClaw ecosystem's trust model for "
     "community-contributed skills. Coral has implemented an authenticated proxy layer as mitigation; "
     "other platforms vary in their response. Enterprises should verify specific CVE mitigation "
     "steps with each vendor and audit any community-sourced skills before deployment."),
    ("Compliance Readiness",
     "Compliance certification varies significantly: Render (SOC 2, HIPAA, ISO 27001, GDPR), "
     "Lindy AI (HIPAA, SOC 2, GDPR), Relevance AI (SOC 2 Type II, GDPR). Many newer "
     "OpenClaw-native platforms lack formal certification. Enterprises in regulated industries "
     "should require SOC 2 Type II at minimum."),
    ("Data Residency",
     "OpenClaw agents processing customer data may trigger data residency requirements. European "
     "enterprises should evaluate Hetzner, OVHcloud, and Contabo for self-hosted deployments "
     "that maintain EU data residency."),
    ("Recommendation",
     "Enterprises should require dedicated VM or microVM isolation for any OpenClaw agent handling "
     "production credentials or customer data. Shared-kernel container deployments should be "
     "limited to development, testing, and agents processing only non-sensitive data."),
]

for i, (title, desc) in enumerate(sec_items, 1):
    story.append(numbered(i, f"<b>{title}</b>"))
    story.append(body(desc))

story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  RECOMMENDATIONS                        ║
# ╚══════════════════════════════════════════╝
story.append(section("Recommendations for Technology Leaders"))
story.append(hr())

recs = [
    ("Pilot with Managed, Scale with Intent",
     "Start with a managed OpenClaw platform (KlausAI at $19/mo or Coral at $50/mo) to validate "
     "agent ROI within 30-60 days. This approach minimizes upfront infrastructure investment while "
     "generating the usage data needed to inform a long-term hosting decision. Avoid committing "
     "to annual contracts during the pilot phase."),
    ("Match Isolation to Data Sensitivity",
     "Map each agent use case to a data sensitivity tier and select hosting accordingly. Internal "
     "productivity agents can run on container-based platforms. Agents accessing customer data "
     "require dedicated kernel isolation. Agents handling regulated data (PCI, HIPAA, GDPR) "
     "should run on self-hosted infrastructure with formal compliance certification."),
    ("Invest in Cost Optimization Early",
     "LLM API costs will dominate agent operating expenses (typically 60-80% of total cost). "
     "Evaluate platforms with automatic model routing capabilities. Organizations running more "
     "than 10 agents should implement model routing as a standard practice — the cost difference "
     "can exceed an order of magnitude."),
    ("Avoid Proprietary Lock-In",
     "Prefer platforms that use standard OCI containers, open protocols (MCP, A2A), and published "
     "APIs over proprietary SDK-only interfaces. The availability of open-source alternatives at "
     "every layer means lock-in is a choice, not a necessity."),
    ("Plan for Multi-Agent Architectures",
     "Single-agent deployments are a starting point, not an end state. As deployments mature, "
     "organizations will need orchestration for multi-agent workflows where agents spawn, "
     "coordinate, and supervise other agents. For engineering teams seeking maximum flexibility, "
     "the Temporal + LangGraph combination provides durable execution guarantees (Temporal) with "
     "agent-specific abstractions (LangGraph) — enabling custom agent topologies without "
     "sacrificing reliability. Evaluate orchestration infrastructure early, even if initial "
     "deployments are single-agent."),
    ("Track These KPIs",
     "<b>Cost per agent-task:</b> total infrastructure + LLM API cost / completed tasks. "
     "<b>Agent success rate:</b> % of tasks completed without human intervention. "
     "<b>Mean time to first useful agent:</b> days from platform selection to production. "
     "<b>Credential exposure incidents:</b> security events involving agent-held credentials. "
     "<b>P95 agent response latency:</b> end-to-end time at the 95th percentile."),
]

for i, (title, desc) in enumerate(recs, 1):
    story.append(numbered(i, f"<b>{title}</b>"))
    story.append(body(desc))

story.append(PageBreak())

# ╔══════════════════════════════════════════╗
# ║  ANALYST NOTE                           ║
# ╚══════════════════════════════════════════╝
story.append(section("Analyst Note"))
story.append(hr())

story.append(body(
    "This analysis was conducted in April 2026 and reflects a market in its earliest stages of "
    "formation. Several material limitations should be considered when applying these findings. "
    "Many platforms covered in this report are in public preview (Sprites.dev) "
    "or have been generally available for fewer than six months. Pricing is subject to change, and "
    "few platforms have published case studies demonstrating enterprise-scale production deployments. "
    "The vendor landscape summary reflects publicly available information and vendor-provided data; "
    "independent verification of performance claims (cold start times, cost savings, concurrency "
    "limits) was not conducted for all vendors."
))
story.append(body(
    "This analysis assumes that OpenClaw maintains its current adoption trajectory as the leading "
    "open-source agent framework. If a competing framework gains significant enterprise traction, "
    "the OpenClaw-native hosting segment (ZenClaw, KlausAI, Coral, ClawHost, Claw Cloud, "
    "Zo Computer) faces concentration risk — these vendors have built their entire value proposition "
    "on a single framework, and framework displacement would require a fundamental business pivot. "
    "The managed OpenClaw hosting segment is likely to experience significant consolidation within "
    "12-18 months as differentiators narrow and the market matures; technology leaders should "
    "evaluate vendor financial stability alongside technical capabilities."
))
story.append(body(
    "The security landscape for agent hosting is immature — few OpenClaw hosting "
    "platforms currently hold SOC 2, HIPAA, or GDPR certification, and the OpenClaw ecosystem's "
    "trust model for community-contributed skills remains a systemic risk that no hosting platform "
    "has fully addressed. Organizations in regulated industries should conduct independent audits "
    "and not rely on vendor certification alone. Enterprises should conduct independent security "
    "assessments and penetration testing as a condition of production deployment."
))

story.append(Spacer(1, 1 * inch))
story.append(Paragraph(
    "<i>This document is provided for informational purposes only. ClawCamp Research makes no "
    "warranties regarding completeness, accuracy, or applicability. All trademarks are property "
    "of their respective owners.</i>",
    styles["SmallMuted"],
))

# ── Build PDF ──
doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    topMargin=0.75 * inch,
    bottomMargin=0.75 * inch,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    title="Market Guide: OpenClaw Agent Hosting and Execution Platforms",
    author="ClawCamp Research",
    subject="OpenClaw Agent Hosting Market Analysis — April 2026",
)

doc.build(story, onFirstPage=first_page, onLaterPages=header_footer)
print(f"PDF generated: {OUTPUT}")
