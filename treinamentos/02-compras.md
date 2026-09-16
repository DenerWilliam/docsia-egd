# TREINAMENTO: Fluxo de Compras no Odoo 16

## Sumario

| Modulo | Funcao |
|--------|--------|
| `purchase` | Pedido de Compra — RFQ, confirmacao, recebimento |
| `purchase_stock` | Integracao compra + estoque (recebimento automatico) |
| `l10n_br_purchase` | Integracao compra + fiscal (operacoes fiscais BR) |
| `account` | Faturamento — faturas de fornecedor |
| `l10n_br_account` | Integracao fatura + fiscal (NF-e de entrada) |
| `stock` | Gestao de estoque e recebimentos |

---

## PARTE 1: Configuracao Inicial

### Etapa 1.1 — Configurar o Modulo de Compras

**Menu:** Configuracoes > Empresa > Empresa > Aba "Compras"

1. Configure as opcoes gerais:
   - **Modulo de Compras:** Instalado e ativado
   - **Moeda padrao:** BRL (Real Brasileiro)
2. Configure as preferencias:
   - **Aprovacao de pedidos:** Se necessario
   - **Limite para aprovacao:** Valor maximo sem aprovacao

---

### Etapa 1.2 — Cadastrar Fornecedores

**Menu:** Compras > Cadastros > Fornecedores

1. Para cada fornecedor, preencha:
   - **Nome / Razao Social**
   - **CNPJ / CPF**
   - **Inscricao Estadual**
   - **Endereco completo**
   - **Dados Bancarios:** Banco, Agencia, Conta, Chave PIX
   - **Condicao de Pagamento padrao**
   - **Lista de Precos do fornecedor**
2. Salve

---

### Etapa 1.3 — Configurar Regras de Reabastecimento

**Menu:** Estoque > Configuracoes > Regras de Reabastecimento

1. Para cada produto, configure:
   - **Ponto de Pedido:** Nivel minimo para gerar compra automatica
   - **Quantidade Alvo:** Quantidade desejada em estoque
   - **Fornecedor Padrao:** Fornecedor preferencial
   - **Lead Time:** Tempo de entrega em dias
2. O sistema gera sugestao de compra automaticamente

---

## PARTE 2: Fluxo Completo — Compra com RFQ

### Etapa 2.1 — Criar Pedido de Compra (RFQ)

**Menu:** Compras > Pedidos > Pedidos

1. Clique em **"Criar"**
2. Preencha o cabecalho:
   - **Fornecedor:** Selecione o fornecedor
   - **Data de Envelope:** Data prevista de entrega
   - **Condicao de Pagamento:** Conforme combinado
   - **Moeda:** BRL (padrao)
3. Na aba "Linhas", adicione os produtos:
   - **Produto:** Selecione o produto
   - **Descricao:** Descricao do item
   - **Quantidade:** Quantidade desejada
   - **Preco Unitario:** Preco de compra
   - **Impostos:** Sistema calcula automaticamente
4. Verifique o **Valor Total**
5. Salve

---

### Etapa 2.2 — Enviar RFQ ao Fornecedor

**Menu:** No RFQ

1. Clique em **"Enviar por Email"**
2. Escolha o template de email
3. Revise o email e envie
4. Ou gere o PDF e envie manualmente
5. O status muda para "Enviado"

---

### Etapa 2.3 — Confirmar Pedido de Compra

**Menu:** No RFQ Aprovado

1. Quando o fornecedor confirmar, clique em **"Confirmar Pedido"**
2. O RFQ vira um **Pedido de Compra**
3. O sistema:
   - Muda o status para "Ordem de Compra"
   - Cria a transferencia de recebimento automaticamente

---

### Etapa 2.4 — Verificar o Pedido de Compra

**Menu:** No Pedido de Compra

1. Verifique os dados:
   - **Fornecedor:** Correto
   - **Produtos:** Todos os itens
   - **Quantidades:** Conforme RFQ
   - **Precos:** Conforme combinado
   - **Impostos:** ICMS, PIS, COFINS calculados
   - **Operacao Fiscal:** CFOP correto (1.101 para compra interna)
2. Na aba "Transferencia":
   - Verifique a transferencia de recebimento criada
   - Confirme o local de destino

---

### Etapa 2.5 — Receber a Mercadoria

**Menu:** Na Transferencia de Recebimento (stock.picking)

1. Acesse a transferencia:
   - Clique no botao "Transferencia" no pedido de compra
   - Ou va em Estoque > Operacoes > Recebimentos
2. Quando a mercadoria chegar:
   - Verifique a quantidade recebida
   - Verifique a qualidade (se aplicavel)
   - Se houver divergencia, ajuste as quantidades
3. Clique em **"Validar"**
4. O sistema:
   - Baixa o estoque automaticamente
   - Cria as movimentacoes de estoque
   - Gera o documento fiscal de entrada

---

### Etapa 2.6 — Verificar o Documento Fiscal de Entrada

**Menu:** No Documento Fiscal

1. Acesse o documento fiscal criado automaticamente
2. Verifique:
   - **Tipo de Documento:** NF-e de Entrada
   - **Fornecedor:** CNPJ/IE correto
   - **Produtos:** Todos os itens recebidos
   - **Impostos:** ICMS, PIS, COFINS com aliquotas corretas
   - **CFOP:** 1.101 (compra interna)
3. Se houver divergencia, ajuste antes de confirmar

---

### Etapa 2.7 — Criar Fatura de Fornecedor

**Menu:** No Pedido de Compra > Botao "Criar Fatura"

1. Clique em **"Criar Fatura"**
2. Escolha o tipo:
   - **Fatura de Fornecedor:** Fatura unica
   - **Fatura Recorrente:** Faturas periodicas
3. Confirme
4. O sistema cria a fatura vinculada ao pedido

---

### Etapa 2.8 — Verificar a Fatura de Fornecedor

**Menu:** Na Fatura (account.move)

1. Abra a fatura criada
2. Verifique:
   - **Fornecedor:** Correto
   - **Produtos:** Todos os itens do pedido
   - **Valores:** Conforme pedido
   - **Impostos:** Calculados corretamente
   - **Data de Vencimento:** Conforme condicao de pagamento
3. Se correto, clique em **"Confirmar"**

---

### Etapa 2.9 — Enviar NF-e de Entrada (se aplicavel)

**Menu:** Na Fatura Confirmada > Botao "Documento Fiscal"

1. O documento fiscal e criado automaticamente
2. Verifique os dados fiscais
3. Clique em **"Enviar NF-e"**
4. Aguarde a autorizacao da SEFAZ

---

### Etapa 2.10 — Registrar Pagamento ao Fornecedor

**Menu:** Na Fatura > Botao "Registrar Pagamento"

1. Clique em **"Registrar Pagamento"**
2. Informe:
   - **Valor:** Valor pago
   - **Data do Pagamento:** Data do pagamento
   - **Metodo de Pagamento:** PIX, Boleto, Transferencia
3. Confirme
4. A fatura fica como "Paga"

---

## PARTE 3: Situacoes Especiais

### 3.1 — Cancelar um Pedido de Compra

**So e possivel cancelar se:**
- A fatura NAO foi gerada
- A transferencia NAO foi validada

**Passos:**

1. Abra o pedido de compra
2. Clique em **"Cancelar"**
3. Confirme
4. O pedido e cancelado

---

### 3.2 — Devolver Mercadoria ao Fornecedor

**Quando usar:** Produto com defeito ou erro na entrega

1. Abra o pedido de compra
2. Clique em **"Devolver"**
3. Informe:
   - **Motivo da devolucao**
   - **Produtos a devolver**
   - **Quantidades**
4. Confirme
5. A transferencia de devolucao e criada
6. Gere a NF-e de devolucao (se aplicavel)

---

### 3.3 — Alterar Pedido Confirmado

**Quando usar:** Fornecedor vai entregar menos ou mais

1. Abra o pedido confirmado
2. Clique em **"Modo Edicao"**
3. Altere as quantidades nas linhas
4. Se aumentou quantidade:
   - Verifique se o fornecedor aceita
   - Se nao, cancele e recrie o pedido
5. Se diminuiu quantidade:
   - O estoque previsto e ajustado
6. Salve

---

## PARTE 4: Erros Comuns e Solucoes

| Erro | Causa | Solucao |
|------|-------|---------|
| **Fornecedor sem CNPJ** | Cadastro incompleto | Completar dados do fornecedor |
| **Imposto nao calculado** | Operacao fiscal nao configurada | Verificar configuracao de operacoes fiscais |
| **CFOP errado** | Operacao fiscal incorreta | Verificar operacao fiscal no pedido |
| **Estoque duplicado** | Recebimento processado 2x | Verificar historico de transferencias |
| **Fatura com valor errado** | Preco nao conferido | Verificar preco no pedido vs fatura |
| **Nota fiscal rejeitada** | Dados do fornecedor errados | Verificar CNPJ/IE no cadastro |

---

## PARTE 5: Fluxo Resumido

```
RFQ (REQUISICAO DE COMPRA)
    │
    ├── 1. Criar RFQ com fornecedor e produtos
    ├── 2. Enviar ao fornecedor
    ├── 3. Fornecedor confirma
    │
    ▼
PEDIDO DE COMPRA
    │
    ├── 4. Confirmar pedido
    ├── 5. Verificar operacao fiscal
    │
    ▼
RECEBIMENTO DE ESTOQUE
    │
    ├── 6. Receber mercadoria
    ├── 7. Verificar quantidades
    ├── 8. Validar recebimento
    │
    ▼
DOCUMENTO FISCAL
    │
    ├── 9. Verificar NF-e de entrada
    ├── 10. Confirmar documento fiscal
    │
    ▼
FATURA DE FORNECEDOR
    │
    ├── 11. Criar fatura
    ├── 12. Confirmar fatura
    │
    ▼
PAGAMENTO
    │
    ├── 13. Registrar pagamento
    │
    ▼
FIM
```

---

## Referencia: Modulos Envolvidos

| Modulo | Quando Usado |
|--------|--------------|
| `purchase` | Criacao de RFQs e pedidos de compra |
| `purchase_stock` | Integracao com estoque (recebimentos automaticos) |
| `l10n_br_purchase` | Integracao com operacoes fiscais brasileiras |
| `account` | Geracao e gestao de faturas de fornecedor |
| `l10n_br_account` | Integracao fatura + NF-e de entrada |
| `stock` | Gestao de estoque e recebimentos |
| `l10n_br_stock` | Integracao estoque + fiscal |

---

*Treinamento baseado na documentacao dd-modulos Odoo 16 — Localizacao Brasileira OCA*
