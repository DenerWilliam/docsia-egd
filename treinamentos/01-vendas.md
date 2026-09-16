# TREINAMENTO: Fluxo de Vendas no Odoo 16

## Sumario

| Modulo | Funcao |
|--------|--------|
| `sale` | Pedido de Venda — orcamento, confirmacao, faturamento |
| `sale_stock` | Integracao venda + estoque (transferencias automaticas) |
| `l10n_br_sale` | Integracao venda + fiscal (operacoes fiscais BR) |
| `account` | Faturamento — geracao de faturas |
| `l10n_br_account` | Integracao fatura + fiscal (NF-e) |
| `stock` | Gestao de estoque e transferencias |

---

## PARTE 1: Configuracao Inicial

### Etapa 1.1 — Configurar o Modulo de Vendas

**Menu:** Configuracoes > Empresa > Empresa > Aba "Vendas"

1. Configure as opcoes gerais:
   - **Modulo de Vendas:** Instalado e ativado
   - **Moeda padrao:** BRL (Real Brasileiro)
   - **Lista de Precos:** Crie listas para cada tipo de cliente
2. Configure as series de numeracao:
   - **Serie para Orcamentos:** 1
   - **Serie para Pedidos:** 1

---

### Etapa 1.2 — Configurar Condicoes de Pagamento

**Menu:** Vendas > Configuracoes > Condicoes de Pagamento

1. Crie as condicoes de pagamento da empresa:
   - **A Vista:** Pagamento na entrega
   - **30 Dias:** Pagamento em 30 dias
   - **30/60 Dias:** Parcelamento em 2x
   - **30/60/90 Dias:** Parcelamento em 3x
2. Para cada condicao:
   - **Nome:** Descricao clara
   - **Tipo:** Dias ou Fixo
   - **Dias:** Numero de dias para vencimento
   - **Parcelas:** Numero de parcelas (se aplicavel)

---

### Etapa 1.3 — Configurar Listas de Precos

**Menu:** Vendas > Configuracoes > Listas de Precos

1. Crie listas de precos:
   - **Padrao:** Preco base
   - **Atacado:** Preco com desconto para grandes quantidades
   - **VIP:** Preco especial para clientes importantes
2. Para cada produto, vincule a lista de preco correta

---

### Etapa 1.4 — Configurar Regras de Desconto

**Menu:** Vendas > Configuracoes > Regras de Desconto

1. Crie regras automaticas:
   - **Desconto por quantidade:** Ex: 10% acima de 100 unidades
   - **Desconto por cliente:** Ex: 5% para clientes VIP
   - **Desconto por periodo:** Ex: 15% em epoca de lancamento

---

## PARTE 2: Fluxo Completo — Venda com Pedido

### Etapa 2.1 — Criar um Orcamento

**Menu:** Vendas > Pedidos > Orcamentos

1. Clique em **"Criar"**
2. Preencha o cabecalho:
   - **Cliente:** Selecione o cliente
   - **Data Validade:** Data de validade do orcamento
   - **Lista de Preco:** Se aplicavel
   - **Condicao de Pagamento:** Ex: 30/60/90 dias
3. Na aba "Linhas", adicione os produtos:
   - **Produto:** Selecione o produto
   - **Descricao:** Descricao do item
   - **Quantidade:** Quantidade solicitada
   - **Preco Unitario:** Preco de venda
   - **Impostos:** Sistema calcula automaticamente
4. Verifique o **Valor Total**
5. Salve

---

### Etapa 2.2 — Enviar Orcamento ao Cliente

**Menu:** No Orcamento

1. Clique em **"Enviar por Email"**
2. Escolha o template de email
3. Revise o email e envie
4. Ou gere o PDF e envie manualmente

---

### Etapa 2.3 — Converter Orcamento em Pedido

**Menu:** No Orcamento Aprovado

1. Quando o cliente aprovar, clique em **"Confirmar"**
2. O orcamento vira um **Pedido de Venda**
3. O sistema:
   - Muda o status para "Ordem de Venda"
   - Cria a transferencia de estoque automaticamente
   - Reserva o estoque (se disponivel)

---

### Etapa 2.4 — Verificar o Pedido de Venda

**Menu:** No Pedido de Venda

1. Verifique os dados:
   - **Cliente:** Correto
   - **Produtos:** Todos os itens
   - **Quantidades:** Corretas
   - **Precos:** Conforme orcamento
   - **Impostos:** ICMS, PIS, COFINS calculados
   - **Operacao Fiscal:** CFOP correto (5.102 para venda interna)
2. Na aba "Transferencia":
   - Verifique a transferencia criada
   - Confirme o local de origem e destino

---

### Etapa 2.5 — Processar a Transferencia de Estoque

**Menu:** Na Transferencia (stock.picking)

1. Acesse a transferencia:
   - Clique no botao "Transferencia" no pedido de venda
   - Ou va em Estoque > Operacoes > Transferencias
2. Verifique se os produtos estao disponiveis
3. Se nao estiver, clique em **"Verificar Disponibilidade"**
4. Quando disponivel, clique em **"Validar"**
5. O sistema baixa o estoque automaticamente

---

### Etapa 2.6 — Gerar a Fatura

**Menu:** No Pedido de Venda > Botao "Criar Fatura"

1. Clique em **"Criar Fatura"**
2. Escolha o tipo:
   - **Fatura Avulsa:** Fatura unica
   - **Fatura Recorrente:** Faturas periodicas
3. Confirme
4. O sistema cria a fatura vinculada ao pedido

---

### Etapa 2.7 — Verificar a Fatura

**Menu:** Na Fatura (account.move)

1. Abra a fatura criada
2. Verifique:
   - **Cliente:** Correto
   - **Produtos:** Todos os itens do pedido
   - **Valores:** Conforme pedido
   - **Impostos:** Calculados corretamente
   - **Data de Vencimento:** Conforme condicao de pagamento
3. Se correto, clique em **"Confirmar"**

---

### Etapa 2.8 — Enviar NF-e (se aplicavel)

**Menu:** Na Fatura Confirmada > Botao "Documento Fiscal"

1. O documento fiscal e criado automaticamente
2. Verifique os dados fiscais
3. Clique em **"Enviar NF-e"**
4. Aguarde a autorizacao da SEFAZ
5. Imprima o DANFE

---

### Etapa 2.9 — Registrar Pagamento

**Menu:** Na Fatura > Botao "Registrar Pagamento"

1. Clique em **"Registrar Pagamento"**
2. Informe:
   - **Valor:** Valor pago
   - **Data do Pagamento:** Data do recebimento
   - **Metodo de Pagamento:** Dinheiro, PIX, Boleto, Cartao
3. Confirme
4. A fatura fica como "Paga"

---

### Etapa 2.10 — Consultar Faturamento

**Menu:** Vendas > Relatorios

1. Consulte os relatorios:
   - **Faturamento por Periodo:** Receita total
   - **Faturamento por Cliente:** Quanto cada cliente comprou
   - **Faturamento por Produto:** Quais produtos mais venderam
   - **Comissao de Vendedores:** Comissao por vendedor

---

## PARTE 3: Situacoes Especiais

### 3.1 — Cancelar um Pedido

**So e possivel cancelar se:**
- A fatura NAO foi gerada
- A transferencia NAO foi validada

**Passos:**

1. Abra o pedido de venda
2. Clique em **"Cancelar"**
3. Confirme
4. O pedido e cancelado e o estoque e liberado

---

### 3.2 — Devolver Mercadoria

**Quando usar:** Cliente devolveu produto

1. Abra o pedido de venda
2. Clique em **"Devolver"**
3. Informe:
   - **Motivo da devolucao**
   - **Produtos a devolver**
   - **Quantidades**
4. Confirme
5. A transferencia de devolucao e criada

---

### 3.3 — Alterar Pedido Confirmado

**Quando usar:** Cliente quer alterar quantidade ou adicionar item

1. Abra o pedido confirmado
2. Clique em **"Modo Edicao"**
3. Altere as linhas do pedido
4. Se aumentou quantidade:
   - Verifique se ha estoque disponivel
   - Se nao, cancele e recrie o pedido
5. Se diminuiu quantidade:
   - O estoque e liberado automaticamente
6. Salve

---

## PARTE 4: Erros Comuns e Solucoes

| Erro | Causa | Solucao |
|------|-------|---------|
| **Estoque insuficiente** | Produto sem estoque | Verificar disponibilidade ou aguardar reposicao |
| **Imposto nao calculado** | Operacao fiscal nao configurada | Verificar configuracao de operacoes fiscais |
| **Cliente sem CNPJ** | Cadastro incompleto | Completar dados do cliente |
| **Lista de preco nao aplicada** | Produto sem vinculo | Vincular produto a lista de preco |
| **Fatura com valor errado** | Desconto nao aplicado | Verificar regras de desconto |
| **Transferencia nao criada** | Modulo de estoque nao instalado | Instalar `sale_stock` |

---

## PARTE 5: Fluxo Resumido

```
ORCAMENTO
    │
    ├── 1. Criar orcamento com cliente e produtos
    ├── 2. Enviar ao cliente
    ├── 3. Cliente aprova
    │
    ▼
PEDIDO DE VENDA
    │
    ├── 4. Confirmar pedido
    ├── 5. Verificar operacao fiscal
    │
    ▼
TRANSFERENCIA DE ESTOQUE
    │
    ├── 6. Verificar disponibilidade
    ├── 7. Validar transferencia
    │
    ▼
FATURA
    │
    ├── 8. Criar fatura
    ├── 9. Confirmar fatura
    ├── 10. Enviar NF-e (se aplicavel)
    │
    ▼
PAGAMENTO
    │
    ├── 11. Registrar pagamento
    │
    ▼
FIM
```

---

## Referencia: Modulos Envolvidos

| Modulo | Quando Usado |
|--------|--------------|
| `sale` | Criacao de orcamentos e pedidos de venda |
| `sale_stock` | Integracao com estoque (transferencias automaticas) |
| `l10n_br_sale` | Integracao com operacoes fiscais brasileiras |
| `account` | Geracao e gestao de faturas |
| `l10n_br_account` | Integracao fatura + NF-e |
| `stock` | Gestao de estoque e transferencias |
| `l10n_br_stock` | Integracao estoque + fiscal |

---

*Treinamento baseado na documentacao dd-modulos Odoo 16 — Localizacao Brasileira OCA*
