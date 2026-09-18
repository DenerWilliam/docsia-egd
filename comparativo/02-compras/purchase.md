# Comparativo: purchase (Compras) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | purchase |
| Nome Amigavel | Compras |
| Autor | Odoo S.A. |
| Repositorio | https://www.odoo.com/app/purchase |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela Odoo |
| Odoo 16 | ✅ Disponivel | Versao LTS |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario de Pedido de Compra

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes | **REMOVIDOS** | Edicao inline |
| **Botao Confirmar** | Botao grande "Confirm Order" | Botao no header, mais limpo | Visual moderno |
| **Botao Send by Email** | Botao grande | Botao no header | Mais discreto |
| **Statusbar** | Draft -> RFQ -> PO | Mantido mas mais limpo | Visual atualizado |
| **Titulo dinamico** | "Request for Quotation" estatico | Muda entre "RFQ" e "Purchase Order" | Titulo reflete estado |
| **Help por campo** | Nao existia | Icone (?) ao lado | Tira duvidas |
| **Internal Link** | Nao existia | Link nos Many2one | Clica e abre registro |

#### RFQ Alternativas (Novo!)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Multi-fornecedor** | Criar RFQ separado para cada | Criar multiplos RFQs da mesma solicitacao | Compara fornecedores lado a lado |
| **Comparacao** | Manual | Interface de comparacao | Ve precos e prazos juntos |
| **Selecao** | Cada RFQ e independente | Seleciona o melhor na tela | Mais intuitivo |

#### Call for Tender (Redesenhado)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Interface** | Basica | **Completamente renovada** | Muito mais bonita e funcional |
| **Performance** | Lenta | Mais rapida | Carrega mais rapido |
| **Comparacao** | Basica | Melhor visualizacao | Ve mais dados de uma vez |

#### Tracking em Tempo Real (Novo!)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **PO Tracking** | Nao existia | Disponivel | Acompanha pedido em tempo real |
| **Recebimento Tracking** | Nao existia | Disponivel | Sabe quando chegou |

---

## Fluxo Visual: Criar Pedido de Compra

```
ODOO 14:
1. Clica "Criar" (canto esquerdo)
2. Seleciona fornecedor
3. Adiciona produtos
4. Clica "Salvar" (botao grande)
5. Clica "Send by Email" (botao grande)
6. Clica "Confirm Order" (botao grande)

ODOO 16:
1. Clica "Criar" (canto direito)
2. Seleciona fornecedor (com Internal Link)
3. Adiciona produtos (edicao inline)
4. Clica "Send by Email" (botao no header)
5. Clica "Confirm Order" (botao no header)
6. **Pode criar RFQ alternativas para comparar**
```

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias | Botoes removidos, RFQ alternativas |

---

## Notas

- RFQ Alternativas e a maior novidade visual em v16
- Call for Tender redesenhado melhora experiencia
- Treinamento necessario para novos recursos
