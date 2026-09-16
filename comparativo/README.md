# Comparativo de Versoes Odoo (14-19) — Mudancas Visuais para o Cliente

## Legenda

| Simbolo | Significado |
|---------|-------------|
| ✅ | Disponivel e funcional |
| ⚠️ | Disponivel com mudancas significativas |
| ❌ | Nao disponivel |
| 🔄 | Renomeado ou substituido |
| 📦 | Incluido no core |

## Versoes

| Versao | Data Release | Status |
|--------|--------------|--------|
| Odoo 14 | Outubro 2020 | Suporte encerrado |
| Odoo 15 | Outubro 2021 | Suporte encerrado |
| Odoo 16 | Outubro 2022 | LTS (Suporte estendido) |
| Odoo 17 | Outubro 2023 | Suporte ativo |
| Odoo 18 | Outubro 2024 | Suporte ativo |
| Odoo 19 | Setembro 2025 | Mais recente |

---

## Mudancas Visuais Gerais (Afetam TODOS os modulos)

### Odoo 14 → Odoo 16 (Migracao Principal)

| O que mudou | Odoo 14 (Antes) | Odoo 16 (Depois) | Impacto para o usuario |
|-------------|-----------------|-------------------|------------------------|
| **Botoes Editar/Salvar** | Topo do form, dois botoes grandes | **REMOVIDOS** — edicao inline (1 clique no campo) | Usuario clica direto no campo e edita, salva automaticamente |
| **Botoes CREATE/CONFIRM** | Canto superior esquerdo | Canto superior direito | Muda o ponto de clique, usuario precisa se habituar |
| **Acoes e Print** | Topo da pagina | Canto superior direito (icone) | Menu de acoes agora e um icone, nao texto |
| **Help por campo** | Nao existia | Icone (?) ao lado de cada campo | Usuario pode tirar duvidas sobre o campo |
| **Internal Link** | Nao existia | Link direto em campos Many2one | Clique no campo abre o registro relacionado |
| **Bootstrap** | Versao 4 | Versao 5 | Botoes e cards podem ter visual levemente diferente |
| **Dark Mode** | Nao existia | Disponivel nas configuracoes | Usuario pode usar tema escuro |
| **Kanban Cards** | Design basico | Redesignados com mais info | Cards mostram mais dados, mais bonitos |
| **Headers Kanban** | Rolam com a pagina | Fixos (freeze ao rolar) | Titulo da coluna fica visivel sempre |
| **Search Bar** | Barra basica | Barra com filtros avancados | Mais opcoes de busca, mais intuitivo |
| **Statusbar** | Barrinha no topo | Mantida mas visual atualizado | Mesma funcao, visual mais limpo |

### Odoo 16 → Odoo 17 (Redesign Completo)

| O que mudou | Odoo 16 (Antes) | Odoo 17 (Depois) | Impacto para o usuario |
|-------------|-----------------|-------------------|------------------------|
| **Framework JS** | OWL 1.x | OWL 2.x | Performance melhorada, mas views podem quebrar |
| **Menu Lateral** | Icones + texto | Icones apenas (expande ao passar mouse) | Menu mais limpo, menos Poluicao visual |
| **Botoes de Acao** | Header padrao | Header com botoes menores e mais discretos | Botoes menos "gordinhos", visual mais flat |
| **Search Bar** | Barra classica | Barra com chips de filtro | Filtros aparecem como "pills" removiveis |
| **Form Views** | Header/sheet padrao | Estrutura similar, mas mais espacosa | Mais respiro entre campos |
| **Kanban** | Cards com bordas | Cards mais clean, sem bordas | Visual mais moderno |
| **Relatorios** | PDF basico | Relatorios com graficos embutidos | Dashboards mais visuais |
| **Botao Editar** | Ja nao existia | Confirmado que nao volta | Continua edicao inline |

### Odoo 17 → Odoo 18 (Refinamentos)

| O que mudou | Odoo 17 (Antes) | Odoo 18 (Depois) | Impacto para o usuario |
|-------------|-----------------|-------------------|------------------------|
| **AI CRM** | Nao existia | Sugestoes de proxima ação | Sistema sugere o que fazer com cada lead |
| **AI Documents** | Nao existia | Geracao automatica de documentos | Cria propostas/orcamentos com IA |
| **AI Sign** | Nao existia | Assinatura digital com IA | Assinatura mais rapida e segura |
| **POS** | Layout classico | Novos presets e design | PDV mais bonito e funcional |
| **Website** | Editor basico | Novos temas e componentes | Sites mais profissionais |
| **Seguranca** | Padrão | Melhorias de autenticacao | Login mais seguro |

### Odoo 18 → Odoo 19 (Inovacoes)

| O que mudou | Odoo 18 (Antes) | Odoo 19 (Depois) | Impacto para o usuario |
|-------------|-----------------|-------------------|------------------------|
| **AI CRM** | Sugestoes basicas | CRM completamente assistido por IA | IA cria leads, qualifica, sugere acoes |
| **AI Documents** | Geracao basica | Documentos inteligentes com contexto | IA entende o contexto e cria documentos melhores |
| **AI Sign** | Assinatura digital | Assinatura com validade juridica melhorada | Assinatura mais robusta |
| **POS Presets** | Nao existia | Configuracao de pratos/mesas | PDV para restaurantes muito melhor |
| **Website** | Templates basicos | Templates com IA | Sites criados automaticamente |
| **Mobile** | Responsivo basico | Experiencia mobile nativa | Uso no celular muito melhor |

---

## Mudancas por Area Funcional

### Interface Geral

```
ODOO 14:                          ODOO 16:
+---------------------------+     +---------------------------+
| [Editar] [Salvar]        |     |                    [+] [?]|
| [Criar]                   |     |                           |
|---------------------------|     |---------------------------|
| Titulo do Registro       |     | Titulo do Registro       |
| [Campo] [Campo]          |     | [Campo] [Campo]          |
| [Campo] [Campo]          |     | [Campo] [Campo]          |
+---------------------------+     +---------------------------+

ODOO 17:
+---------------------------+
| Menu: [≡] [Icones]       |
|---------------------------|
| Titulo do Registro       |
| [Campo] [Campo]          |
| [Campo] [Campo]          |
+---------------------------+
```

### Analytic (Mudanca Critica)

```
ODOO 14:                          ODOO 16:
+---------------------------+     +---------------------------+
| Analytic Account: [___]   |     | Analytic Distribution     |
| Analytic Tags:           |     | Plano: [Custos      v]   |
|  [x] Vendas              |     | Conta           | %      |
|  [x] TI                  |     | +-------------+--------+ |
|  [ ] Admin               |     | | Vendas      |  60%   | |
+---------------------------+     | | TI          |  25%   | |
                                  | | Admin       |  15%   | |
                                  | +-------------+--------+ |
                                  | Total: 100%              |
                                  +---------------------------+
```

**O que acontece:** As "Analytic Tags" foram REMOVIDAS. Agora usa-se "Analytic Distribution" com planos e percentuais. Mudeus muda completamente a forma como o cliente distribui custos analytic.

---

## Performance

| Metrica | v14 | v16 | v17 |
|---------|-----|-----|-----|
| Backend (carregamento) | Basico | **3.7x mais rapido** | Ainda mais rapido |
| Website/controllers | Basico | **2.7x mais rapido** | Otimizado |
| JavaScript Web Client | Basico | Mais responsivo | OWL 2.x |
| Renderizacao de Forms | Engine antigo | Engine nova | Engine otimizada |

---

## Notas de Migracao

### Complexidade de Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias/modulo | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias/modulo | Botoes removidos, edicao inline |
| v16 -> v17 | **Media** | 2-3 dias/modulo | Menu lateral redesenhado |
| v17 -> v18 | Baixa | 1-2 dias/modulo | AI features |
| v18 -> v19 | Baixa | 1-2 dias/modulo | AI avancado |

### Pontos de Atencao para o Cliente

1. **v16**: Os botoes "Editar" e "Salvar" desapareceram. Agora edicao e inline.
2. **v16**: Analytic Tags foram removidas. Precisa migrar para Analytic Distribution.
3. **v17**: Menu lateral mudou completamente. Treinamento necessario.
4. **v18-19**: IA pode criar documentos automaticamente. Configurar permissões.
