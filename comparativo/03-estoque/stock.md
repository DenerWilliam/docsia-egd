# Comparativo: stock (Estoque) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | stock |
| Nome Amigavel | Inventario |
| Autor | Odoo S.A. |
| Repositorio | https://www.odoo.com/app/inventory |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela Odoo |
| Odoo 16 | ✅ Disponivel | Versao LTS |
| Odoo 17 | ✅ Disponivel | Atualizado para OWL |
| Odoo 18 | ✅ Disponivel | Compativel |
| Odoo 19 | ✅ Disponivel | Funcional |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario de Transferencia (Picking)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes | **REMOVIDOS** | Edicao inline |
| **Botao Validar** | Botao grande no topo | Botao no header, visual limpo | Mesma funcao, visual novo |
| **Botao Mark as Todo** | Botao grande | Botao no header | Mais discreto |
| **Chatter nos Transfers** | **NAO EXISTIA** | **ADICIONADO** | Historico completo de movimentacoes |
| **Kanban nos Transfers** | **NAO EXISTIA** | **ADICIONADO** | Visao kanban dos movimentos |
| **Statusbar** | Draft -> Done | Mantido mas mais limpo | Visual atualizado |
| **Priority** | Estrela basica | Widget de prioridade mejorado | Mais intuitivo |

#### Batch Transfer (Novo!)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Batch Manual** | Criar batch manualmente | **AUTOMATICO** por: contato, transportadora, pais, local | Sistema agrupa automaticamente |
| **Configuracao** | Nao existia | Checkboxes no tipo de operacao | Cliente configura regras |
| **Limites** | Nao existia | Max linhas, transfers, peso | Controle fino do batch |
| **Auto confirm** | Nao existia | Checkbox de auto-confirmacao | Batch confirma sozinho |

**Configuracao visual do Batch Automatico:**

```
+----------------------------------------------------------+
|          CONFIGURACAO BATCH AUTOMATICO                    |
+----------------------------------------------------------+
|                                                          |
|  Group by:                                               |
|    [x] Contact                                          |
|    [x] Carrier                                          |
|    [ ] Destination Country                               |
|    [ ] Destination Location                              |
|                                                          |
|  Limites:                                                |
|    Maximo de linhas por batch:     [___]                 |
|    Maximo de transfers por batch:  [___]                 |
|    Maximo de peso por batch:       [___]                 |
|                                                          |
|  Auto confirm: [x]                                       |
|                                                          |
+----------------------------------------------------------+
```

#### Inventory Adjustments (Melhorado)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Storage Categories** | Nao existia | Categorias de armazenamento | Organiza produtos por tipo de local |
| **Last Count Date** | Nao existia | Data da ultima contagem | Sabe quando contou pela ultima vez |
| **Apply All** | Nao existia | Botao para aplicar todos de uma vez | Mais rapido |
| **Filtro estrelados** | Nao existia | Produtos favoritos | Prioriza contagem |

#### Replenishment (Melhorado)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Location** | Nao configuravel | Reposicao para local especifico | Mais preciso |
| **Visibility Days** | Nao existia | Configura dias de visibilidade | Considera quantidades futuras |

---

### Odoo 16 → Odoo 17

| Elemento | Odoo 16 (Antes) | Odoo 17 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Menu Lateral** | Icones + texto | Icones apenas | Menu mais limpo |
| **Search Bar** | Barra classica | Chips de filtro | Filtros como pills |
| **Reporting** | Relatorios classicos | **100% redesenhado** | Dashboards com graficos |
| **Form** | Estrutura padrao | Mais espacamento | Mais respiro |

---

### Odoo 17 → Odoo 18

| Elemento | Odoo 17 (Antes) | Odoo 18 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI Forecast** | Previsao basica | Previsao com IA | IA prevê demanda |
| **Otimizacao** | Manual | Sugerida por IA | IA sugere reposicao |

---

### Odoo 18 → Odoo 19

| Elemento | Odoo 18 (Antes) | Odoo 19 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI Forecast** | Previsao basica | Previsao inteligente | IA aprende com historico |
| **Otimizacao** | Sugerida | Automatica | IA otimiza estoque |

---

## Fluxo Visual: Transferir Estoque

```
ODOO 14:
1. Clica "Criar" (canto esquerdo)
2. Seleciona tipo de operacao
3. Adiciona produtos
4. Clica "Mark as Todo" (botao grande)
5. Clica "Validate" (botao grande)
6. Sem historico de movimentacoes

ODOO 16:
1. Clica "Criar" (canto direito)
2. Seleciona tipo de operacao
3. Adiciona produtos (edicao inline)
4. Clica "Mark as Todo" (botao no header)
5. Clica "Validate" (botao no header)
6. **Chatter mostra historico completo**
7. **Batch agrupa automaticamente**

ODOO 17+:
1. Clica "+" (canto direito)
2. Seleciona tipo
3. Adiciona produtos
4. Clica "Validate"
5. IA sugere otimizacoes
6. Historico completo no chatter
```

---

## Breaking Changes

### v16 → v17
- Views redesenhadas para OWL
- Campo `quantities` pode ter widgets diferentes
- Reporting completamente novo
- Botoes de acao visualmente menores

### v17 → v18
- APIs de IA podem exigir configuracao
- Novos campos de forecast

### v18 → v19
- AI pode automatizar reposicao

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | **Media** | 2-3 dias | Batch automatico, Chatter |
| v16 -> v17 | Media | 2-3 dias | Reporting redesenhado |
| v17 -> v18 | Baixa | 1-2 dias | AI features |
| v18 -> v19 | Baixa | 1-2 dias | AI avancado |

---

## Notas

- Batch automatico e a maior novidade visual em v16
- Chatter nos transfers melhora rastreabilidade
- Reporting em v17 e completamente diferente
- Treinamento necessario para novos recursos
