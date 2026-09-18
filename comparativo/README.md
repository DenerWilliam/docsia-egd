# Comparativo de Versoes Odoo (14-16) — Mudancas Visuais para o Cliente

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

| Metrica | v14 | v16 |
|---------|-----|-----|
| Backend (carregamento) | Basico | **3.7x mais rapido** |
| Website/controllers | Basico | **2.7x mais rapido** |
| JavaScript Web Client | Basico | Mais responsivo |
| Renderizacao de Forms | Engine antigo | Engine nova |

---

## Notas de Migracao

### Complexidade de Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias/modulo | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias/modulo | Botoes removidos, edicao inline |

### Pontos de Atencao para o Cliente

1. **v16**: Os botoes "Editar" e "Salvar" desapareceram. Agora edicao e inline.
2. **v16**: Analytic Tags foram removidas. Precisa migrar para Analytic Distribution.
